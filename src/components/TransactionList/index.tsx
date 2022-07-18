/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import Transaction from '../Transaction'
import styles from './TransactionList.module.css'

function TransactionList(): JSX.Element {
	const context = useContext(GlobalContext)

	useEffect(() => {
		context?.getTransactions?.()
		//eslint-disable-next-line react-hooks/exhaustive-deps
		//
	}, [])
	if (!context) return <h2>Loading...</h2>

	return (
		<section className={styles.transactions}>
			<h3>History</h3>
			<ul className={styles.list}>
				{context?.transactions?.map(transaction => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</section>
	)
}

export default TransactionList
