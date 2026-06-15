/**
 * Hero WebGL scene — an abstract "analytics constellation".
 *
 * A slowly rotating cloud of data nodes connected by faint links, in the
 * BioNixus navy/gold palette. Evokes market-research data networks without any
 * literal imagery. This module is loaded lazily and ONLY on the client (see
 * ClientOnly3D) so three.js never executes during SSR and never lands in the
 * main bundle.
 *
 * Performance: rendering is driven by react-three-fiber's frameloop and pauses
 * automatically when the canvas is offscreen or the tab is hidden (frameloop
 * is set to "demand"/"always" by the wrapper via the `active` prop).
 */
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 90;
const LINK_DISTANCE = 1.5;
const GOLD = new THREE.Color('#f59e0a');
const GOLD_LIGHT = new THREE.Color('#fbcb6b');
const FIELD = 7;

type Mode = 'full' | 'lite';

function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function useConstellation(count: number) {
  return useMemo(() => {
    const rand = seededRandom(20260615);
    const positions = new Float32Array(count * 3);
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < count; i += 1) {
      const x = (rand() - 0.5) * FIELD;
      const y = (rand() - 0.5) * FIELD * 0.6;
      const z = (rand() - 0.5) * FIELD;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      points.push(new THREE.Vector3(x, y, z));
    }

    // Pre-compute links between nearby nodes (static topology, cheap to render).
    const linkVerts: number[] = [];
    for (let i = 0; i < count; i += 1) {
      for (let j = i + 1; j < count; j += 1) {
        if (points[i].distanceTo(points[j]) < LINK_DISTANCE) {
          linkVerts.push(points[i].x, points[i].y, points[i].z);
          linkVerts.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    return { positions, linkPositions: new Float32Array(linkVerts) };
  }, [count]);
}

function Constellation({ mode }: { mode: Mode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const count = mode === 'lite' ? 55 : NODE_COUNT;
  const { positions, linkPositions } = useConstellation(count);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Slow autonomous rotation + gentle parallax toward the pointer.
    group.current.rotation.y += delta * 0.06;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.04;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.04;
    group.current.rotation.x = pointer.current.y * 0.18;
    group.current.position.x = pointer.current.x * 0.4;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.13}
          sizeAttenuation
          color={GOLD}
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </points>
      {linkPositions.length > 0 ? (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linkPositions, 3]}
              count={linkPositions.length / 3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={GOLD_LIGHT}
            transparent
            opacity={mode === 'lite' ? 0.12 : 0.18}
            depthWrite={false}
          />
        </lineSegments>
      ) : null}
    </group>
  );
}

export default function HeroScene({ mode = 'full' }: { mode?: Mode }) {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={mode === 'lite' ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0, 9], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <Constellation mode={mode} />
    </Canvas>
  );
}
