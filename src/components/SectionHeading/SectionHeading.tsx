import './SectionHeading.scss'

interface SectionHeadingProps {
  number: string
  label: string
  title: string
  description: string
  titleId?: string
}

export function SectionHeading({ number, label, title, description, titleId }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-marker">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <h2 id={titleId}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}