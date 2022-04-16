function nb_year (p0, precent, aug, p) {
  let endOfYear = (p0 + (p0*(precent/100) + aug));
  let counter = 1;
  while (p > endOfYear) {
    endOfYear += ((endOfYear*(precent/100)) + aug);
    counter++;
  }
  return counter;
}

console.log(nb_year(1500,5,100,5000));
console.log(nb_year(1500000,2.5,10000,2000000));