
import React, { useState, useEffect} from 'react';
import styles from './styles/styles.module.css'
//import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import Button from './components/Button/Button';

const card = (src: string, alt: string, value: number) => ({ src, alt, value });
  
const cards = [
  card("../cards/ace_2.jpg", "2", 2),
  card("../cards/ace_3.jpg", "3", 3),
  card("../cards/ace_4.jpg", "4", 4),
  card("../cards/ace_5.jpg", "5", 5),
  card("../cards/ace_6.jpg", "6", 6),
  card("../cards/ace_7.jpg", "7", 7),
  card("../cards/ace_8.jpg", "8", 8),
  card("../cards/ace_9.jpg", "9", 9),
  card("../cards/ace_10.jpg", "10", 10),
  card("../cards/ace_J.jpg", "J", 2),
  card("../cards/ace_Q.jpg", "Q", 3),
  card("../cards/ace_K.jpg", "K", 4),
  card("../cards/ace_A.jpg", "A", 11),

  card("../cards/hearts_2.jpg", "2", 2),
  card("../cards/hearts_3.jpg", "3", 3),
  card("../cards/hearts_4.jpg", "4", 4),
  card("../cards/hearts_5.jpg", "5", 5),
  card("../cards/hearts_6.jpg", "6", 6),
  card("../cards/hearts_7.jpg", "7", 7),
  card("../cards/hearts_8.jpg", "8", 8),
  card("../cards/hearts_9.jpg", "9", 9),
  card("../cards/hearts_10.jpg", "10", 10),
  card("../cards/hearts_J.jpg", "J", 2),
  card("../cards/hearts_Q.jpg", "Q", 3),
  card("../cards/hearts_K.jpg", "K", 4),
  card("../cards/hearts_A.jpg", "A", 11),

  card("../cards/diamonds_2.jpg", "2", 2),
  card("../cards/diamonds_3.jpg", "3", 3),
  card("../cards/diamonds_4.jpg", "4", 4),
  card("../cards/diamonds_5.jpg", "5", 5),
  card("../cards/diamonds_6.jpg", "6", 6),
  card("../cards/diamonds_7.jpg", "7", 7),
  card("../cards/diamonds_8.jpg", "8", 8),
  card("../cards/diamonds_9.jpg", "9", 9),
  card("../cards/diamonds_10.jpg", "10", 10),
  card("../cards/diamonds_J.jpg", "J", 2),
  card("../cards/diamonds_Q.jpg", "Q", 3),
  card("../cards/diamonds_K.jpg", "K", 4),
  card("../cards/diamonds_A.jpg", "A", 11),

  card("../cards/clubs_2.jpg", "2", 2),
  card("../cards/clubs_3.jpg", "3", 3),
  card("../cards/clubs_4.jpg", "4", 4),
  card("../cards/clubs_5.jpg", "5", 5),
  card("../cards/clubs_6.jpg", "6", 6),
  card("../cards/clubs_7.jpg", "7", 7),
  card("../cards/clubs_8.jpg", "8", 8),
  card("../cards/clubs_9.jpg", "9", 9),
  card("../cards/clubs_10.jpg", "10", 10),
  card("../cards/clubs_J.jpg", "J", 2),
  card("../cards/clubs_Q.jpg", "Q", 3),
  card("../cards/clubs_K.jpg", "K", 4),
  card("../cards/clubs_A.jpg", "A", 11),
]

function Main() {

  const [activeCards, setActiveCards] = useState<{src: string, alt: string, value: number}[]>([]);
  const [activeBotCards, setActiveBotCards] = useState<{src: string, alt: string, value: number}[]>([]);
  const [value, setValue] = useState(0);
  const [botValue, botSetValue] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStatus, setGameStatus] = useState("")

const takeCard = () => {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  const randomBotCard = cards[Math.floor(Math.random() * cards.length)];
  setActiveCards((activeCards) => [...activeCards, randomCard]);
  setActiveBotCards((activeBotCards) => [...activeBotCards, randomBotCard]);
  setValue((value) => (value + randomCard.value <= 21 ? value + randomCard.value : value + 1));
  botSetValue((botValue) => (botValue + randomBotCard.value <= 21 ? botValue + randomBotCard.value : botValue + 1));
};

  const restart = () => {
    setActiveCards([]); 
    setActiveBotCards([]);
    setGameOver(false); 
    setValue(0)
    botSetValue(0)
  }

const pass = () => {
  setGameOver(true);
  const randomBotCard = cards[Math.floor(Math.random() * cards.length)];
  setActiveBotCards((activeBotCards) => [...activeBotCards, randomBotCard]);
  botSetValue((botValue) => (botValue + randomBotCard.value <= 21 ? botValue + randomBotCard.value : botValue + 1));
};

useEffect(() => {
  if (!gameOver) {
    if (botValue <= 21 && value <= 21) {
      if (botValue > value) {
        setGameStatus("Вы проиграли");
      } else if (value > botValue) {
        setGameStatus("Вы выиграли");
      } else if (value === botValue) {
        setGameStatus("Ничья");
      }
    } else if (value <= 21 && botValue > 21) {
      setGameStatus("Вы выиграли");
    } else if (value > 21 && botValue <= 21) {
      setGameStatus("Вы проиграли");
    } else if (value > 21 && botValue > 21) {
      setGameStatus("Ничья");
    }
  }

  console.log(gameStatus);
}, [botValue, value, gameOver, gameStatus]);



  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Игра 21</h1>
        <p style={{textAlign: 'center'}}>Твой счет: {value}</p>
        <CardList cards={activeCards} />
        <p style={{textAlign: 'center'}}>Счет компьютера: {botValue}</p>
        <CardList cards={activeBotCards} />
        <div>
          {gameOver && <h3 style={{textAlign: 'center'}}>{gameStatus}</h3>}
          {gameOver ? <Button name='Начать заново' onClick={() => restart()}></Button> : <Button name='Взять' disabled={gameOver} onClick={() => takeCard()}></Button>}
          {gameOver ? null : <Button name='Пропустить' disabled={gameOver} onClick={() => pass()}></Button>}
        </div>
      </div>
    </main>
  );
}

export default Main;
