import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import SkipLink from '../components/SkipLink.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SupportBlock from '../components/SupportBlock.jsx'
import { useTheme } from '../hooks/useTheme.js'

export default function MainLayout() {
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <SkipLink />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main-content" className="pb-24 md:pb-0 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
