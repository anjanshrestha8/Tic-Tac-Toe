import Strike from "./Strike";
import Tiles from "./Tiles";

import "../assets/css/components/board.css";

function Board() {
  return (
    <>
      <div className="board">
        <Tiles />
        <Tiles />
        <Tiles />
        <Tiles />
        <Tiles />
        <Tiles />
        <Tiles />
        <Tiles />
        <Tiles />

        <Strike />
      </div>
    </>
  );
}

export default Board;
