import {useAuth0} from '@auth0/auth0-react'
import {GlobalProvider} from '../../context/GlobalState'
import AddTransaction from '../AddTransaction'
import Balance from '../Balance'
import Header from '../Header'
import IncomeExpenses from '../IncomeExpenses'
import LoginButton from '../Login'
import TransactionList from '../TransactionList'
import './App.css'

function App(): JSX.Element {
	const {isAuthenticated, isLoading} = useAuth0()
	if (isLoading) {
		return <h2>Loading...</h2>
	}
	return (
		<GlobalProvider>
			<article className='app'>
				{isAuthenticated ? (
					<>
						<Header title='Expense Tracker' />
						<Balance />
						<IncomeExpenses />
						<TransactionList />
						<AddTransaction />
					</>
				) : (
					<LoginButton />
				)}
			</article>
		</GlobalProvider>
	)
}

export default App
