import {GlobalProvider} from '../../context/GlobalState'
import AddTransaction from '../AddTransaction'
import Balance from '../Balance'
import Header from '../Header'
import IncomeExpenses from '../IncomeExpenses'
import LoginButton from '../Login'
import TransactionList from '../TransactionList'
import './App.css'
function App(): JSX.Element {
	return (
		<GlobalProvider>
			<article className='app'>
				<LoginButton />
				<Header title='Expense Tracker' />
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTransaction />
			</article>
		</GlobalProvider>
	)
}

export default App
