function findNextSqure (n) {
  let isRoot = (Number.isInteger(Math.sqrt(n)));
  if(!isRoot) {
    return -1;
  } 
  else  {
    let num = Math.sqrt(n);
    num = (num+1)**2;
    if(Number.isInteger(Math.sqrt(num))){
      return num;
  }
  }
}

console.log(findNextSqure(1));
console.log(findNextSqure(4));
console.log(findNextSqure(121));
console.log(findNextSqure(144));
console.log(findNextSqure(100));

