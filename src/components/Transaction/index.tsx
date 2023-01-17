import {DeleteForeverOutlined} from '@mui/icons-material'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {GlobalContext} from '../../context/GlobalState'
import {TransactionProp} from '../../types'
import {numberWithCommas} from '../../utils/format'
import styles from './Transaction.module.css'
function Transaction({transaction}: TransactionProp): JSX.Element {
	const sign = transaction.amount < 0 ? '-' : '+'
	const context = useContext(GlobalContext)
	const navigate = useNavigate()
	return (
		<li
			onClick={() => navigate(`/history/${transaction._id}`)}
			className={transaction.amount < 0 ? `${styles.minus}` : `${styles.plus}`}>
			<h4>
				{transaction.text.charAt(0).toUpperCase() +
					transaction.text.slice(1).toLowerCase()}{' '}
			</h4>

			<span>
				{sign}£{numberWithCommas(Math.abs(transaction.amount)).toFixed(2)}{' '}
			</span>
			<button
				onClick={() => context?.deleteTransaction?.(transaction._id)}
				className={styles.deleteBtn}>
				<DeleteForeverOutlined fontSize='large' sx={{color: '#ff6384'}} />
			</button>
		</li>
	)
}

export default Transaction
