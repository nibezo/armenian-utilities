export default function Utilities() {
  return (
    <>
      <div className="utilities">
        <div className="utilities__water">
          <p className="utilities__water-text">Вода</p>
          <input type="number" class="utilities__water-input" />
        </div>
        <div className="utilities__electricity">
          <p className="utilities__electricity-text">Электричество</p>
          <input type="number" class="utilities__electricity-input" />
        </div>
        <div className="utilities__gas">
          <p className="utilities__gas-text">Газ</p>
          <input type="number" class="utilities__gas-input" />
        </div>
      </div>
    </>
  );
}
