import { constants, sectionIds } from '../../constants'
import './ProfessionalSummarySection.scss'

export function ProfessionalSummarySection() {
  return (
    <section className="story section-wrap" id={sectionIds.summary}>
      <div className="section-marker">
        <span>{constants.sections.summary.number}</span>
        <span>{constants.sections.summary.label}</span>
      </div>
      <div className="story-content">
        <h2>{constants.sections.summary.titleStart}<br />{constants.sections.summary.titleEnd}</h2>
        <div className="story-copy">
          <p>{constants.sections.summary.firstParagraph}</p>
          <p>{constants.sections.summary.secondParagraph}</p>
        </div>
      </div>
      <div className="story-footnote">
        <span className="footnote-rule" />
        <span>{constants.sections.summary.footnote}</span>
      </div>
    </section>
  )
}