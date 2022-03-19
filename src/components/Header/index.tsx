import React from 'react'

type HeaderProps = {
	title: string
}

function Header({title}: HeaderProps) {
	return <header>{title}</header>
}

export default Header
