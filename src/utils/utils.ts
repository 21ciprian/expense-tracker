export function numberWithCommas(number: number) {
	return Number(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
}
export function getSub(str: string) {
	return str?.split('|')[1]
}
