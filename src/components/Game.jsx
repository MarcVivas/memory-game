import { useEffect, useState } from "react";
import EndGame from "./EndGame";
import PlayerStats from "./PlayerStats";
import Cards from "./Cards";

export default function Game({record, newGame}) {

    const [endGame, setEndGame] = useState({endGame: false, cause:""});
    const [cardsClicked, setCardsClicked] = useState(new Set());


    function renderGame() {
        if (endGame.endGame) {
          return (
            <EndGame endGame={{value:endGame, set:setEndGame}} newGame={newGame} setCardsClicked={setCardsClicked}/>
          );
        } else {
          return (
            <div className="game">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 mt-5">
                            <PlayerStats record={record} cardsClicked={cardsClicked}/>

                        </div>
                        <div className="col-12 mb-5">
                            <Cards endGame={{value:endGame, set:setEndGame}} newGame={newGame} record={record} cardsClicked={{value:cardsClicked, set:setCardsClicked}}/>

                        </div>
                    </div>
                </div>
            </div>
          );
        }
      }


    return (
        <>
            {renderGame()}
        </>
    );

}