let numbersArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let dozensArr = ['0', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let dozensTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let first;
let second;

module.exports = function toReadable (number) {
    first = parseInt(number.toString()[0]);
    second = parseInt(number.toString()[1]);
    third = parseInt(number.toString()[2]);
    
    if(number.toString().length === 1) {
      return numbersArr[number];
    } else if(number.toString().length === 2 && number%10 === 0) {
      return dozensArr[number/10];
    } else if(number.toString().length === 2 && number<20) {
      number = parseInt(number.toString()[1]);
      return dozensTeen[number];
    } else if(number.toString().length === 2 && number>20) { 
      return dozensArr[first] + " " + numbersArr[second];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) <1 && parseInt(number.toString()[2]) <1) {
      return numbersArr[first] + ' hundred';
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) <2 && parseInt(number.toString()[1]) >=1) {
      return numbersArr[first] + ' hundred ' + dozensTeen[third];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) <1) {
      return numbersArr[first] + ' hundred ' + numbersArr[third];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) >= 2 && parseInt(number.toString()[2]) <1) {
      return numbersArr[first] + ' hundred ' + dozensArr[second];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) >= 2) {
      return numbersArr[first] + ' hundred ' + dozensArr[second] + " " + numbersArr[third];
    }
  }
