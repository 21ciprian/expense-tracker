import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import React from 'react'
import {Doughnut} from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)
interface Amounts {
	amounts: number[]
	// amount:number
}
function DoughnutChart({amounts}: Amounts): JSX.Element {
	const dataset = {
		labels: ['Income', 'Expense'],
		datasets: [
			{
				label: 'AMounts',
				data: [
					// 40, -20,
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
		<div>
			{' '}
			<Doughnut data={dataset} />
		</div>
	)
}

export default DoughnutChart
