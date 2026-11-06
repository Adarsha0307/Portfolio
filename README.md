# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## Deployment (Netlify)

This project is configured for seamless deployment on Netlify using `netlify.toml`.

### Setup Steps

1. **Connect Repository**:
   - Log into [Netlify](https://app.netlify.com/) and click **Add new site > Import an existing project**.
   - Link your GitHub repository and select the target branch (`main` or `netlify-migration`).
2. **Build Settings**:
   - Build settings are automatically detected from `netlify.toml`:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: `22`
3. **Environment Variables**:
   - In Netlify, go to **Site configuration > Environment variables** and add:
     - `VITE_SITE_URL`: Your full production domain (e.g. `https://your-site.netlify.app` or custom domain).
     - `VITE_FORMSPREE_ENDPOINT`: Your Formspree form submission endpoint (e.g. `https://formspree.io/f/your-form-id`).
4. **Deploy**:
   - Trigger the deploy. Netlify will build the site, handle client-side SPA routing via `netlify.toml`, and apply the configured security headers.

---

## Visitor Analytics Setup (Google Apps Script Backend)

This site uses a lightweight, privacy-focused visitor logging system powered by Google Apps Script and a Google Sheet. It logs anonymous session metadata (page, referrer origin, device, language, screen resolution, theme, country, city) with no IP addresses or fingerprints stored.

### Deployment Steps

1. **Create a Google Sheet**:
   - Go to [Google Sheets](https://sheets.new) and create a new spreadsheet (e.g., `Portfolio Analytics`).
2. **Open Apps Script**:
   - In the Google Sheet menu, navigate to **Extensions > Apps Script**.
3. **Paste `Code.gs`**:
   - Clear any default code in `Code.gs` and paste the contents of `Code.gs` from this repository.
4. **Configure Security Token**:
   - Set a strong secret token in `Code.gs`:
     ```javascript
     const TOKEN = 'your-secret-token-here';
     ```
   - Save the script (`Ctrl + S` / `Cmd + S`).
5. **Deploy as Web App**:
   - Click **Deploy > New deployment** (blue button in top right).
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Configure the deployment:
     - **Description**: `Portfolio Visit Tracker`
     - **Execute as**: `Me (your-email@gmail.com)`
     - **Who has access**: `Anyone`
   - Click **Deploy**.
   - Authorize permissions when prompted by Google.
   - Copy the generated **Web app URL** (ends in `/exec`).
6. **Update Frontend `public/tracker.js`**:
   - In `public/tracker.js`, replace the placeholders with your URL and token:
     ```javascript
     const ENDPOINT = 'https://script.google.com/macros/s/.../exec';
     const TOKEN = 'your-secret-token-here';
     ```
7. **Important Maintenance Reminder**:
   - Whenever you update or edit `Code.gs` in the Apps Script editor, you **must** update the deployment:
     - Click **Deploy > Manage deployments**.
     - Click the pencil icon (**Edit**).
     - Under **Version**, select **New version**.
     - Click **Deploy**.
   - Google Apps Script does *not* auto-deploy code edits to existing web app endpoints without a new version.

---

## Live Site Verification & Test Checklist

Run through these checks once deployed:

1. **First Visit Logging**:
   - Open your site in an incognito/private window (with Do Not Track turned off).
   - Open DevTools > Network tab (filter by `fetch` / `XHR`).
   - Notice the delayed call to `https://ipapi.co/json/` followed by the `POST` request to your Google Apps Script URL.
   - Open your Google Sheet: verify the `"Visits"` tab was automatically created with header columns and your visit row populated.
2. **Session Deduplication**:
   - Refresh the page or click internal navigation links within the same tab session.
   - Verify in DevTools that no additional network request is dispatched (checked via `sessionStorage`).
3. **Do Not Track (DNT) Compliance**:
   - In your browser settings, enable "Send a 'Do Not Track' request".
   - Open a fresh tab, navigate to the site, and verify in DevTools that `tracker.js` exits immediately without making any network requests.
4. **Ad-Blocker & Offline Resilience**:
   - Enable an ad-blocker that blocks `ipapi.co` (or block the domain in DevTools Network Request Blocking).
   - Open a new tab session.
   - Verify that the visit is still sent to Google Apps Script with empty strings for `country` and `city` without throwing errors or breaking page load.
5. **Formula Injection Sanitization**:
   - Send a test POST request with a parameter starting with `=SUM(1+1)`.
   - Verify in Google Sheets that the cell begins with a single quote (`'=SUM(1+1)`) and displays as literal text rather than evaluating as a formula.
6. **Footer Notice**:
   - Scroll to the bottom of the page and verify the privacy notice is visible and matches existing footer text styling:
     *"This site logs anonymous visit stats (page, country, device). No IP addresses are stored."*
