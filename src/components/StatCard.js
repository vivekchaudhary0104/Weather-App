// src/components/StatCard.js

window.StatCard = function StatCard({ icon, label, value }) {
  return (
    <div className="card stat-card">
      <span className="stat-icon">{icon}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
};
