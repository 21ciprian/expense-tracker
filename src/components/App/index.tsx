import React from 'react'
import Balance from '../Balance'
import Header from '../Header'
import IncomeExpenses from '../IncomeExpenses'
import TransactionList from '../TransactionList'
import './App.css'

function App() {
	return (
		<article className='app'>
			<Header title='Expense Tracker' />
			<Balance balance={50.0} />
			<IncomeExpenses plus={0.0} minus={0.0} />
			<TransactionList />
		</article>
	)
}

export default App
