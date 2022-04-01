import {useAuth0} from '@auth0/auth0-react'
import React from 'react'

function UpdateTransaction(): JSX.Element {
	const {user} = useAuth0()
	return <div>UpdateTransaction</div>
}

export default UpdateTransaction
