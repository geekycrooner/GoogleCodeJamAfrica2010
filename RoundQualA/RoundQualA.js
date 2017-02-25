"use strict";

var fs = require('fs');

// global namespace
var RQA = RQA || {};

// app object
RQA.RoundQualA = function () {
  this.cases = [];
};

// case object
RQA.Case = function (credit, numberOfItems, prices) {
  this.credit = Number(credit);
  this.numberOfItems = Number(numberOfItems); 
  this.prices = prices;
}

// for each of the prices, see if the sum of it and the other prices matches the credit amount
RQA.Case.prototype.getItemsThatAddUpToCredit = function() {
  var index1, index2, price1, price2, solved = false;
  for (var i = 0; i < this.prices.length; i++) {
    price1 = this.prices[i];
    if (price1 > this.credit) continue;
    for (var j = 0; j < this.prices.length; j++) {
      if (j === i) continue;
      price2 = this.prices[j];
      if (price2 > this.credit) continue;
      if (price1 + price2 === this.credit) {
        solved = true;
        break;
      } 
    }
    if (solved) break;
  }
  return [i + 1, j + 1].sort((a, b) => {return a - b;});
}

RQA.RoundQualA.prototype.processInput = function (input) {
  // get number of cases; todo: use to validate input?
  var numberOfCases = input[0];
  // for each three lines of input, create a case and add it to the object's cases array
  for (var index = 1; index < input.length; index += 3) {
    var priceArray = input[index+2].split(' ');
    priceArray = priceArray.map(function(element) {
      return Number(element);
    }, this);
    var newCase = new RQA.Case(input[index], input[index + 1], priceArray);
    this.cases.push(newCase);
  };
};

module.exports = RQA;

 // get input file as a string
 var rawInput = fs.readFileSync('./A-large-practice.in', { encoding: 'utf8' });
//  var inputArray = rawInput.split('\r\n');
 var inputArray = rawInput.split('\n');

 // initialize the object
 var rqa = new RQA.RoundQualA();

 rqa.processInput(inputArray);

 // display the output
 rqa.cases.forEach(function(v, i, a) {
   console.log(`Case #${i + 1}: ${v.getItemsThatAddUpToCredit().join(" ")}`);
 });