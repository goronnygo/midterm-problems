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
  if (str.indexOf('!') === -1){
    return str += '!'
  }
  if (str.indexOf('!') === str.length -1){
    return str
  } else {
  return str.slice(0 ,str.indexOf('!')+1);
  }
}

function countWords(str) {
	let count = 1;
	for (i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			count += 1;
		}
	}
	return count;
}

function containsDigit(num) {
  digit = 0;
  for (i = 0; i < num.length; i++){
    if (num[i] === 0
      || num [i] === "1"
      || num [i] === "2"
      || num [i] === "3"
      || num [i] === "4"
      || num [i] === "5"
      || num [i] === "6"
      || num [i] === "7"
      || num [i] === "8"
      || num [i] === "9"){
      digit += 1;
    }
  } if (digit < 1){
    return false;
  } else {
    return true;
  }
}


function containsLowerCase(str) {
  lowerCase = 0;
  for (i = 0; i < str.length; i++){
    if (
      str [i] === "a"
      || str [i] === "b"
      || str [i] === "c"
      || str [i] === "d"
      || str [i] === "e"
      || str [i] === "f"
      || str [i] === "g"
      || str [i] === "h"
      || str [i] === "i"
      || str [i] === "j"
      || str [i] === "k"
      || str [i] === "l"
      || str [i] === "m"
      || str [i] === "n"
      || str [i] === "o"
      || str [i] === "p"
      || str [i] === "q"
      || str [i] === "r"
      || str [i] === "s"
      || str [i] === "t"
      || str [i] === "u"
      || str [i] === "v"
      || str [i] === "w"
      || str [i] === "x"
      || str [i] === "y"
      || str [i] === "z"
      ){
      lowerCase += 1;
    }
  } if (lowerCase < 1){
    return false;
  } else {
    return true;
  }
  }

function containsUpperCase(str) {
    upperCase = 0;
    for (i = 0; i < str.length; i++){
      if (
        str [i] === "A"
        || str [i] === "B"
        || str [i] === "C"
        || str [i] === "D"
        || str [i] === "E"
        || str [i] === "F"
        || str [i] === "G"
        || str [i] === "H"
        || str [i] === "I"
        || str [i] === "J"
        || str [i] === "K"
        || str [i] === "L"
        || str [i] === "M"
        || str [i] === "N"
        || str [i] === "O"
        || str [i] === "P"
        || str [i] === "Q"
        || str [i] === "R"
        || str [i] === "S"
        || str [i] === "T"
        || str [i] === "U"
        || str [i] === "V"
        || str [i] === "W"
        || str [i] === "X"
        || str [i] === "Y"
        || str [i] === "Z"
        ){
        upperCase += 1;
      }
    } if (upperCase < 1){
      return false;
    } else {
      return true;
    }
}

function containsNonAlphanumeric(str) {
  nan = 0;
  for (i = 0; i < str.length; i++){
    if (
      str [i] === "~"
      || str [i] === "`"
      || str [i] === "!"
      || str [i] === "@"
      || str [i] === "#"
      || str [i] === "$"
      || str [i] === "%"
      || str [i] === "^"
      || str [i] === "&"
      || str [i] === "*"
      || str [i] === "("
      || str [i] === ")"
      || str [i] === "-"
      || str [i] === "-"
      || str [i] === "="
      || str [i] === "+"
      || str [i] === ";"
      || str [i] === ":"
      || str [i] === "/"
      || str [i] === ","
      || str [i] === "?"
      || str [i] === " "
      || str [i] === "<"
      || str [i] === ">"
      || str [i] === "."
      || str [i] === "'"
      ){
      nan += 1;
    }
  } if (nan < 1){
    return false;
  } else {
    return true;
  }
}

function containsSpace(str) {
  return /\s/ .test(str);
}

function digits(num){
	arr = [];
	if (num < 0) {
		num *= -1;
	}
  str = num.toString();
	for (i = 0; i < str.length; i++) {
		if (str[i] !== ".") {
			arr.push(str[i] * 1);
		}
	}
  return arr;
}

function truncate(str) {
  tru = "";
  if (str.length >= 15){
    for (i = 0; i <= 7; i++){
      tru =+ str[i];
    }
      tru;
      tru += "...";
      return tru;
    }else {
      return str;
    }
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

function onlyPunchy(punch) {
  arr = []
  for (title of punch){
      if (exclaim(title).length < 15){
          arr.push(exclaim(title))
      }
  }
  return arr;
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