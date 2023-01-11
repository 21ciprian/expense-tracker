import {
	AiOutlineHistory,
	AiOutlineHome,
	AiOutlinePlusCircle
} from 'react-icons/ai'
import {BsGraphDown, BsGraphUp} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import styles from './BottomNav.module.css'

const BottomNav = () => {
	return (
		<div className={styles.bottomNav}>
			<Link to='/'>
				<AiOutlineHome />
			</Link>
			<Link to='/history'>
				<AiOutlineHistory />
			</Link>
			<Link to='/add-transaction'>
				<AiOutlinePlusCircle />
			</Link>
			<Link to='/expense-history'>
				<BsGraphDown />
			</Link>
			<Link to='/income-history'>
				<BsGraphUp />
			</Link>
		</div>
	)
}

export default BottomNav
