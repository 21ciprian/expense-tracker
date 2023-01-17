import {useNavigate, useParams} from 'react-router-dom'
import {data} from '../../data'
import NotFound from '../NotFound'
function Transaction() {
	const params = useParams()
	const navigate = useNavigate()
	const {transactionId} = params
	const foundTransaction = data.find(d => d._id.toString() === transactionId)
	return (
		<div style={{marginTop: '300px'}}>
			{!foundTransaction ? (
				<NotFound />
			) : (
				<>
					<p onClick={() => navigate('/history')}>go back</p>
					<h2>Transaction Name: {foundTransaction?.text}</h2>
					<p>Id: {foundTransaction?._id}</p>
					<h3>Amount: {foundTransaction?.amount}</h3>
				</>
			)}
		</div>
	)
}

export default Transaction
