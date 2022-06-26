import {useAuth0} from '@auth0/auth0-react'
import logo from '../../assets/logo.svg'
import Logout from '../Logout'
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
			<img src={logo} alt='logo' />
			<h4>
				Welcome, <span className={styles.name}></span>
				{user?.name?.split(' ')[0]}
			</h4>
			{isAuthenticated && (
				<div className={styles.user}>
					<Logout />
				</div>
			)}
		</header>
	)
}

export default Header
