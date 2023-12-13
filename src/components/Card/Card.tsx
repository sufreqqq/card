import React from 'react'
import styles from './Card.module.css'

export type ImageProps = {
    src: string;
    alt?: string;
};

const Card = ({src, alt}:ImageProps) => {
  return (
    <img src={src} style={styles} alt={alt}/>
  )
}

export default Card