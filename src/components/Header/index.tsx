import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import LogoutButton from '../Logout'
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
			<h4>{title}</h4>
			{isAuthenticated && (
				<div className={styles.user}>
					<LogoutButton />
					<img src={user?.picture} alt={user?.name} />

					{/* <h4>Hello {user?.name}</h4> */}
				</div>
			)}
		</header>
	)
}

export default Header
