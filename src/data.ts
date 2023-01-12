type Transaction = {
	_id: number
	text: string
	amount: number
	email: string
}

export const data: Transaction[] = [
	{_id: 1, text: 'bonus', amount: 10, email: 'some@email.com'},
	{_id: 2, text: 'bonus', amount: 50, email: 'some@email1.com'},
	{_id: 3, text: 'bonus', amount: 170, email: 'some@email2.com'},
	{_id: 4, text: 'bonus', amount: 16, email: 'some@email1.com'},
	{_id: 5, text: 'bonus', amount: 80, email: 'some@email3.com'},
	{_id: 6, text: 'bonus', amount: -20, email: 'some@email3.com'},
	{_id: 7, text: 'bonus', amount: -80, email: 'some@email3'},
	{_id: 8, text: 'bonus', amount: 16, email: 'some@email1.com'},
	{_id: 9, text: 'bonus', amount: 80, email: 'some@email3.com'},
	{_id: 10, text: 'bonus', amount: -20, email: 'some@email3.com'},
	{_id: 11, text: 'bonus', amount: -80, email: 'some@email3'},
	{_id: 12, text: 'bonus', amount: 16, email: 'some@email1.com'},
	{_id: 13, text: 'bonus', amount: 80, email: 'some@email3.com'},
	{_id: 14, text: 'bonus', amount: -20, email: 'some@email3.com'},
	{_id: 15, text: 'bonus', amount: -80, email: 'some@email3'}
]
