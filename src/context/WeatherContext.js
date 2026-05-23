// src/context/WeatherContext.js
const { createContext, useContext, useState } = React;

const WeatherContext = createContext(null);

window.WeatherProvider = function WeatherProvider({ children }) {
  const [unit, setUnit]       = useState("c");   // "c" | "f"
  const [data, setData]       = useState(null);
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [error, setError]     = useState("");
  const [query, setQuery]     = useState("");

  const search = async (q) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    setStatus("loading");
    setError("");
    try {
      const result = await window.WeatherAPI.fetchForecast(trimmed);
      setData(result);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  const toggleUnit = (u) => setUnit(u);

  return (
    <WeatherContext.Provider value={{ unit, toggleUnit, data, status, error, search, query }}>
      {children}
    </WeatherContext.Provider>
  );
};

window.useWeatherContext = function useWeatherContext() {
  const ctx = useContext(WeatherContext);
  if (!ctx) throw new Error("useWeatherContext must be inside WeatherProvider");
  return ctx;
};
