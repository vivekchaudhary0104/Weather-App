// src/hooks/useWeather.js
// Custom hook that exposes derived weather values from context

window.useWeather = function useWeather() {
  const { unit, data } = window.useWeatherContext();
  const H = window.Helpers;

  if (!data) return { ready: false };

  const loc      = data.location;
  const cur      = data.current;
  const forecast = data.forecast.forecastday;

  // Build hourly list for next 24 hours
  const localNow  = new Date(loc.localtime.replace(" ", "T"));
  const allHours  = [
    ...forecast[0].hour,
    ...(forecast[1] ? forecast[1].hour : []),
  ];
  const upcomingHours = allHours
    .filter((h) => new Date(h.time) >= localNow)
    .slice(0, 24);

  return {
    ready: true,
    // location
    cityName:   loc.name,
    region:     loc.region,
    country:    loc.country,
    localTime:  H.formatLocalTime(loc.localtime),
    // current
    temp:       H.tempStr(cur.temp_c, unit),
    feelsLike:  H.tempStr(cur.feelslike_c, unit),
    hiTemp:     H.tempStr(forecast[0].day.maxtemp_c, unit),
    loTemp:     H.tempStr(forecast[0].day.mintemp_c, unit),
    condition:  cur.condition.text,
    icon:       H.iconUrl(cur.condition.icon),
    humidity:   `${cur.humidity}%`,
    wind:       `${H.windStr(cur.wind_kph, unit)} ${cur.wind_dir}`,
    gust:       H.windStr(cur.gust_kph, unit),
    visibility: H.visStr(cur.vis_km, unit),
    pressure:   `${cur.pressure_mb} hPa`,
    cloud:      `${cur.cloud}%`,
    sunrise:    forecast[0].astro.sunrise,
    sunset:     forecast[0].astro.sunset,
    // UV
    uv:         cur.uv,
    uvLabel:    H.uvLabel(cur.uv),
    uvColor:    H.uvColor(cur.uv),
    uvPct:      Math.min((cur.uv / 11) * 100, 100),
    // AQI
    aqiIndex:   cur.air_quality?.["us-epa-index"],
    aqiLabel:   H.aqiLabel(cur.air_quality?.["us-epa-index"]),
    aqiColor:   H.aqiColor(cur.air_quality?.["us-epa-index"]),
    pm25:       cur.air_quality ? Math.round(cur.air_quality.pm2_5) : null,
    // forecasts
    hourly: upcomingHours.map((h) => ({
      time:   H.formatHour(h.time),
      icon:   H.iconUrl(h.condition.icon),
      alt:    h.condition.text,
      temp:   H.tempStr(h.temp_c, unit),
      rain:   `${h.chance_of_rain}%`,
    })),
    daily: forecast.map((d, i) => ({
      day:    H.dayName(d.date, i),
      icon:   H.iconUrl(d.day.condition.icon),
      alt:    d.day.condition.text,
      cond:   d.day.condition.text,
      rain:   `${d.day.daily_chance_of_rain}%`,
      hi:     H.tempStr(d.day.maxtemp_c, unit),
      lo:     H.tempStr(d.day.mintemp_c, unit),
    })),
  };
};
