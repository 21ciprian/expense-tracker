import {AiOutlineHistory, AiOutlineHome} from 'react-icons/ai'
import {BsPlusCircleFill} from 'react-icons/bs'
import {GiPayMoney, GiReceiveMoney} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'
import styles from './BottomNav.module.css'

const BottomNav = () => {
	const activeStyle = {
		color: '#4bc0c0'
	}
	return (
		<div className={styles.bottomNav}>
			<NavLink
				to='/'
				style={({isActive}) => (isActive ? activeStyle : undefined)}>
				<AiOutlineHome size={40} />
				<p>Home</p>
			</NavLink>
			<NavLink
				to='/history'
				style={({isActive}) => (isActive ? activeStyle : undefined)}>
				<AiOutlineHistory size={40} />
				<p>History</p>
			</NavLink>
			<NavLink to='/add-transaction'>
				<BsPlusCircleFill size={60} />
			</NavLink>
			<NavLink
				to='/expense-history'
				style={({isActive}) => (isActive ? activeStyle : undefined)}>
				<GiPayMoney size={40} />
				<p>Expense</p>
			</NavLink>
			<NavLink
				to='/income-history'
				style={({isActive}) => (isActive ? activeStyle : undefined)}>
				<GiReceiveMoney size={40} />
				<p>Income</p>
			</NavLink>
		</div>
	)
}

export default BottomNav
