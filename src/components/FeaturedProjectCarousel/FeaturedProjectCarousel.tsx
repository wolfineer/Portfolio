import { useEffect, useState } from 'react'
import { experience } from '../../data/portfolio'
import { carouselSettings, constants } from '../../constants'
import { stringReplace } from '../../utils/stringReplace'
import './FeaturedProjectCarousel.scss'

export function FeaturedProjectCarousel() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const activeProject = experience[activeProjectIndex]

  useEffect(() => {
    if (isPaused) return

    const intervalId = window.setInterval(() => {
      setActiveProjectIndex((index) => (index + 1) % experience.length)
    }, carouselSettings.intervalMs)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  const showProject = (index: number) => {
    setActiveProjectIndex((index + experience.length) % experience.length)
    setIsPaused(true)
  }

  const togglePlayback = () => {
    if (!isPaused) {
      setIsPaused(true)
      return
    }

    setActiveProjectIndex((index) => (index + 1) % experience.length)
    setIsPaused(false)
  }

  return (
    <div
      className="hero-art"
      role="region"
      aria-roledescription="carousel"
      aria-label={constants.carousel.regionLabel}
    >
      <div className="art-topline">
        <span>{constants.carousel.heading}</span>
        <span aria-live="off">
          {String(activeProjectIndex + 1).padStart(2, '0')} / {String(experience.length).padStart(2, '0')}
        </span>
      </div>
      <div className="kiosk-viewport">
        <div className="kiosk-track" style={{ transform: `translateX(-${activeProjectIndex * 100}%)` }}>
          {experience.map((project, index) => {
            const slideLabelId = `featured-slide-${index}-label`

            return (
              <article
                className="kiosk-slide"
                key={project.project}
                role="group"
                aria-roledescription="slide"
                aria-labelledby={slideLabelId}
                aria-hidden={index !== activeProjectIndex}
                inert={index !== activeProjectIndex}
              >
                <div className="kiosk-interface">
                  <div className="kiosk-brand"><span>{project.featured.label}</span><span>{constants.carousel.organization}</span></div>
                  <div className="kiosk-content">
                    <span id={slideLabelId} className="kiosk-kicker">
                      {stringReplace(constants.carousel.slideLabelTemplate, [
                        index + 1,
                        experience.length,
                        project.project,
                      ])}
                    </span>
                    <strong>{project.featured.title}</strong>
                    <div className="journey-steps">
                      {project.featured.steps.map((step, stepIndex) => (
                        <span key={step}><i>{String(stepIndex + 1).padStart(2, '0')}</i> {step}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="kiosk-progress" role="group" aria-label={constants.carousel.chooseProject}>
          {experience.map((project, projectIndex) => (
            <button
              className={projectIndex === activeProjectIndex ? 'is-active' : ''}
              key={project.project}
              type="button"
              aria-label={project.project}
              aria-current={projectIndex === activeProjectIndex ? 'step' : undefined}
              onClick={() => showProject(projectIndex)}
            />
          ))}
        </div>
      </div>
      <div className="carousel-controls" aria-label={constants.carousel.controls}>
        <button type="button" aria-label={constants.carousel.previousProject} title={constants.carousel.previousProject} onClick={() => showProject(activeProjectIndex - 1)}>←</button>
        <button
          type="button"
          aria-label={isPaused ? constants.carousel.play : constants.carousel.pause}
          aria-pressed={isPaused}
          title={isPaused ? constants.carousel.play : constants.carousel.pause}
          onClick={togglePlayback}
        >
          <span aria-hidden="true">{isPaused ? '▶' : 'Ⅱ'}</span>
        </button>
        <button type="button" aria-label={constants.carousel.nextProject} title={constants.carousel.nextProject} onClick={() => showProject(activeProjectIndex + 1)}>→</button>
      </div>
      <div className="art-bottomline">
        <span>{activeProject.featured.technologies}</span>
        <span>{activeProject.featured.period}</span>
      </div>
    </div>
  )
}