const { StrictMode } = React;

function Header() {
  const { unit, toggleUnit } = window.useWeatherContext();
  return (
    <header className="app-header">
      <div className="app-logo">
        <span>⛅</span> Weather App
      </div>
      <div className="unit-toggle">
        <button
          className={`unit-btn ${unit === "c" ? "active" : ""}`}
          onClick={() => toggleUnit("c")}
        >
          °C
        </button>
        <button
          className={`unit-btn ${unit === "f" ? "active" : ""}`}
          onClick={() => toggleUnit("f")}
        >
          °F
        </button>
      </div>
    </header>
  );
}

function AppContent() {
  const { status, error } = window.useWeatherContext();

  return (
    <div className="app-wrap">
      <div className="ambient" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="app-container">
        <Header />
        <window.SearchBar />

        {status === "idle" && (
          <div className="state-center">
            <span className="state-emoji">🌍</span>
            <p>Search any city, region, or zip code to get live weather.</p>
          </div>
        )}

        {status === "loading" && (
          <div className="state-center">
            <div className="spinner" />
            <p>Fetching weather…</p>
          </div>
        )}

        {status === "error" && (
          <div className="state-center error-state">
            <span className="state-emoji">⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {status === "success" && (
          <>
            <window.CurrentWeather />
            <window.UVAQIPanel />
            <window.HourlyForecast />
            <window.DailyForecast />
          </>
        )}
      </div>
    </div>
  );
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <window.WeatherProvider>
      <AppContent />
    </window.WeatherProvider>
  </StrictMode>
);
