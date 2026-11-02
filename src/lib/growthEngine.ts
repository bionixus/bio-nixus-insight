/* eslint-disable */
/**
 * Growth Engine: the alsaadany.com WebGL particle field, in BioNixus colours.
 * Each particle is a data point; its colour is its temperature, from teal (cold) to ember (hot).
 * Shapes: 0 market orb · 1 funnel · 2 flywheel · 3 growth bars · 4 globe (BioNixus offices) · 5 arch.
 * One fixed canvas renders the shape of whichever stage element sits nearest the middle of the
 * viewport, morphing between shapes as the reader scrolls. Purely decorative.
 */

const VERT = `
precision highp float;
attribute vec4 aOrb;
attribute vec4 aBars;
attribute vec4 aGlobe;
attribute vec4 aArch;
attribute vec4 aRand;
uniform mat4 uProj;
uniform float uTime, uShapeA, uShapeB, uMix, uLeak, uIntro, uScale, uMouseAmt, uAspect, uDpr, uSize, uAlpha, uCamZ;
uniform vec2 uOffset, uTilt, uMouse;
varying vec3 vColor;
varying float vAlpha;

const float PI = 3.14159265;
const float TAU = 6.28318531;

vec3 rotY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
vec3 rotX(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z); }
vec3 rotZ(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x - s * p.y, s * p.x + c * p.y, p.z); }
float hash(float n) { return fract(sin(n) * 43758.5453123); }

void orbShape(out vec3 p, out float t, out float a, out float s) {
  p = aOrb.xyz;
  float ring = step(1.2, length(p.xz));
  p = rotY(p, uTime * (0.08 + 0.15 * ring));
  p *= 1.0 + 0.022 * sin(uTime * 1.2 + aRand.z * TAU);
  p = rotZ(rotX(p, 0.44), -0.24);
  t = aOrb.w; a = 1.0; s = 1.0 - ring * 0.2;
}

void funnelShape(out vec3 p, out float t, out float a, out float s) {
  float h = fract(aRand.z * 7.13 + uTime * (0.045 + 0.025 * aRand.y));
  float y = mix(1.15, -1.25, h);
  float r = mix(1.12, 0.1, pow(h, 0.8));
  float ang = aRand.x * TAU + uTime * (0.2 + 0.5 * h) + h * 2.6;
  r *= 1.0 + (aRand.w - 0.5) * 0.16;
  // four holes, one per funnel stage, alternating right and left: leads swirl into a hole and spray out
  float level = floor(hash(aRand.w * 91.7) * 4.0);
  float start = 0.16 + level * 0.18;
  float w = smoothstep(aRand.w - 0.035, aRand.w + 0.035, 0.5 * uLeak);
  float hole = level < 0.5 ? 0.42 : level < 1.5 ? 2.72 : level < 2.5 ? 0.18 : 2.96;
  float jit = (hash(aRand.z * 51.3) - 0.5) * 0.3;
  float pre = smoothstep(start - 0.13, start, h) * w;
  ang += (mod(hole + jit - ang + PI, TAU) - PI) * pre;
  p = vec3(cos(ang) * r, y, sin(ang) * r);
  float past = max(0.0, h - start);
  float r0 = mix(1.12, 0.1, pow(start, 0.8)) * (1.0 + (aRand.w - 0.5) * 0.16);
  float y0 = mix(1.15, -1.25, start);
  float ja = ang + (hash(aRand.x * 23.1) - 0.5) * 0.5 * smoothstep(0.0, 0.2, past);
  float outward = r0 + past * (2.4 + 1.6 * hash(aRand.y * 9.7));
  vec3 jet = vec3(cos(ja) * outward, y0 - past * 0.5 - past * past * 9.0, sin(ja) * outward);
  p = mix(p, jet, w * smoothstep(0.0, 0.012, past));
  t = mix(0.06 + h * 0.96, 0.02, w * clamp(past * 7.0, 0.0, 1.0));
  a = smoothstep(0.0, 0.05, h) * (1.0 - smoothstep(0.93, 1.0, h));
  a *= 1.0 - w * smoothstep(0.1, 0.3, past);
  float spout = smoothstep(0.8, 1.0, h) * (1.0 - uLeak);
  s = 1.0 + spout * 1.3;
  t = clamp(t + spout * 0.25, 0.0, 1.0);
  p = rotX(p, 0.3);
}

void flywheelShape(out vec3 p, out float t, out float a, out float s) {
  float spin = uTime * 0.3;
  if (aRand.w < 0.74) {
    float u = aRand.x * TAU;
    float v = aRand.z * TAU + uTime * 1.1;
    float rr = 0.11 + 0.045 * sin(u * 4.0 + uTime * 1.4);
    p = vec3((1.02 + rr * cos(v)) * cos(u + spin), rr * sin(v), (1.02 + rr * cos(v)) * sin(u + spin));
    t = 0.5 + 0.5 * sin(u);
    s = 1.0;
  } else if (aRand.w < 0.92) {
    float k = floor(aRand.x * 6.0);
    float ang = k / 6.0 * TAU + spin;
    float rr = 0.2 + aRand.z * 0.8;
    p = vec3(cos(ang) * rr, (aRand.y - 1.0) * 0.02, sin(ang) * rr);
    float pulse = fract(aRand.z - uTime * 0.35);
    t = 0.25 + 0.75 * smoothstep(0.82, 1.0, pulse);
    s = 0.85;
  } else {
    vec3 d = normalize(vec3(aRand.x - 0.5, aRand.z - 0.5, aRand.y - 1.0) + vec3(0.001));
    p = d * (0.12 + 0.05 * aRand.w);
    t = 0.92; s = 1.1;
  }
  a = 1.0;
  p = rotZ(rotX(p, 1.08), -0.16);
}

void barsShape(out vec3 p, out float t, out float a, out float s) {
  p = rotX(rotY(aBars.xyz, -0.5 + 0.16 * sin(uTime * 0.25)), 0.1);
  t = aBars.w;
  float climb = fract(aRand.z - uTime * 0.18);
  s = 1.0 + 0.7 * smoothstep(0.9, 1.0, climb);
  a = 1.0;
}

void globeShape(out vec3 p, out float t, out float a, out float s) {
  p = rotX(rotY(aGlobe.xyz, uTime * 0.1 + 2.3), 0.38);
  t = aGlobe.w;
  a = 0.35 + 0.65 * smoothstep(-0.7, 0.6, p.z);
  s = 1.0 + step(0.8, aGlobe.w) * 0.6 * (0.6 + 0.4 * sin(uTime * 2.0 + aRand.z * TAU));
}

void archShape(out vec3 p, out float t, out float a, out float s) {
  p = rotY(aArch.xyz, 0.1 * sin(uTime * 0.3));
  t = aArch.w;
  a = 0.72 + 0.28 * sin(uTime * 1.6 + aRand.z * TAU);
  s = 1.0;
}

void shapeOf(float id, out vec3 p, out float t, out float a, out float s) {
  if (id < 0.5) orbShape(p, t, a, s);
  else if (id < 1.5) funnelShape(p, t, a, s);
  else if (id < 2.5) flywheelShape(p, t, a, s);
  else if (id < 3.5) barsShape(p, t, a, s);
  else if (id < 4.5) globeShape(p, t, a, s);
  else archShape(p, t, a, s);
}

vec3 heat(float x) {
  vec3 c0 = vec3(0.561, 0.890, 0.863);
  vec3 c1 = vec3(0.914, 0.945, 0.925);
  vec3 c2 = vec3(0.969, 0.788, 0.282);
  vec3 c3 = vec3(0.910, 0.525, 0.180);
  x = clamp(x, 0.0, 1.0);
  vec3 c = mix(c0, c1, smoothstep(0.0, 0.38, x));
  c = mix(c, c2, smoothstep(0.38, 0.68, x));
  return mix(c, c3, smoothstep(0.68, 1.0, x));
}

void main() {
  vec3 p; float t; float a; float s;
  shapeOf(uShapeA, p, t, a, s);
  if (uMix > 0.0 && abs(uShapeB - uShapeA) > 0.5) {
    vec3 pB; float tB; float aB; float sB;
    shapeOf(uShapeB, pB, tB, aB, sB);
    float m = smoothstep(aRand.x * 0.4, aRand.x * 0.4 + 0.6, uMix);
    vec3 scatter = vec3(hash(aRand.z * 113.1), hash(aRand.w * 71.7), hash(aRand.x * 37.9)) - 0.5;
    p = mix(p, pB, m) + scatter * sin(m * PI) * 1.1;
    t = mix(t, tB, m); a = mix(a, aB, m); s = mix(s, sB, m);
  }
  float ii = smoothstep(aRand.x * 0.5, aRand.x * 0.5 + 0.5, uIntro);
  vec3 cloud = (vec3(hash(aRand.z * 17.0), hash(aRand.w * 29.0), hash(aRand.x * 43.0)) - 0.5) * vec3(9.0, 6.0, 4.0);
  p = mix(cloud, p, ii);
  p += 0.012 * vec3(sin(uTime * 0.9 + aRand.z * 40.0), cos(uTime * 0.7 + aRand.x * 30.0), sin(uTime * 0.8 + aRand.w * 20.0));
  p = rotX(rotY(p, uTilt.x), uTilt.y);

  vec4 view = vec4(p * uScale, 1.0);
  view.z -= uCamZ;
  vec4 clip = uProj * view;
  clip.xy += uOffset * clip.w;

  vec2 ndc = clip.xy / clip.w;
  vec2 d = ndc - uMouse;
  d.x *= uAspect;
  float dist = length(d);
  float f = (1.0 - smoothstep(0.0, 0.3, dist)) * uMouseAmt;
  vec2 dn = d / max(dist, 0.0001);
  dn.x /= uAspect;
  ndc += dn * f * 0.075;
  clip.xy = ndc * clip.w;
  gl_Position = clip;

  float persp = uCamZ / max(-view.z, 0.2);
  gl_PointSize = clamp(uSize * aRand.y * s * uDpr * persp * (0.55 + 0.45 * min(uScale, 1.6)), 1.0, 48.0);
  vColor = heat(t) * (0.78 + 0.45 * hash(aRand.x * 7.7));
  vAlpha = a * uAlpha * (0.2 + 0.8 * ii);
}`;

