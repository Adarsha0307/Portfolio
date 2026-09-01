import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// Load environment variables from .env
function loadEnv() {
  const envPath = resolve(process.cwd(), '.env')
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, 'utf-8')
    content.split('\n').forEach((line) => {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=')
        if (key && valueParts.length > 0) {
          process.env[key.trim()] = valueParts.join('=').trim()
        }
      }
    })
  }
}

loadEnv()

const SITE_URL = process.env.VITE_SITE_URL || 'http://localhost:5173'

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

writeFileSync(resolve(process.cwd(), 'public/robots.txt'), robotsContent)
console.log('Generated public/robots.txt')

// Generate sitemap.xml
const routes = [
  { path: '', changefreq: 'monthly', priority: 1.0 },
  { path: 'about', changefreq: 'monthly', priority: 0.8 },
  { path: 'projects', changefreq: 'monthly', priority: 0.9 },
  { path: 'projects/nexnethra', changefreq: 'monthly', priority: 0.9 },
  { path: 'projects/docuflow-ai', changefreq: 'monthly', priority: 0.9 },
  { path: 'projects/taskapex', changefreq: 'monthly', priority: 0.8 },
  { path: 'journey', changefreq: 'monthly', priority: 0.8 },
  { path: 'contact', changefreq: 'monthly', priority: 0.8 },
  { path: 'resume', changefreq: 'monthly', priority: 0.8 },
]

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}/${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemapContent)
console.log('Generated public/sitemap.xml')

// Also generate index.html with replaced placeholders
const indexHtmlPath = resolve(process.cwd(), 'index.html')
let indexHtml = readFileSync(indexHtmlPath, 'utf-8')
indexHtml = indexHtml.replace(/%SITE_URL%/g, SITE_URL)
indexHtml = indexHtml.replace(/og-image\.png/g, 'og-image.svg')
writeFileSync(indexHtmlPath, indexHtml)
console.log('Updated index.html with production domain')

console.log('Build preparation complete!')