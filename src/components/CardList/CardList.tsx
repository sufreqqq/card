import React from 'react'
import Card from '../Card/Card'
import styles from './CardList.module.css'

type CardData = {
    src: string;
    alt?: string;
    value?: number
}

type CardListProps = {
    cards: Array<CardData>;
}

const CardList = ({cards}: CardListProps) => {
  return (
    <div className={styles.cardList}>
    {cards.map((card, index) => {
        return <Card src={card.src}  key={index} alt={card.alt}></Card>
    })}
    </div>
  )
}

export default CardList
