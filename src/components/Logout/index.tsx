import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import Button from '../Button'

function Logout(): JSX.Element {
	const {logout} = useAuth0()

	return (
		<Button
			handleClick={() => logout({returnTo: window.location.origin})}
			text='	Log Out'
		/>
	)
}

export default Logout
