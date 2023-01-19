import {useAuth0} from '@auth0/auth0-react'
import logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import styles from './Login.module.css'

function Login(): JSX.Element {
	const {loginWithRedirect} = useAuth0()
	const buttonStyle = {
		width: '80%'
	}
	return (
		<section className={styles.login}>
			<img className={styles.logo} src={logo} alt='logo' />
			<h4>You need to be logged in to see your expenses</h4>
			<Button
				style={buttonStyle}
				handleClick={() => loginWithRedirect()}
				text='Log In'
			/>
		</section>
	)
}

export default Login
