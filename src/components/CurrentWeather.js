// src/components/CurrentWeather.js

window.CurrentWeather = function CurrentWeather() {
  const wx = window.useWeather();
  if (!wx.ready) return null;

  const stats = [
    { icon: "💧", label: "Humidity",    value: wx.humidity   },
    { icon: "💨", label: "Wind",        value: wx.wind       },
    { icon: "💥", label: "Wind Gust",   value: wx.gust       },
    { icon: "👁️", label: "Visibility",  value: wx.visibility },
    { icon: "🌡️", label: "Pressure",    value: wx.pressure   },
    { icon: "☁️", label: "Cloud Cover", value: wx.cloud      },
    { icon: "🌅", label: "Sunrise",     value: wx.sunrise    },
    { icon: "🌇", label: "Sunset",      value: wx.sunset     },
  ];

  return (
    <>
      {/* Main card */}
      <div className="card current-card">
        <div className="current-top">
          <div>
            <h1 className="city-name">{wx.cityName}</h1>
            <p className="city-sub">
              {[wx.region, wx.country].filter(Boolean).join(", ")}
            </p>
            <p className="city-time">{wx.localTime}</p>
          </div>
          <img className="wx-icon" src={wx.icon} alt={wx.condition} />
        </div>

        <div className="temp-row">
          <span className="big-temp">{wx.temp}</span>
          <div className="temp-meta">
            <span className="condition">{wx.condition}</span>
            <span className="feels">Feels like {wx.feelsLike}</span>
            <span className="hilo">H: {wx.hiTemp} &nbsp;/&nbsp; L: {wx.loTemp}</span>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        {stats.map((s) => (
          <window.StatCard key={s.label} icon={s.icon} label={s.label} value={s.value} />
        ))}
      </div>
    </>
  );
};
