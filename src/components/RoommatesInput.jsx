import Roommate from "./Roommate.jsx";
export default function RoommatesInput() {
  return (
    <>
      <div className="roommate-input">
        <h3 className="roommate-input__description">
          Даты выезда/заезда включительно
        </h3>
        <Roommate />
        <div className="roommate-input__button"></div>
      </div>
    </>
  );
}
