/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect} from 'react'
import Transaction from '../../components/Transaction'
import {GlobalContext} from '../../context/GlobalState'
import styles from './History.module.css'

function History(): JSX.Element {
	const context = useContext(GlobalContext)
	useEffect(() => {
		context?.getTransactions?.()
	}, [])

	if (!context) return <h2>Loading...</h2>

	return (
		<section className={styles.transactions} style={{marginTop: '170px'}}>
			<ul className={styles.list}>
				{context?.transactions?.map(transaction => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</section>
	)
}

export default History
