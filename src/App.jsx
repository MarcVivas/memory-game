import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'
import Game from './components/Game'

function App() {
  const [newGame, setNewGame] = useState({newGame:false, cardNumber:10});
  const [record, setRecord] = useState(0);

  return (
    <>
      {newGame.newGame ? null : <Menu record={{value:record, set:setRecord}} newGame={{value:newGame, set:setNewGame}}/>}
      {newGame.newGame ? <Game record={{value:record, set:setRecord}} newGame={{value:newGame, set:setNewGame}} /> : null}
    </>
  )
}

export default App
