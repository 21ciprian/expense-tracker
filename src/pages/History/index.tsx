/* eslint-disable react-hooks/exhaustive-deps */
// import {useContext, useEffect} from 'react'
import Transaction from '../../components/Transaction'
// import {GlobalContext} from '../../context/GlobalState'
import {data} from '../../data'
import styles from './History.module.css'

function History(): JSX.Element {
	// const context = useContext(GlobalContext)
	const context = data
	// useEffect(() => {
	// 	context?.getTransactions?.()
	// 	//eslint-disable-next-line react-hooks/exhaustive-deps
	// 	//
	// }, [])
	if (!context) return <h2>Loading...</h2>

	return (
		<section className={styles.transactions} style={{marginTop: '170px'}}>
			{/* <h3>History</h3> */}
			<ul className={styles.list}>
				{/* {context?.transactions?.map(transaction => ( */}
				{context?.map(transaction => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</section>
	)
}

export default History
