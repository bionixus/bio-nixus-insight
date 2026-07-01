import { CORE_SEGMENTS } from '../../../lib/newsletter/batchSegments'

export interface SegmentOption {
  value: string
  label: string
}

interface SegmentMultiSelectProps {
  label: string
  selected: string[]
  onChange: (segments: string[]) => void
  batchOptions?: SegmentOption[]
  accentColor?: string
}

export function SegmentMultiSelect({
  label,
  selected,
  onChange,
  batchOptions = [],
  accentColor = '#667eea',
}: SegmentMultiSelectProps) {
  const allOptions: SegmentOption[] = [
    ...CORE_SEGMENTS.filter((s) => s.value !== 'all'),
    ...batchOptions,
  ]

  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((s) => s !== value))
    } else {
      onChange([...selected, value])
    }
  }

  const labelFor = (value: string) =>
    allOptions.find((o) => o.value === value)?.label || value

  return (
    <div>
      <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: '#495057' }}>
        {label}
        {selected.length > 0 && (
          <span style={{ fontWeight: 'normal', color: '#666', marginLeft: '8px' }}>
            ({selected.length} selected)
          </span>
        )}
      </div>

      {selected.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
          {selected.map((seg) => (
            <button
              key={seg}
              type="button"
              onClick={() => toggle(seg)}
              style={{
                padding: '4px 10px',
                borderRadius: '16px',
                border: `1px solid ${accentColor}`,
                background: accentColor,
                color: 'white',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {labelFor(seg)} ×
            </button>
          ))}
        </div>
      )}

      <select
        value=""
        onChange={(e) => {
          if (e.target.value) toggle(e.target.value)
          e.target.value = ''
        }}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '14px',
        }}
      >
        <option value="">+ Add segment...</option>
        <optgroup label="Core segments">
          {CORE_SEGMENTS.filter((s) => s.value !== 'all' && !selected.includes(s.value)).map(
            (s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            )
          )}
        </optgroup>
        {batchOptions.length > 0 && (
          <optgroup label="Company batches">
            {batchOptions
              .filter((b) => !selected.includes(b.value))
              .map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
          </optgroup>
        )}
      </select>
    </div>
  )
}

/** Multi-select chips for bulk segment replace action. */
export function SegmentChipPicker({
  selected,
  onChange,
  batchOptions = [],
}: {
  selected: string[]
  onChange: (segments: string[]) => void
  batchOptions?: SegmentOption[]
}) {
  return (
    <SegmentMultiSelect
      label="Replace with segments"
      selected={selected}
      onChange={onChange}
      batchOptions={batchOptions}
      accentColor="#6f42c1"
    />
  )
}
