import { useState } from "react";
import Board from "./Board";

function TicTacToe() {
  const Player_X = "X";
  const Player_O = "O";

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(Player_X);

  const handleTileClick = (index) => {
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === Player_X) {
      setPlayerTurn(Player_O);
    } else {
      setPlayerTurn(Player_X);
    }
  };

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
      />
    </>
  );
}

export default TicTacToe;
