// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  //cardNumber =  cardNumber.toString();

  var cardLength = cardNumber.length;
  var cardPrefix = cardNumber.slice(0,4);
  var codeOfOne = cardPrefix.charAt(0)
  var codeOfTwo = codeOfOne + cardPrefix.charAt(1);
  var codeOfThree = codeOfTwo + cardPrefix.charAt(2);

  if (codeOfTwo === "38" || codeOfTwo === "39" && cardLength === 14){
    return "Diner\'s Club"
  } else if (codeOfTwo === "34" || codeOfTwo === "37" && cardLength === 15){
    return "American Express"
  } else if (codeOfOne === '4' && [13, 16, 19].indexOf(cardLength) > -1) {
    return "Visa"
  } else if (["51", "52", "53", "54", "55"].indexOf(codeOfTwo) > -1 && cardLength === 16) {
    return "MasterCard"
  } else if(cardPrefix === "6011" || codeOfTwo === "65" || ["644", "645", "646", "647", "648", "649"].indexOf(codeOfTwo) > -1 && [16, 19].indexOf(cardLength) > -1){
    return "Discover"
  } else if (["5018", "5020", "5038", "6304"].indexOf(cardPrefix) && [12,13,14,15,16,17,18,19].indexOf(cardLength) > -1) {
    return "Maestro"
  }else {
    return "Error: card does not match Diner\'s Club, American Express, Visa, MasterCard, Discover, or Maestro"
  }



  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
