import {Link} from 'react-router-dom'
function NotFound() {
	return (
		<div style={{marginTop: '400px'}}>
			NotFound. <Link to='/'> Return to homepage</Link>
		</div>
	)
}

export default NotFound
