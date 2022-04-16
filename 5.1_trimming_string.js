//first way
function trim (str) {
 str = str.split('');
 str.shift();
 str.pop();
 str = str.join('');
  return str;
}
//second way
// const stringTrim = (str) => str.slice(1,str.length-1);

console.log(stringTrim('Test'));
console.log(trim('Hello there'));
console.log(trim('Ham'));
console.log(trim('Hi, how are you?'));