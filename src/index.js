let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let dozens = ['0', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let dozens2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let first;
let second;

module.exports = function toReadable (number) {
    first = parseInt(number.toString()[0]);
    second = parseInt(number.toString()[1]);
    third = parseInt(number.toString()[2]);
    
    if(number.toString().length === 1) {
      return numbers[number];
    } else if(number.toString().length === 2 && number%10 === 0) {
      return dozens[number/10];
    } else if(number.toString().length === 2 && number<20) {
      number = parseInt(number.toString()[1]);
      return dozens2[number];
    } else if(number.toString().length === 2 && number>20) { 
      return dozens[first] + " " + numbers[second];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) <1 && parseInt(number.toString()[2]) <1) {
      return numbers[first] + ' hundred';
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) <2 && parseInt(number.toString()[1]) >=1) {
      return numbers[first] + ' hundred ' + dozens2[third];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) <1) {
      return numbers[first] + ' hundred ' + numbers[third];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) >= 2 && parseInt(number.toString()[2]) <1) {
      return numbers[first] + ' hundred ' + dozens[second];
    } else if(number.toString().length === 3 && parseInt(number.toString()[1]) >= 2) {
      return numbers[first] + ' hundred ' + dozens[second] + " " + numbers[third];
    }
  }
