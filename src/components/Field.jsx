export function Field({ label, htmlFor, error, hint, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="meta-sm text-muted">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && <p className="text-xs text-gold-2">{error}</p>}
    </div>
  )
}

export function Input({ id, type = 'text', value, onChange, required, autoComplete, placeholder }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="h-12 w-full rounded-md border border-line bg-surface px-4 text-sm text-text placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none"
    />
  )
}

export function Select({ id, value, onChange, required, options }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="h-12 w-full appearance-none rounded-md border border-line bg-surface px-4 text-sm text-text transition-colors focus:border-gold focus:outline-none"
    >
      <option value="" disabled>
        Select a purpose…
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}

export function Textarea({ id, value, onChange, required, placeholder, rows = 6 }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none"
    />
  )
}