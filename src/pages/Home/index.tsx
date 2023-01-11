import DoughnutChart from '../../components/DoughnutChart'
import IncomeExpenses from '../../components/IncomeExpenses'

function Home(): JSX.Element {
	return (
		<section style={{width: '100%'}}>
			<IncomeExpenses />
			<DoughnutChart />
		</section>
	)
}

export default Home
