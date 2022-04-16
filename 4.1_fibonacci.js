function fibo (num) {
  const arr = [1,1];
 
  for (let i=2; i < num; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr;
}

console.log(fibo(12));

