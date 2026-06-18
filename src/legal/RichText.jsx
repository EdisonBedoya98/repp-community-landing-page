export function RichP({ html, className }) {
  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export function RichList({ items, ordered = false }) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag>
      {items.map((html, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </Tag>
  )
}
