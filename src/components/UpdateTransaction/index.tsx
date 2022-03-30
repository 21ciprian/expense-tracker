import {useAuth0} from '@auth0/auth0-react'
import React from 'react'

function UpdateTransaction(): JSX.Element {
	const {user} = useAuth0()
	console.log('user from update: ', user)
	return <div>UpdateTransaction</div>
}

export default UpdateTransaction
