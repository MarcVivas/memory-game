import PersonalRecord from "./PersonalRecord";

export default function Menu({record, newGame}){
   
    function handleClick(e){
        newGame.set({...newGame.value, newGame:true});
    }
    
    return (
        <>
        <div className="menuImg" style={{filter: "blur(15px)"}}> </div>
        <div className="menu d-flex flex-column justify-content-center align-items-center">
            <div className="content">
                <h1>Memory card game</h1>
                <p>Click on the cards without repeating the cards you have clicked</p>
                <PersonalRecord record={record}/>
                <br />
                <button className="mt-5" onClick={handleClick}>New game</button>
            </div>
        </div>
        </>

    );
}