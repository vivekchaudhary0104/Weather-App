# ⛅ Nimbus — React Weather App

A production-quality weather app built with **React 18**, custom hooks, Context API, and WeatherAPI.com.
No build tools required — runs directly in the browser via Babel standalone + React CDN.

---

## 🗂️ Project Structure

```
nimbus-weather/
├── index.html                  # Entry point — loads React, Babel, all scripts
├── src/
│   ├── config.js               # ← YOUR API KEY GOES HERE
│   ├── styles/
│   │   └── global.css          # Full design system & responsive styles
│   ├── utils/
│   │   ├── helpers.js          # Pure utility functions (unit conversion, formatting)
│   │   └── api.js              # WeatherAPI.com fetch logic
│   ├── context/
│   │   └── WeatherContext.js   # React Context — global state (unit, data, status)
│   ├── hooks/
│   │   ├── useWeather.js       # Custom hook — derives display values from context
│   │   └── useDebounce.js      # Custom hook — debounces input
│   └── components/
│       ├── SearchBar.js        # Search input + quick-city pills
│       ├── StatCard.js         # Reusable stat display card
│       ├── CurrentWeather.js   # Main weather card + stats grid
│       ├── UVAQIPanel.js       # UV index + Air Quality panel
│       ├── HourlyForecast.js   # 24-hour horizontal scroll forecast
│       └── DailyForecast.js    # 7-day forecast list
└── README.md
```

**React concepts used (great for resume):**
- React 18 + `createRoot`
- Functional components throughout
- `useState`, `useEffect`, `useContext` hooks
- Custom hooks (`useWeather`, `useDebounce`)
- Context API + Provider pattern for global state
- Component composition & prop passing
- Conditional rendering for loading/error/success states

---

## 🚀 Step 1 — Add Your API Key

Open `src/config.js` and replace `YOUR_API_KEY_HERE`:

```js
window.APP_CONFIG = {
  API_KEY: "abc123youractualkey",   // ← paste here
  BASE_URL: "https://api.weatherapi.com/v1",
};
```

Get a free key (1M calls/month) at: **https://www.weatherapi.com/signup.aspx**

---

## 💻 Step 2 — Run Locally

> ⚠️ You MUST use a local server. Opening `index.html` as `file://` blocks API fetch calls.

**Option A — VS Code Live Server (easiest)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

**Option B — Python (no install needed)**
```bash
# Python 3
python -m http.server 8080

# Then open: http://localhost:8080
```

**Option C — Node.js**
```bash
npx serve .
# Follow the URL it prints
```

---

## 🌐 Deploy (Free)

### Netlify — drag & drop (30 seconds)
1. Go to **https://app.netlify.com/drop**
2. Drag the entire project folder onto the page
3. You're live at a `*.netlify.app` URL instantly

### GitHub Pages
1. Push this folder to a GitHub repo
2. Repo Settings → Pages → Source: `main` branch, `/ (root)`
3. Live at `https://yourusername.github.io/repo-name`

### Vercel
```bash
npm i -g vercel
vercel
```

---

## ✨ Features

| Feature | Detail |
|---|---|
| 🔍 Search | City name, zip code, coordinates |
| 🌡️ Current weather | Temp, feels-like, hi/lo, condition |
| 💧 Stats | Humidity, wind, gust, visibility, pressure, cloud cover |
| 🌅 Astro | Sunrise & sunset times |
| ☀️ UV Index | Value + visual bar + label |
| 🌿 Air Quality | PM2.5 + US EPA category badge |
| ⏱️ Hourly | Next 24 hours with rain chance |
| 📅 7-day | Daily hi/lo + rain chance |
| °C / °F | Toggle — updates all values instantly |
| 📱 Responsive | Works on mobile, tablet, desktop |

---

## ❓ FAQ

**Q: Why no Vite/Webpack?**
A: This uses Babel standalone + React CDN so there's zero setup — ideal for portfolios and quick demos. The component architecture, hooks, and context are identical to a Vite project.

**Q: Can I convert this to a Vite project?**
A: Yes — create a Vite project, copy `src/` over, replace `window.X` exports with proper ES module `export`/`import`, and remove Babel. The logic stays the same.

**Q: Is the free WeatherAPI key enough?**
A: Yes — 1 million calls/month on the free plan.
