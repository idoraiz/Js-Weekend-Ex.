function findUniq(arr) {
 
  const x = arr.filter((elm) => elm === arr[0]);
  const y = arr.filter((elm) => elm !== arr[0]);
  
  return x.length > y.length ? y[0] : x[0]
}



const arr  = [2,1,1,1,1,1];
const arr2 = [2,2,2,2,0,2];
const arr3 = [0,0,0.55,0,0];
console.log(findUniq(arr3));