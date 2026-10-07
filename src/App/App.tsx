import { EducationAndAwardsSection } from '../components/EducationAndAwardsSection/EducationAndAwardsSection'
import { ExperienceSection } from '../components/ExperienceSection/ExperienceSection'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { ProfessionalSummarySection } from '../components/ProfessionalSummarySection/ProfessionalSummarySection'
import { SkillsSection } from '../components/SkillsSection/SkillsSection'
import { SiteFooter } from '../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../components/SiteHeader/SiteHeader'
import './App.scss'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProfessionalSummarySection />
        <ExperienceSection />
        <SkillsSection />
        <EducationAndAwardsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App