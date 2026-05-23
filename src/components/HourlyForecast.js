// src/components/HourlyForecast.js

window.HourlyForecast = function HourlyForecast() {
  const wx = window.useWeather();
  if (!wx.ready) return null;

  return (
    <div className="card forecast-card">
      <p className="section-title">Hourly Forecast</p>
      <div className="hourly-track">
        {wx.hourly.map((h, i) => (
          <div className="hourly-item" key={i}>
            <span className="h-time">{h.time}</span>
            <img className="h-icon" src={h.icon} alt={h.alt} />
            <span className="h-temp">{h.temp}</span>
            <span className="h-rain">🌧 {h.rain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
