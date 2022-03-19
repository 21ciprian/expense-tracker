import React from 'react'
import Balance from '../Balance'
import Header from '../Header'
import IncomeExpenses from '../IncomeExpenses'
import './App.css'

function App() {
	return (
		<article className='app'>
			<Header title='Expense Tracker' />
			<Balance balance={50.0} />
			<IncomeExpenses />
		</article>
	)
}

export default App
