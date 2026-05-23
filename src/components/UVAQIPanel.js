// src/components/UVAQIPanel.js

window.UVAQIPanel = function UVAQIPanel() {
  const wx = window.useWeather();
  if (!wx.ready) return null;

  return (
    <div className="uv-aqi-grid">
      {/* UV Card */}
      <div className="card panel-card">
        <span className="stat-icon">☀️</span>
        <span className="panel-label">UV Index</span>
        <span className="panel-value">{wx.uv}</span>
        <div className="uv-track">
          <div
            className="uv-fill"
            style={{ width: `${wx.uvPct}%`, background: wx.uvColor }}
          />
        </div>
        <span className="uv-desc">{wx.uvLabel}</span>
      </div>

      {/* AQI Card */}
      <div className="card panel-card">
        <span className="stat-icon">🌿</span>
        <span className="panel-label">Air Quality (US EPA)</span>
        {wx.aqiIndex ? (
          <>
            <span className="panel-value">PM2.5 · {wx.pm25} µg/m³</span>
            <span
              className="aqi-badge"
              style={{ background: wx.aqiColor }}
            >
              {wx.aqiLabel}
            </span>
          </>
        ) : (
          <span className="panel-value" style={{ color: "var(--text-muted)" }}>N/A</span>
        )}
      </div>
    </div>
  );
};
