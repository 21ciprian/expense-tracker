import {useAuth0} from '@auth0/auth0-react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {GlobalProvider} from '../../context/GlobalState'
import AddTransaction from '../../pages/AddTransaction'
import ExpenseHistory from '../../pages/ExpenseHistory'
import History from '../../pages/History'
import Home from '../../pages/Home'
import IncomeHistory from '../../pages/IncomeHistory'
import Login from '../../pages/Login'
import NotFound from '../../pages/NotFound'
import Transaction from '../../pages/Transaction'
import BottomNav from '../BottomNav'
import Header from '../Header'
import './App.css'

function App(): JSX.Element {
	const {isAuthenticated, isLoading} = useAuth0()
	if (isLoading) {
		return <h2>Loading...</h2>
	}
	return (
		<GlobalProvider>
			<article className='app'>
				<Router>
					{isAuthenticated ? (
						<>
							<Header title='Expense Tracker' />

							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='add-transaction' element={<AddTransaction />} />
								<Route path='history' element={<History />}></Route>
								<Route
									index
									path='history/:transactionId'
									element={<Transaction />}
								/>
								<Route path='income-history' element={<IncomeHistory />} />
								<Route path='expense-history' element={<ExpenseHistory />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
							<BottomNav />
						</>
					) : (
						<Login />
					)}
				</Router>
			</article>
		</GlobalProvider>
	)
}

export default App
