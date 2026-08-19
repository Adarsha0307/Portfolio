import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}