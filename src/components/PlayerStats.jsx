import CardsClicked from "./CardsClicked";
import PersonalRecord from "./PersonalRecord";
export default function PlayerStats({cardsClicked, record}) {
    
    
    return (
        <div className="container mb-5">
            <div className="row justify-content-between gap-4">
                <div className="col">
                    <CardsClicked cardsClicked={cardsClicked}/>
                </div>
                <div className="col">
                    <PersonalRecord record={record}/>
                </div>
            </div>
      </div>
    );
}