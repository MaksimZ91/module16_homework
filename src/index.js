 export function countDown(n) {
   let result=""
	for (let i = n; i >= 1; --i) {
  	 result+=i+" "
  } 
  return result
}


export function getPercents(percent, number) {
	return number / 100 * percent;
}