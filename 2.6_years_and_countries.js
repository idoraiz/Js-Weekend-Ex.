function centuryFromYear (year) {
  
  if (year % 10 >= 1 && year % 10 <= 9) {
    year /= 100;
    let century = (Math.round(year+1));
    return century;
  }
  else return year/100;
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));