import { awards, education } from '../../data/portfolio'
import { constants, sectionIds } from '../../constants'
import './EducationAndAwardsSection.scss'

export function EducationAndAwardsSection() {
  return (
    <section className="credentials-section section-wrap" id={sectionIds.education}>
      <div className="section-marker">
        <span>{constants.sections.education.number}</span>
        <span>{constants.sections.education.label}</span>
      </div>
      <div className="credentials-grid">
        <div className="credential-column">
          <h2>{constants.sections.education.educationTitle}</h2>
          {education.map((item) => (
            <article className="credential-entry" key={item.degree}>
              <span className="credential-degree">{item.degree}</span>
              <span>{item.institution}</span>
              <span className="credential-short">{item.abbreviation}</span>
            </article>
          ))}
        </div>
        <div className="credential-column award-column">
          <h2>{constants.sections.education.awardsTitle}</h2>
          {awards.map((award) => (
            <article className="award-entry" key={award.title}>
              <span className="award-star" aria-hidden="true">{constants.sections.education.awardMark}</span>
              <div>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}