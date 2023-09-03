export default function CardsClicked({cardsClicked}) {
    if(cardsClicked.size) {
        return <span>Cards remembered in this game: {cardsClicked.size}</span>;
    }
    return null;
}