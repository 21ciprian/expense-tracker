import React from 'react'
import Balance from '../Balance'
import Header from '../Header'
import './App.css'

function App() {
	return (
		<article className='app'>
			<Header title='Expense Tracker' />
			<Balance balance={50.0} />
		</article>
	)
}

export default App
