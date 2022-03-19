import AddTransaction from '../AddTransaction'
import Balance from '../Balance'
import {GlobalProvider} from '../context/GlobalState'
import Header from '../Header'
import IncomeExpenses from '../IncomeExpenses'
import TransactionList from '../TransactionList'
import './App.css'
function App() {
	return (
		<GlobalProvider>
			<article className='app'>
				<Header title='Expense Tracker' />
				<Balance />
				<IncomeExpenses plus={0.0} minus={0.0} />
				<TransactionList />
				<AddTransaction />
			</article>
		</GlobalProvider>
	)
}

export default App
