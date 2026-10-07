import { constants, sectionIds } from '../../constants'
import './SiteFooter.scss'

export function SiteFooter() {
  return (
    <footer className="footer">
      <a className="wordmark" href={`#${sectionIds.top}`}>
        <span className="wordmark-mark">{constants.identity.monogram}</span>
        <span>{constants.identity.name}</span>
      </a>
      <span>{constants.footer.roleSummary}</span>
      <a className="back-to-top" href={`#${sectionIds.top}`}>
        {constants.footer.backToTop} <span aria-hidden="true">↗</span>
      </a>
    </footer>
  )
}