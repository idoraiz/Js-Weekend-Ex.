function lowestSum (arr) {

  //sorting array from small to big , so the first two values always be the lowest

  const sortedArr = arr.sort(function (a,b) {return a - b });
      return sortedArr[0] + sortedArr[1]; 
}

const arr = [19, 5 , 42 , 2 , 77];
console.log(lowestSum(arr));