const FRAG = `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  if (d > 1.0) discard;
  float core = 1.0 - smoothstep(0.0, 1.0, d);
  float glow = core * core * (0.6 + 0.4 * core);
  float al = glow * vAlpha;
  gl_FragColor = vec4(vColor * al, al);
}`;

type Shapes = { orb: Float32Array; bars: Float32Array; globe: Float32Array; arch: Float32Array; rand: Float32Array };

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** BioNixus offices and field hubs: Sheridan, London, Giza, Al Khobar, Dubai, Salmiya, São Paulo. */
const MARKETS: Array<[number, number]> = [
  [44.8, -106.96],
  [51.51, -0.13],
  [30.05, 31.0],
  [26.22, 50.2],
  [25.2, 55.27],
  [29.33, 48.08],
  [-23.55, -46.63],
];

function buildShapes(N: number): Shapes {
  const rnd = mulberry32(0x5aad4);
  const gauss = () => {
    const u = 1 - rnd();
    const v = rnd();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
  const orb = new Float32Array(N * 4);
  const bars = new Float32Array(N * 4);
  const globe = new Float32Array(N * 4);
  const arch = new Float32Array(N * 4);
  const rand = new Float32Array(N * 4);
  let i: number;
  let o: number;
  let k: number;

  for (i = 0; i < N; i++) {
    o = i * 4;
    rand[o] = rnd();
    rand[o + 1] = rnd() < 0.045 ? 1.7 + rnd() * 1.3 : 0.5 + rnd() * 0.8;
    rand[o + 2] = rnd();
    rand[o + 3] = rnd();
  }

  // 0 · market orb: a sphere of respondents with an orbit ring
  const GA = Math.PI * (3 - Math.sqrt(5));
  for (i = 0; i < N; i++) {
    o = i * 4;
    if (rnd() < 0.7) {
      const y = 1 - ((i + 0.5) / N) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * GA;
      const rad = 0.74 + 0.26 * Math.pow(rnd(), 0.55);
      orb[o] = Math.cos(th) * r * rad;
      orb[o + 1] = y * rad;
      orb[o + 2] = Math.sin(th) * r * rad;
      orb[o + 3] = rnd() < 0.08 ? 0.62 + rnd() * 0.38 : 0.02 + rnd() * 0.3;
    } else {
      const an = rnd() * Math.PI * 2;
      const rr = 1.3 + Math.pow(rnd(), 1.6) * 0.6;
      orb[o] = Math.cos(an) * rr;
      orb[o + 1] = gauss() * 0.018;
      orb[o + 2] = Math.sin(an) * rr;
      orb[o + 3] = 0.42 + rnd() * 0.58;
    }
  }

  // 3 · growth bars with a rising trend line and arrowhead
  const K = 7;
  const base = -1.0;
  const bw = 0.26;
  const gap = 0.4;
  const hs: number[] = [];
  const cum: number[] = [];
  let sum = 0;
  let acc = 0;
  for (k = 0; k < K; k++) hs[k] = 0.3 * Math.pow(1.39, k);
  const hScale = 2.0 / hs[K - 1];
  for (k = 0; k < K; k++) {
    hs[k] *= hScale;
    sum += hs[k];
  }
  for (k = 0; k < K; k++) {
    acc += hs[k];
    cum[k] = acc / sum;
  }
  const trendY = (x: number) => base + 0.3 * hScale * Math.pow(1.39, x / gap + (K - 1) / 2) + 0.26;
  const xEnd = 1.45;
  const yEnd = trendY(xEnd);
  const slope = (trendY(xEnd) - trendY(xEnd - 0.02)) / 0.02;
  const tl = Math.hypot(1, slope);
  const tdx = 1 / tl;
  const tdy = slope / tl;
  for (i = 0; i < N; i++) {
    o = i * 4;
    const sel = rnd();
    if (sel < 0.82) {
      const u = rnd();
      let kk = 0;
      while (kk < K - 1 && u > cum[kk]) kk++;
      const cx = (kk - (K - 1) / 2) * gap;
      const h = hs[kk];
      const hw = bw / 2;
      let x: number;
      let yy: number;
      let z: number;
      const e = rnd();
      if (e < 0.5) {
        x = cx + (rnd() < 0.5 ? -hw : hw);
        z = rnd() < 0.5 ? -hw : hw;
        yy = base + rnd() * h;
      } else if (e < 0.72) {
        x = cx + (rnd() - 0.5) * bw;
        z = (rnd() - 0.5) * bw;
        yy = base + h;
      } else {
        const face = Math.floor(rnd() * 4);
        const s1 = (rnd() - 0.5) * bw;
        if (face === 0) {
          x = cx - hw;
          z = s1;
        } else if (face === 1) {
          x = cx + hw;
          z = s1;
        } else if (face === 2) {
          x = cx + s1;
          z = -hw;
        } else {
          x = cx + s1;
          z = hw;
        }
        yy = base + rnd() * h;
      }
      bars[o] = x;
      bars[o + 1] = yy;
      bars[o + 2] = z;
      bars[o + 3] = 0.08 + 0.88 * (kk / (K - 1)) + (rnd() - 0.5) * 0.06;
    } else if (sel < 0.96) {
      const tt = rnd();
      const xx = -1.45 + tt * (xEnd + 1.45);
      bars[o] = xx;
      bars[o + 1] = trendY(xx) + gauss() * 0.01;
      bars[o + 2] = 0.4 + gauss() * 0.01;
      bars[o + 3] = 0.4 + 0.6 * tt;
    } else {
      const side = rnd() < 0.5 ? 1 : -1;
      const len = rnd() * 0.2;
      const ca = Math.cos(2.6 * side);
      const sa = Math.sin(2.6 * side);
      const ax = tdx * ca - tdy * sa;
      const ay = tdx * sa + tdy * ca;
      bars[o] = xEnd + ax * len;
      bars[o + 1] = yEnd + ay * len;
      bars[o + 2] = 0.4;
      bars[o + 3] = 1.0;
    }
  }

  // 4 · globe: meridians, parallels and glowing BioNixus markets
  for (i = 0; i < N; i++) {
    o = i * 4;
    const gs = rnd();
    let lat: number;
    let lon: number;
    let gr = 1;
    let temp: number;
    if (gs < 0.4) {
      lon = Math.floor(rnd() * 12) * 30;
      lat = -88 + rnd() * 176;
      temp = 0.08 + rnd() * 0.2;
    } else if (gs < 0.62) {
      lat = -60 + Math.floor(rnd() * 7) * 20;
      lon = rnd() * 360;
      temp = 0.08 + rnd() * 0.2;
    } else if (gs < 0.9) {
      lat = (Math.asin(rnd() * 2 - 1) * 180) / Math.PI;
      lon = rnd() * 360;
      temp = 0.02 + rnd() * 0.12;
      gr = 0.99;
    } else {
      const c = MARKETS[Math.floor(rnd() * MARKETS.length)];
      lat = c[0] + gauss() * 1.4;
      lon = c[1] + gauss() * 1.4;
      gr = 1.03;
      temp = 0.82 + rnd() * 0.18;
    }
    const la = (lat * Math.PI) / 180;
    const lo = (lon * Math.PI) / 180;
    globe[o] = Math.cos(la) * Math.cos(lo) * gr;
    globe[o + 1] = Math.sin(la) * gr;
    globe[o + 2] = Math.cos(la) * Math.sin(lo) * gr;
    globe[o + 3] = temp;
  }

  // 5 · pointed arch: outline, soft fill and a horizon line
  const bez = (a0: number, a1: number, a2: number, a3: number, t: number) => {
    const m = 1 - t;
    return m * m * m * a0 + 3 * m * m * t * a1 + 3 * m * t * t * a2 + t * t * t * a3;
  };
  const pts: Array<[number, number]> = [];
  let s: number;
  for (s = 0; s <= 40; s++) pts.push([0, 1 - (0.58 * s) / 40]);
  for (s = 1; s <= 80; s++) pts.push([bez(0, 0, 0.22, 0.5, s / 80), bez(0.42, 0.2, 0.06, 0, s / 80)]);
  for (s = 1; s <= 80; s++) pts.push([bez(0.5, 0.78, 1, 1, s / 80), bez(0, 0.06, 0.2, 0.42, s / 80)]);
  for (s = 1; s <= 40; s++) pts.push([1, 0.42 + (0.58 * s) / 40]);
  const AW = 2.5;
  const AH = 2.7;
  const wp = pts.map((q) => [(q[0] - 0.5) * AW, (0.5 - q[1]) * AH] as [number, number]);
  const lens = [0];
  for (s = 1; s < wp.length; s++) lens[s] = lens[s - 1] + Math.hypot(wp[s][0] - wp[s - 1][0], wp[s][1] - wp[s - 1][1]);
  const total = lens[lens.length - 1];
  const leftCurve = pts.slice(40, 121);
  const leftU = (v: number) => {
    if (v >= 0.42) return 0;
    for (let j = 1; j < leftCurve.length; j++) {
      const p0 = leftCurve[j - 1];
      const p1 = leftCurve[j];
      if (v <= p0[1] && v >= p1[1]) {
        const f = (p0[1] - v) / Math.max(1e-6, p0[1] - p1[1]);
        return p0[0] + (p1[0] - p0[0]) * f;
      }
    }
    return 0.5;
  };
  for (i = 0; i < N; i++) {
    o = i * 4;
    const as = rnd();
    if (as < 0.7) {
      const dd = rnd() * total;
      let j2 = 1;
      while (j2 < lens.length - 1 && lens[j2] < dd) j2++;
      const seg = lens[j2] - lens[j2 - 1] || 1;
      const ft = (dd - lens[j2 - 1]) / seg;
      const px = wp[j2 - 1][0] + (wp[j2][0] - wp[j2 - 1][0]) * ft;
      const py = wp[j2 - 1][1] + (wp[j2][1] - wp[j2 - 1][1]) * ft;
      const tx = wp[j2][0] - wp[j2 - 1][0];
      const ty = wp[j2][1] - wp[j2 - 1][1];
      const tn = Math.hypot(tx, ty) || 1;
      const off = gauss() * 0.02;
      arch[o] = px - (ty / tn) * off;
      arch[o + 1] = py + (tx / tn) * off;
      arch[o + 2] = gauss() * 0.05;
      arch[o + 3] = 0.6 + 0.4 * ((py + AH / 2) / AH);
    } else if (as < 0.82) {
      const vv = rnd();
      const ul = leftU(vv);
      const uu = ul + rnd() * (1 - 2 * ul);
      arch[o] = (uu - 0.5) * AW;
      arch[o + 1] = (0.5 - vv) * AH;
      arch[o + 2] = -0.25 + gauss() * 0.08;
      arch[o + 3] = 0.5 + rnd() * 0.3;
    } else {
      const hx = gauss() * 1.2;
      arch[o] = hx;
      arch[o + 1] = -AH / 2 + gauss() * 0.012;
      arch[o + 2] = gauss() * 0.25;
      arch[o + 3] = 0.65 + 0.35 * Math.exp(-hx * hx);
    }
  }

  return { orb, bars, globe, arch, rand };
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) throw new Error('shader allocation failed');
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) || 'shader error');
  return sh;
}

