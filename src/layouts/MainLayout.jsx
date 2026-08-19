import { Outlet } from 'react-router-dom'

import SkipLink from '../components/SkipLink.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useTheme } from '../hooks/useTheme.js'

export default function MainLayout() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <SkipLink />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main-content" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}