import React from 'react'
import styles from './Button.module.css'

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean; 
    name?: string;
};

const Button = ({onClick, disabled, name}:ButtonProps) => {
  return (
    <button onClick={onClick} style={styles} disabled={disabled}>{name}</button>
  )
}

export default Button