function program(gl: WebGLRenderingContext, vs: string, fs: string) {
  const p = gl.createProgram();
  if (!p) throw new Error('program allocation failed');
  gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p) || 'link error');
  return p;
}

function perspective(out: Float32Array, fovy: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  out.fill(0);
  out[0] = f / aspect;
  out[5] = f;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[14] = 2 * far * near * nf;
}

function smooth(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type Stage = { el: Element; shape: number; size: number; sizeM: number; dim: number };

export type GrowthEngine = {
  count: number;
  setStages: (list: Element[]) => void;
  setLeak: (v: boolean) => void;
  intro: () => void;
  refresh: () => void;
  destroy: () => void;
};

export function createGrowthEngine(
  canvas: HTMLCanvasElement,
  opts: { reduced?: boolean; pointer?: boolean; count?: number } = {},
): GrowthEngine {
  const reduced = !!opts.reduced;
  const usePointer = !!opts.pointer && !reduced;
  const ctx = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    premultipliedAlpha: true,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
  });
  if (!ctx) throw new Error('WebGL unavailable');
  const gl: WebGLRenderingContext = ctx;

  const small = Math.min(window.innerWidth, (window.screen && window.screen.width) || 9999) < 760;
  const cores = (window.navigator && window.navigator.hardwareConcurrency) || 4;
  const N = opts.count || (small ? 6000 : cores <= 4 ? 8000 : 11000);

  const prog = program(gl, VERT, FRAG);
  gl.useProgram(prog);
  const shapes = buildShapes(N);
  const attribs: Record<string, Float32Array> = {
    aOrb: shapes.orb,
    aBars: shapes.bars,
    aGlobe: shapes.globe,
    aArch: shapes.arch,
    aRand: shapes.rand,
  };
  const buffers: WebGLBuffer[] = [];
  Object.keys(attribs).forEach((name) => {
    const loc = gl.getAttribLocation(prog, name);
    if (loc < 0) return;
    const buf = gl.createBuffer();
    if (!buf) return;
    buffers.push(buf);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, attribs[name], gl.STATIC_DRAW);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, 0, 0);
  });
  const U: Record<string, WebGLUniformLocation | null> = {};
  [
    'uProj', 'uTime', 'uShapeA', 'uShapeB', 'uMix', 'uLeak', 'uIntro', 'uScale', 'uMouseAmt', 'uAspect', 'uDpr',
    'uSize', 'uAlpha', 'uCamZ', 'uOffset', 'uTilt', 'uMouse',
  ].forEach((n) => {
    U[n] = gl.getUniformLocation(prog, n);
  });

  gl.disable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE);
  gl.clearColor(0, 0, 0, 0);

  const proj = new Float32Array(16);
  let aspect = 1;
  let dpr = 1;
  const camZ = 3.4;
  const st = {
    time: 0, a: 0, b: 0, mix: 0, morphing: false, mt: 0, queued: -1,
    leak: 0, leakT: 0, intro: reduced ? 1 : 0, introOn: reduced, introStart: 0, mStart: 0,
    ox: 0, oy: 0, oxT: 0, oyT: 0, sc: 1, scT: 1, al: 0, alT: 1,
    mx: 9, my: 9, mAmt: 0, mAmtT: 0, tx: 0, ty: 0, boost: 0, snapped: false,
  };
  let stages: Stage[] = [];
  let active: Stage | null = null;
  let lastMove = 0;
  let lastY = window.scrollY || 0;
  let last = 0;
  let lost = false;
  let raf = 0;
  let sizeDirty = true;
  let asleep = false;

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75);
    const W = Math.max(1, Math.round(w * dpr));
    const H = Math.max(1, Math.round(h * dpr));
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W;
      canvas.height = H;
    }
    gl.viewport(0, 0, W, H);
    aspect = w / h;
    perspective(proj, (38 * Math.PI) / 180, aspect, 0.1, 60);
    sizeDirty = false;
  };

  const requestShape = (id: number) => {
    if (reduced) {
      st.a = st.b = id;
      st.mix = 0;
      st.morphing = false;
      return;
    }
    if (st.morphing) {
      st.queued = id;
      return;
    }
    if (id === st.a) return;
    st.b = id;
    st.mt = 0;
    st.mStart = window.performance.now();
    st.morphing = true;
  };

  const pick = () => {
    const vh = window.innerHeight;
    const cw = canvas.clientWidth || window.innerWidth;
    const ch = canvas.clientHeight || vh;
    const mid = vh / 2;
    let best: Stage | null = null;
    let bestD = 1e9;
    let bestR: DOMRect | null = null;
    for (let i = 0; i < stages.length; i++) {
      const s = stages[i];
      const r = s.el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < bestD) {
        bestD = d;
        best = s;
        bestR = r;
      }
    }
    if (!best || !bestR) {
      st.alT = 0;
      return;
    }
    if (active && active !== best) {
      const ar = active.el.getBoundingClientRect();
      if (ar.width && ar.height && Math.abs(ar.top + ar.height / 2 - mid) - bestD < 60) {
        best = active;
        bestR = ar;
      }
    }
    if (best !== active) {
      if (!active) {
        // First stage: start on its shape, the intro assembles it from the cloud.
        st.a = st.b = best.shape;
      } else {
        requestShape(best.shape);
      }
      active = best;
    }
    const r = bestR;
    st.oxT = ((r.left + r.width / 2) / cw) * 2 - 1;
    st.oyT = 1 - ((r.top + r.height / 2) / ch) * 2;
    const size = cw < 760 ? best.sizeM : best.size;
    st.scT = Math.max(0.12, (Math.min(r.width, r.height) / (0.86 * ch)) * size);
    const far = Math.abs(r.top + r.height / 2 - mid) / vh;
    st.alT = best.dim * (1 - smooth(0.6, 1.15, far));
  };

  const draw = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (st.al < 0.004) return;
    gl.uniformMatrix4fv(U.uProj, false, proj);
    gl.uniform1f(U.uTime, st.time);
    gl.uniform1f(U.uShapeA, st.a);
    gl.uniform1f(U.uShapeB, st.b);
    gl.uniform1f(U.uMix, st.morphing ? st.mix : 0);
    gl.uniform1f(U.uLeak, st.leak);
    gl.uniform1f(U.uIntro, st.intro);
    gl.uniform1f(U.uScale, st.sc);
    gl.uniform1f(U.uMouseAmt, st.mAmt);
    gl.uniform1f(U.uAspect, aspect);
    gl.uniform1f(U.uDpr, dpr);
    gl.uniform1f(U.uSize, small ? 2.7 : 3.1);
    gl.uniform1f(U.uAlpha, st.al * 0.82);
    gl.uniform1f(U.uCamZ, camZ);
    gl.uniform2f(U.uOffset, st.ox, st.oy);
    gl.uniform2f(U.uTilt, st.tx, st.ty);
    gl.uniform2f(U.uMouse, st.mx, st.my);
    gl.drawArrays(gl.POINTS, 0, N);
  };

  const frame = (now: number) => {
    raf = window.requestAnimationFrame(frame);
    if (lost || document.hidden) {
      last = now;
      return;
    }
    if (sizeDirty) resize();
    if (!last) last = now;
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    const y = window.scrollY || 0;
    const v = Math.abs(y - lastY) / dt;
    lastY = y;
    st.boost += (Math.min(2.2, v / 1400) - st.boost) * (1 - Math.exp(-dt * 4));
    if (!reduced) st.time += dt * (1 + st.boost);
    pick();
    const k = st.snapped ? 1 - Math.exp(-dt * 6.5) : 1;
    st.snapped = true;
    st.ox += (st.oxT - st.ox) * k;
    st.oy += (st.oyT - st.oy) * k;
    st.sc += (st.scT - st.sc) * k;
    st.al += (st.alT - st.al) * (1 - Math.exp(-dt * 3));
    st.leak += (st.leakT - st.leak) * (1 - Math.exp(-dt * 2.2));
    // transitions run on wall-clock time so slow devices still finish them on schedule
    if (st.introOn && st.intro < 1) {
      if (!st.introStart) st.introStart = now;
      const it = Math.min(1, (now - st.introStart) / 2600);
      st.intro = 1 - Math.pow(1 - it, 3);
    }
    if (st.morphing) {
      st.mt = (now - st.mStart) / 1700;
      st.mix = easeInOut(Math.min(1, Math.max(0, st.mt)));
      if (st.mt >= 1) {
        st.a = st.b;
        st.mix = 0;
        st.morphing = false;
        if (st.queued >= 0) {
          const q = st.queued;
          st.queued = -1;
          if (q !== st.a) {
            st.b = q;
            st.mt = 0;
            st.mStart = now;
            st.morphing = true;
          }
        }
      }
    }
    if (usePointer && now - lastMove > 2200) st.mAmtT = 0;
    const km = 1 - Math.exp(-dt * 3);
    st.mAmt += (st.mAmtT - st.mAmt) * km;
    const inRange = Math.abs(st.mx) <= 1 && Math.abs(st.my) <= 1;
    st.tx += ((inRange ? st.mx * 0.14 : 0) * st.mAmt - st.tx) * km;
    st.ty += ((inRange ? -st.my * 0.09 : 0) * st.mAmt - st.ty) * km;
    // Nothing on screen: clear once, hide the layer and skip drawing until a stage comes near.
    if (st.al < 0.004 && st.alT < 0.004) {
      if (!asleep) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        canvas.style.visibility = 'hidden';
        asleep = true;
      }
      return;
    }
    if (asleep) {
      canvas.style.visibility = '';
      asleep = false;
    }
    draw();
  };

  const onMove = (e: PointerEvent) => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    st.mx = (e.clientX / w) * 2 - 1;
    st.my = 1 - (e.clientY / h) * 2;
    st.mAmtT = 1;
    lastMove = window.performance.now();
  };
  const onResize = () => {
    sizeDirty = true;
  };
  const onLost = (e: Event) => {
    e.preventDefault();
    lost = true;
    canvas.style.opacity = '0';
  };
  if (usePointer) window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  canvas.addEventListener('webglcontextlost', onLost, false);

  resize();
  raf = window.requestAnimationFrame(frame);

  return {
    count: N,
    setStages(list: Element[]) {
      stages = list.map((el) => {
        const size = parseFloat(el.getAttribute('data-size') || '1');
        return {
          el,
          shape: parseInt(el.getAttribute('data-shape') || '0', 10),
          size,
          sizeM: parseFloat(el.getAttribute('data-size-m') || String(size)),
          dim: parseFloat(el.getAttribute('data-dim') || '1'),
        };
      });
      if (active && !stages.some((s) => s.el === active?.el)) active = null;
    },
    setLeak(v: boolean) {
      st.leakT = v ? 1 : 0;
    },
    intro() {
      st.introOn = true;
    },
    refresh() {
      sizeDirty = true;
    },
    destroy() {
      window.cancelAnimationFrame(raf);
      if (usePointer) window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('webglcontextlost', onLost, false);
      buffers.forEach((b) => gl.deleteBuffer(b));
      gl.deleteProgram(prog);
      const lose = gl.getExtension('WEBGL_lose_context');
      if (lose) lose.loseContext();
    },
  };
}
