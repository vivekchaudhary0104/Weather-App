// src/utils/helpers.js

window.Helpers = (() => {
  const toF = (c) => Math.round((c * 9) / 5 + 32);

  const tempStr = (c, unit) =>
    unit === "f" ? `${toF(c)}°F` : `${Math.round(c)}°C`;

  const windStr = (kph, unit) =>
    unit === "f"
      ? `${Math.round(kph * 0.621371)} mph`
      : `${Math.round(kph)} km/h`;

  const visStr = (km, unit) =>
    unit === "f"
      ? `${Math.round(km * 0.621371)} mi`
      : `${km} km`;

  const iconUrl = (url) =>
    url ? (url.startsWith("//") ? "https:" + url : url) : "";

  const formatLocalTime = (localtime) => {
    const d = new Date(localtime.replace(" ", "T"));
    return d.toLocaleString("en-US", {
      weekday: "long",
      month:   "short",
      day:     "numeric",
      hour:    "2-digit",
      minute:  "2-digit",
    });
  };

  const formatHour = (timeStr) => {
    const d = new Date(timeStr);
    return d.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
  };

  const dayName = (dateStr, index) => {
    if (index === 0) return "Today";
    return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  const uvLabel = (uv) => {
    if (uv <= 2)  return "Low";
    if (uv <= 5)  return "Moderate";
    if (uv <= 7)  return "High";
    if (uv <= 10) return "Very High";
    return "Extreme";
  };

  const uvColor = (uv) => {
    if (uv <= 2)  return "#4caf50";
    if (uv <= 5)  return "#ffeb3b";
    if (uv <= 7)  return "#ff9800";
    if (uv <= 10) return "#f44336";
    return "#9c27b0";
  };

  const aqiLabel = (idx) =>
    ["", "Good", "Moderate", "Unhealthy for Sensitive Groups", "Unhealthy", "Very Unhealthy", "Hazardous"][idx] || "Unknown";

  const aqiColor = (idx) =>
    ["", "#4caf50", "#c8e820", "#ffeb3b", "#ff9800", "#f44336", "#9c27b0"][idx] || "#aaa";

  return { tempStr, windStr, visStr, iconUrl, formatLocalTime, formatHour, dayName, uvLabel, uvColor, aqiLabel, aqiColor };
})();
