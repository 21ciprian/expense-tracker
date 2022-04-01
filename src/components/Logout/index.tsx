import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import Button from '../Button'
import styles from './Logout.module.css'

function Logout(): JSX.Element {
	const {logout} = useAuth0()
	const buttonStyle = {
		width: '100%',
		// backgroundColor: 'blue',
	}

	return (
		<section className={styles.logout}>
			<Button
				style={buttonStyle}
				handleClick={() => logout({returnTo: window.location.origin})}
				text='Log Out'
			/>
		</section>
	)
}

export default Logout
