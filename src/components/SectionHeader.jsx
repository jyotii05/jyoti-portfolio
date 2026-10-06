export default function SectionHeader({ index, realm, title, children }) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__rule" />
        {realm}
      </p>
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  )
}
