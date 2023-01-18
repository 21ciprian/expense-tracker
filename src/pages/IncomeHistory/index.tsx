import Transaction from '../../components/Transaction'
import {data} from '../../data'
import styles from './IncomeHistory.module.css'

function IncomeHistory() {
	const amounts = data
	const expenses = amounts.filter(amount => amount.amount > 0)
	return (
		<section style={{marginTop: '150px'}} className={styles.transactions}>
			<ul className={styles.list}>
				{expenses.map(expense => (
					<Transaction
						key={expense._id}
						transaction={{
							_id: 0,
							transactionName: '',
							description: undefined,
							venue: undefined,
							date: undefined,
							amount: 0,
							transactionType: undefined,
							email: ''
						}}
					/>
				))}
			</ul>
		</section>
	)
}

export default IncomeHistory
