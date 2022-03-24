import React from 'react'
import styles from './Header.module.css'

type HeaderProps = {
	title: string
}

function Header({title}: HeaderProps): JSX.Element {
	return <header className={styles.header}>{title}</header>
}

export default Header
