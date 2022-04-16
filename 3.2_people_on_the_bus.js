function peopleLeftOnBus (arr) {
  let people = 0;
  arr.forEach(function (elm) {
    people += elm[0] - elm[1];
    
  });

  return people >= 0 ? people : console.log('Not Valid');

  

}

const peopleArr = [[2,0],[3,1],[4,3]];
const peopleArr2 =  [
  [10,0],
  [6,4],
  [9,2],
  [4,7],
  [1,3],
  [3,9]
];
console.log(peopleLeftOnBus(peopleArr));
console.log(peopleLeftOnBus(peopleArr2));