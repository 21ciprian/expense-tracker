import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import styles from './Header.module.css'

type HeaderProps = {
	title: string
}

function Header({title}: HeaderProps): JSX.Element {
	const {user, isAuthenticated, isLoading} = useAuth0()
	if (isLoading) {
		return <div>Loading ...</div>
	}

	return (
		<header className={styles.header}>
			<h3>{title}</h3>
			{isAuthenticated && (
				<>
					<img src={user?.picture} alt={user?.name} />
					<h4>Hello {user?.name}</h4>
				</>
			)}
		</header>
	)
}

export default Header
