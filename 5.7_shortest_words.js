const shortestWord = (str) => {
  return str.split(' ').reduce((short, long) => long.length < short.length ? long : short).length;}

console.log(shortestWord('I am str'));