function convertFromBinaryToInt (arr) {

  let binaryStr = arr.join('')
  return parseInt(binaryStr,2);
}

const binaryArr = [0,1,1,1,0,1,1,0];
console.log(convertFromBinaryToInt(binaryArr));

