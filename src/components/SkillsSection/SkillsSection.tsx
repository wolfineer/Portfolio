import { skillGroups } from '../../data/portfolio'
import { constants, sectionIds } from '../../constants'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import './SkillsSection.scss'

export function SkillsSection() {
  return (
    <section className="skills-section" id={sectionIds.skills}>
      <div className="section-wrap skills-inner">
        <SectionHeading
          {...constants.sections.skills}
        />
        <div className="skill-groups">
          {skillGroups.map((group) => {
            const headingId = `skill-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

            return (
              <section className="skill-group" key={group.title} aria-labelledby={headingId}>
                <h3 id={headingId}>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}