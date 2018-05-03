// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  
  var cardLength = cardNumber.length;
  var cardPrefix = cardNumber.slice(0,6);
  var codeOfOne = cardPrefix.charAt(0)
  var codeOfTwo = codeOfOne + cardPrefix.charAt(1);
  var codeOfThree = codeOfTwo + cardPrefix.charAt(2);
  var codeOfFour = codeOfThree + cardPrefix.charAt(3);

  if (codeOfTwo === "38" || codeOfTwo === "39" && cardLength === 14){
    return "Diner\'s Club"
  } else if (["4903", "4905", "4911", "4936", "6333", "6759"].indexOf(codeOfFour) > -1 || ["564182", "633110"].indexOf(cardPrefix) > -1 && [16,18,19].indexOf(cardLength) > -1) {
    return "Switch"
  } else if (codeOfTwo === "34" || codeOfTwo === "37" && cardLength === 15){
    return "American Express"
  } else if (codeOfOne === "4" && [13, 16, 19].indexOf(cardLength) > -1) {
    return "Visa"
  } else if (["51", "52", "53", "54", "55"].indexOf(codeOfTwo) > -1 && cardLength === 16) {
    return "MasterCard"
  } else if(codeOfFour === "6011" || codeOfTwo === "65" || ["644", "645", "646", "647", "648", "649"].indexOf(codeOfThree) > -1 && [16, 19].indexOf(cardLength) > -1) {
    return "Discover"
  } else if (["5018", "5020", "5038", "6304"].indexOf(codeOfFour) > -1 && [12,13,14,15,16,17,18,19].indexOf(cardLength) > -1) {
    return "Maestro"
  } else if ((Number(codeOfFour) >= 6282 && Number(codeOfFour) <= 6288)|| (Number(cardPrefix) >= 622126 && Number(cardPrefix) <= 622925) || (Number(codeOfThree) >= 624 && Number(codeOfThree) <= 626) && [16,17,18,19].indexOf(cardLength) > -1 ) {
    return "China UnionPay"
  }else {
    return "Error: card does not match Diner\'s Club, American Express, Visa, MasterCard, Discover, or Maestro"
  }
};
