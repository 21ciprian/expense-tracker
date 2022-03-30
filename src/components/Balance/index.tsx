import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import {numberWithCommas} from '../../utils/format'
import DoughnutChart from '../DoughnutChart'
import styles from './Balance.module.css'

function Balance(): JSX.Element {
	const context = useContext(GlobalContext)
	const amounts = context?.transactions?.map(transaction => transaction.amount)
	console.log('amounts:', amounts)
	const total = amounts?.reduce((acc, amount) => acc + amount, 0).toFixed(2)
	const sign = Number(total) < 0 ? '-' : ''
	if (!context) return <h2>Loading...</h2>
	return (
		<section className={styles.balance}>
			<h4>Your balance</h4>
			<h1>
				{sign}£{numberWithCommas(Math.abs(Number(total)))}
				<div
					className={
						Number(total) < 0 ? `${styles.minus}` : `${styles.plus}`
					}></div>
			</h1>
			<DoughnutChart amounts={amounts} />
		</section>
	)
}

export default Balance
