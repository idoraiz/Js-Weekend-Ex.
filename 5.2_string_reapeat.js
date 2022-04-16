const repeatStr1 = (n,str) => str.repeat(n);
  

const repeatStr = (n,str) => {
  const newStr = str;
  for (let i = 1; i<n;i++) {
    str += newStr;
  } return str;
}


 console.log(repeatStr(5,'Hello'));
 console.log(repeatStr1(7,'i'));