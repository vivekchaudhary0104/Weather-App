// src/components/SearchBar.js
const { useState } = React;

const QUICK_CITIES = ["Delhi", "London", "New York", "Tokyo", "Dubai", "Sydney"];

window.SearchBar = function SearchBar() {
  const { search } = window.useWeatherContext();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) search(input.trim());
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search city, region or zip code…"
          autoComplete="off"
          spellCheck="false"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="quick-pills">
        <span className="ql-label">Quick:</span>
        {QUICK_CITIES.map((city) => (
          <button
            key={city}
            className="ql-pill"
            onClick={() => {
              setInput(city);
              search(city);
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};
