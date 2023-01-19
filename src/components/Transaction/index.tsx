import {DeleteForeverOutlined} from '@mui/icons-material'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {GlobalContext} from '../../context/GlobalState'
import {TransactionProp} from '../../types'
import {numberWithCommas} from '../../utils/utils'
import styles from './Transaction.module.css'

function Transaction({transaction}: TransactionProp): JSX.Element {
	const sign = transaction.amount < 0 ? '-' : '+'
	const context = useContext(GlobalContext)
	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate(`/history/${transaction._id}`)
	}
	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation()
		context?.deleteTransaction?.(transaction._id)
	}
	return (
		<li
			onClick={handleNavigate}
			className={transaction.amount < 0 ? `${styles.minus}` : `${styles.plus}`}>
			<h4>
				{transaction.transactionName.charAt(0).toUpperCase() +
					transaction.transactionName.slice(1).toLowerCase()}{' '}
			</h4>

			<span>
				{sign}£{numberWithCommas(Math.abs(transaction.amount)).toFixed(2)}{' '}
			</span>
			<button onClick={handleDelete} className={styles.deleteBtn}>
				<DeleteForeverOutlined fontSize='large' sx={{color: '#ff6384'}} />
			</button>
		</li>
	)
}

export default Transaction
