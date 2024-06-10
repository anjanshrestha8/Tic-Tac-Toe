/* eslint-disable react/prop-types */
import Strike from "./Strike";
import Tiles from "./Tiles";

import "../assets/css/components/board.css";

function Board(props) {
  return (
    <>
      <div className="board">
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(0);
          }}
          value={props.tiles[0]}
          className="right-border bottom-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(1);
          }}
          value={props.tiles[1]}
          className="right-border bottom-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(2);
          }}
          value={props.tiles[2]}
          className="bottom-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(3);
          }}
          value={props.tiles[3]}
          className="right-border bottom-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(4);
          }}
          value={props.tiles[4]}
          className="right-border bottom-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(5);
          }}
          value={props.tiles[5]}
          className=" bottom-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(6);
          }}
          value={props.tiles[6]}
          className="right-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(7);
          }}
          value={props.tiles[7]}
          className="right-border"
        />
        <Tiles
          playerTurn={props.playerTurn}
          onClick={() => {
            props.onTileClick(8);
          }}
          value={props.tiles[8]}
        />

        <Strike />
      </div>
    </>
  );
}

export default Board;
