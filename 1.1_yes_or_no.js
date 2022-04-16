function isBool (bool) {
  typeof (bool) === "boolean" ? 
  console.log('The value you have entered is a boolean value') : console.log('This value is not a boolean value');  
  }

isBool(true);
isBool(4 < 10);
isBool(null);
isBool(undefined);