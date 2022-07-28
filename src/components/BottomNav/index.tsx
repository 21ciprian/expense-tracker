import {
	AiOutlineHistory,
	AiOutlineHome,
	AiOutlinePlusCircle
} from 'react-icons/ai'
import {BsGraphDown, BsGraphUp} from 'react-icons/bs'
import styles from './BottomNav.module.css'
type Props = {}

const index = (props: Props) => {
	return (
		<div className={styles.bottomNav}>
			<AiOutlineHome />
			<AiOutlineHistory />
			<AiOutlinePlusCircle />
			<BsGraphDown />
			<BsGraphUp />
		</div>
	)
}

export default index
