import { experience } from '../../data/portfolio'
import { constants, sectionIds } from '../../constants'
import { stringReplace } from '../../utils/stringReplace'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import './ExperienceSection.scss'

export function ExperienceSection() {
  return (
    <section className="experience-section section-wrap" id={sectionIds.experience}>
      <SectionHeading
        {...constants.sections.experience}
        titleId={constants.sections.experience.titleId}
      />
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-entry" key={item.project}>
            <div className="experience-meta">
              <span className="experience-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item.dates}</span>
            </div>
            <div className="experience-content">
              <div className="experience-title-row">
                <h3>{item.project}</h3>
                <span className="project-org">{constants.carousel.organization}</span>
              </div>
              <ul className="experience-highlights">
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="project-stack">
                <h4 className="project-stack-label">
                  {stringReplace(constants.carousel.projectTechnologiesLabelTemplate, [item.project])}
                </h4>
                {item.stack.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}