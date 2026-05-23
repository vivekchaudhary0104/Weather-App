// src/components/DailyForecast.js

window.DailyForecast = function DailyForecast() {
  const wx = window.useWeather();
  if (!wx.ready) return null;

  return (
    <div className="card forecast-card">
      <p className="section-title">7-Day Forecast</p>
      {wx.daily.map((d, i) => (
        <div className="daily-row" key={i}>
          <span className="d-day">{d.day}</span>
          <img className="d-icon" src={d.icon} alt={d.alt} />
          <span className="d-cond">{d.cond}</span>
          <span className="d-rain">🌧 {d.rain}</span>
          <div className="d-temps">
            <span className="d-hi">{d.hi}</span>
            <span className="d-lo">{d.lo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
