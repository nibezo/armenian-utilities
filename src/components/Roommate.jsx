export default function Roommate() {
  return (
    <>
      <div className="roommate">
        <p className="roommate__name">Сосед 1</p>
        <span className="roomate__from">
          с <input type="number" className="roomate__from-input" />
        </span>
        <span className="roomate__to">
          до <input type="number" className="roomate__to-input" />
        </span>
      </div>
    </>
  );
}
