import Card from "./Card";


export default function EndGame({ endGame, newGame, setCardsClicked }) {
    function endTheCurrentGame(){
        setCardsClicked(new Set());
        endGame.set({...endGame.value, endGame:false})
    }
    
    function menu() {
        endTheCurrentGame();
        newGame.set({ ...newGame.value, newGame: false });
    }
  
    function startANewGame(numCards) {
        endTheCurrentGame();
        newGame.set({ newGame: true, cardNumber: numCards });
    }
  
    function content() {
      if (endGame.value.cause === "Level passed!") {
        return (
            <>
            <div className="levelPassed d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-5">Level Passed!</h1>
                <button onClick={() => startANewGame(newGame.value.cardNumber + 5)}>Next level</button>
            </div>
            </>
        );
            
            
      }
  
      return (
        <div className="gameOver d-flex flex-column align-items-center justify-content-center gap-4">
          <h1>End game</h1>
          <p>You have clicked this pokemon twice!</p>

          <Card pokemon={endGame.value.cause} endGame={endGame} />
  
          <div className="d-flex gap-4">
            <button onClick={() => startANewGame(newGame.value.cardNumber)}>Try again</button>
            <button onClick={menu}>Menu</button>
          </div>
        </div>
      );
    }
  
    return content();
}