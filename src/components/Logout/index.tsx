import {useAuth0} from '@auth0/auth0-react'
import React from 'react'

function LogoutButton(): JSX.Element {
	const {logout} = useAuth0()

	return (
		<button onClick={() => logout({returnTo: window.location.origin})}>
			Log Out
		</button>
	)
}

export default LogoutButton
