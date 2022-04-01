import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import Button from '../Button'

function Logout(): JSX.Element {
	const {logout} = useAuth0()
	const buttonStyle = {
		width: '80%',
		backgroundColor: 'blue',
	}

	return (
		<Button
			style={buttonStyle}
			handleClick={() => logout({returnTo: window.location.origin})}
			text='Log Out'
		/>
	)
}

export default Logout
