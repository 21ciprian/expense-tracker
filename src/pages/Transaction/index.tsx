import {useContext} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {GlobalContext} from '../../context/GlobalState'
import NotFound from '../NotFound'

function Transaction() {
	const context = useContext(GlobalContext)

	const params = useParams()
	const navigate = useNavigate()
	const {transactionId} = params
	const foundTransaction = context?.transactions?.find(
		d => d._id.toString() === transactionId
	)
	return (
		<div style={{marginTop: '300px'}}>
			{!foundTransaction ? (
				<NotFound />
			) : (
				<>
					<p onClick={() => navigate('/history')}>go back</p>
					<h2>Transaction Name: {foundTransaction?.transactionName}</h2>
					<p>Id: {foundTransaction?._id}</p>
					<h3>Amount: {foundTransaction?.amount}</h3>
				</>
			)}
		</div>
	)
}

export default Transaction
