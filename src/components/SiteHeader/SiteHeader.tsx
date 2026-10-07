import { useEffect, useState } from 'react'
import { constants, sectionIds, storageKeys } from '../../constants'
import './SiteHeader.scss'

type Theme = 'light' | 'dark'

export function SiteHeader() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.localStorage.getItem(storageKeys.theme) === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(storageKeys.theme, theme)
  }, [theme])

  return (
    <header className="topbar">
      <a className="wordmark" href={`#${sectionIds.top}`} aria-label={`${constants.identity.name}, home`}>
        <span className="wordmark-mark">{constants.identity.monogram}</span>
        <span>{constants.identity.name}</span>
      </a>
      <nav className="main-nav" aria-label={constants.navigation.ariaLabel}>
        {constants.navigation.links.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? constants.theme.switchToLight : constants.theme.switchToDark}
        aria-pressed={theme === 'dark'}
        title={theme === 'dark' ? constants.theme.switchToLight : constants.theme.switchToDark}
      >
        <span className="theme-glyph" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
      </button>
    </header>
  )
}