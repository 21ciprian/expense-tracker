import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import {useContext} from 'react'
import {Doughnut} from 'react-chartjs-2'
import {GlobalContext} from '../../context/GlobalState'
import styles from './DoughnutChart.module.css'
ChartJS.register(ArcElement, Tooltip, Legend)

function DoughnutChart(): JSX.Element {
	const context = useContext(GlobalContext)
	const amounts = context?.transactions?.map(transaction => transaction.amount)

	const options = {
		plugins: {
			legend: {
				display: false
			}
		}
	}
	const dataset = {
		labels: ['Expense', 'Income'],
		plugins: {
			datalabels: {
				display: false
			}
		},
		datasets: [
			{
				data: [
					amounts
						.filter(c => c < 0)
						.map(i => i)
						.reduce((a, v) => a + v, 0),
					amounts
						.filter(c => c > 0)
						.map(i => i)
						.reduce((a, v) => a + v, 0)
				],
				backgroundColor: ['#ff638433', '#4bc0c033'],
				borderColor: ['#ff6384', '#4bc0c0']
			}
		]
	}
	return (
		<div className={styles.chart}>
			{' '}
			{!amounts.length ? (
				<p>no data</p>
			) : (
				<Doughnut data={dataset} options={options} />
			)}
		</div>
	)
}

export default DoughnutChart
