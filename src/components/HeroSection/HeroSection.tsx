import { FeaturedProjectCarousel } from '../FeaturedProjectCarousel/FeaturedProjectCarousel'
import { constants, sectionIds } from '../../constants'
import './HeroSection.scss'

export function HeroSection() {
  return (
    <section className="hero" id={sectionIds.top}>
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> {constants.hero.eyebrow}</p>
        <h1>
          {constants.identity.name}<span className="accent-dot">.</span>
          <span className="hero-subtitle">{constants.identity.role}</span>
        </h1>
        <p className="hero-intro">{constants.hero.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`#${sectionIds.experience}`}>
            {constants.hero.viewExperience} <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href={`#${sectionIds.skills}`}>
            {constants.hero.exploreSkills} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <FeaturedProjectCarousel />
      <a className="scroll-cue" href={`#${sectionIds.summary}`} aria-label={constants.hero.scrollAriaLabel}>
        <span>{constants.hero.scrollLabel}</span><span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}