import {useContext} from 'react'
import Transaction from '../../components/Transaction'
import {GlobalContext} from '../../context/GlobalState'
import styles from './IncomeHistory.module.css'

function IncomeHistory() {
	const context = useContext(GlobalContext)
	const incomeTransactions = context?.transactions?.filter(
		amount => amount.amount > 0
	)
	console.log({incomeTransactions})
	return (
		<section style={{marginTop: '150px'}} className={styles.transactions}>
			<ul className={styles.list}>
				{incomeTransactions.map(income => (
					<Transaction key={income._id} transaction={income} />
				))}
			</ul>
		</section>
	)
}

export default IncomeHistory
