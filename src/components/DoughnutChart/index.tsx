import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import React, {useContext} from 'react'
import {Doughnut} from 'react-chartjs-2'
import {GlobalContext} from '../../context/GlobalState'
import styles from './DoughnutChart.module.css'
ChartJS.register(ArcElement, Tooltip, Legend)
// interface Amounts {
// 	amounts: number[]
// }
// {amounts}: Amounts
function DoughnutChart(): JSX.Element {
	const context = useContext(GlobalContext)
	const amounts = context?.transactions?.map(transaction => transaction.amount)
	console.log('amounts from chart: ', amounts)
	console.log('context from chart: ', context)
	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
	}
	const dataset = {
		labels: ['Income', 'Expense'],
		plugins: {
			datalabels: {
				display: false,
			},
		},
		datasets: [
			{
				// label: 'AMounts',
				data: [
					amounts
						.filter(c => c > 0)
						.map(i => i)
						.reduce((a, v) => a + v, 0),
					amounts
						.filter(c => c < 0)
						.map(i => i)
						.reduce((a, v) => a + v, 0),
				],
				backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
			},
		],
	}
	return (
		<div className={styles.chart}>
			{' '}
			<Doughnut data={dataset} options={options} />
		</div>
	)
}

export default DoughnutChart
