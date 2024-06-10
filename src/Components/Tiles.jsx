/* eslint-disable react/prop-types */
import "../assets/css/components/tiles.css";
function Tiles(props) {
  let hoverClass = null;
  if (props.value == null && props.playerTurn !== null) {
    hoverClass = `${props.playerTurn.toLowerCase()}-hover`;
  }
  return (
    <>
      <div
        onClick={props.onClick}
        className={`tiles ${props.className} ${hoverClass}`}
      >
        {props.value}
      </div>
    </>
  );
}

export default Tiles;
