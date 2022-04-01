import {useAuth0} from '@auth0/auth0-react'
import logo from '../../assets/logo.svg'
import Button from '../Button'
import styles from './Login.module.css'
function LoginButton(): JSX.Element {
	const {loginWithRedirect} = useAuth0()

	return (
		<>
			<img className={styles.logo} src={logo} alt='logo' />
			<h2>Expense Tracker</h2>
			<h4>You need to be logged in to see your expenses</h4>
			<Button handleClick={() => loginWithRedirect()} text='Log In' />
		</>
	)
}

export default LoginButton
