import { useEffect } from 'react'

import { site } from '../data/site.js'

// Sets per-route document metadata (title, description, canonical, OG, Twitter)
// and optional route-level structured data.
export function useDocumentMeta({ title, description, structuredData } = {}) {
  useEffect(() => {
    const resolvedTitle = title || site.name
    document.title = resolvedTitle

    const setAttr = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    const origin = site.siteUrl || window.location.origin
    const url = origin + window.location.pathname

    setAttr('meta[name="description"]', 'content', description)
    setAttr('link[rel="canonical"]', 'href', url)
    setAttr('meta[property="og:title"]', 'content', resolvedTitle)
    setAttr('meta[property="og:description"]', 'content', description)
    setAttr('meta[property="og:url"]', 'content', url)
    setAttr('meta[name="twitter:title"]', 'content', resolvedTitle)
    setAttr('meta[name="twitter:description"]', 'content', description)

    let script = document.getElementById('route-jsonld')
    if (structuredData) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'route-jsonld'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData)
    } else if (script) {
      script.remove()
    }
  }, [title, description, structuredData])
}