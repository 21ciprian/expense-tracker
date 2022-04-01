import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
	handleClick?: () => void
	text: string
	style: {
		width: string
		backgroundColor?: string
	}
}

function Button({handleClick, text, style}: ButtonProps) {
	return (
		<button style={style} onClick={handleClick} className={styles.button}>
			{text}
		</button>
	)
}

export default Button
