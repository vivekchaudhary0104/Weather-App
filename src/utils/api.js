// src/utils/api.js

window.WeatherAPI = (() => {
  const fetchForecast = async (query) => {
    const { API_KEY, BASE_URL } = window.APP_CONFIG;

    if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE") {
      throw new Error(
        "API key not set. Open src/config.js and replace YOUR_API_KEY_HERE with your WeatherAPI.com key."
      );
    }

    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&days=7&aqi=yes&alerts=no`;

    const res = await fetch(url);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `HTTP error ${res.status}`);
    }

    return res.json();
  };

  return { fetchForecast };
})();
