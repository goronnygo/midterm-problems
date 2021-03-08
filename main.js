function isEvenlyDivisible(num1,num2) {
  if (num1 % num2 === 0){
    return true;
  }else return false;
}

function halfSquare(num) {
  let value = 0;
  value = num ** 2 / 1/2;
    return value;
}

function isLong(str) {
  if (str.length >= 15){
    return true;
  }if (str.length < 15)
    return false;
}

function exclaim(str) {
  if (str.length-1 !== '!')
  return str + '!';
  if (str.length-1 === '!')
  return str;
}

function countWords(str) {
  let total = 0;
  for (let i = 0; i < countWords.length; i++)
    if (str(i) === " ") {
      total = +1;
  }return totalSoFar;
}

function containsDigit(num) {
  digit = 0;
  for (i = 0; i < str.length; i++){
    if (str[i] === 0
      || str [i] === 1
      || str [i] === 2
      || str [i] === 3
      || str [i] === 4
      || str [i] === 5
      || str [i] === 6
      || str [i] === 7
      || str [i] === 8
      || str [i] === 9){
      digit += 1;
    }
  } if (digit < 1){
    return false;
  } else {
    return true;
  }
}


function containsLowerCase(str) {
  if (str.toLowerCase === str){
    return true;
  }else {
    return false;
  }
}

function containsUpperCase(str) {
  if (str.toUpperCase === str){
    return true;
  }else {
    return false;
  }
}

function containsNonAlphanumeric() {
}

function containsSpace(str) {
  if (str === ' '|| str === '  ' || str === '   '){
    return true;
  }
}

function digits() {
}

function truncate() {
}

function isValidPassword(str) {
  if (str.toUpperCase() === str 
  && str.toLowerCase() === str 
  && str.isNaN() === str 
  && str.containsNonAlphanumeric()=== str
  && str.containsNoSpace() === str){
    return true;
  }else{
    return false;
  }
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}