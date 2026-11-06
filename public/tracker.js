(function () {
  'use strict';

  // =========================================================================
  // CONFIGURATION: Replace these placeholders before deploying
  // =========================================================================
  const ENDPOINT = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
  const TOKEN = 'YOUR_SECRET_TOKEN';

  // Honor Do Not Track preference
  if (navigator.doNotTrack === '1') {
    return;
  }

  // Run once per tab session. Silently exit if sessionStorage is blocked or fails.
  try {
    if (sessionStorage.getItem('visited')) {
      return;
    }
    sessionStorage.setItem('visited', '1');
  } catch {
    return;
  }

  async function track() {
    if (!ENDPOINT || ENDPOINT === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
      return;
    }

    try {
      let country = '';
      let city = '';

      // Fetch approximate country and city; proceed with empty values if blocked
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          country = data.country_name || data.country || '';
          city = data.city || '';
        }
      } catch {
        // Network failure, ad-blocker, or privacy extension — continue silently
      }

      // Collect only privacy-conscious metadata
      let referrer = 'direct';
      if (document.referrer) {
        try {
          const refUrl = new URL(document.referrer);
          referrer = refUrl.origin || 'direct';
        } catch {
          referrer = 'direct';
        }
      }

      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const device = isMobile ? 'mobile' : 'desktop';

      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = isDark ? 'dark' : 'light';

      const page = window.location.origin + window.location.pathname;
      const language = navigator.language || '';
      const screen = window.screen.width + 'x' + window.screen.height;

      const body = new FormData();
      body.append('token', TOKEN);
      body.append('page', page);
      body.append('referrer', referrer);
      body.append('device', device);
      body.append('language', language);
      body.append('screen', screen);
      body.append('theme', theme);
      body.append('country', country);
      body.append('city', city);

      fetch(ENDPOINT, {
        method: 'POST',
        body: body,
        mode: 'no-cors',
        keepalive: true
      });
    } catch {
      // Silently ignore any unexpected runtime errors
    }
  }

  // Defer execution until browser is idle, or after 1500ms fallback
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(track);
  } else {
    setTimeout(track, 1500);
  }
})();

