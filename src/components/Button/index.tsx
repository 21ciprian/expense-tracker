import React from 'react'

type ButtonProps = {
	handleClick: () => void
	text: string
}

function Button({handleClick, text}: ButtonProps) {
	return <div onClick={handleClick}>{text}</div>
}

export default Button
