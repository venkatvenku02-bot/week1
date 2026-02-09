function StatusPanel({ status, onToggle }) {
  return (
    <div className="card">
      <p>Status: <strong>{status}</strong></p>
      <button onClick={onToggle}>
        Change Status
      </button>
    </div>
  );
}

export default StatusPanel;