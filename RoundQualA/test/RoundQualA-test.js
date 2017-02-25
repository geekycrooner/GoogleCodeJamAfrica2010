"use strict";

var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

var RQA = require('./../RoundQualA');

describe('RQA', function () {
  // turn off timeouts 
  this.timeout(0);

 // get input file as a string
 var rawInput = fs.readFileSync('./test/A-test-practice.in', { encoding: 'utf8' });
 var inputArray = rawInput.split('\r\n');

 // initialize the object
 var rqa = new RQA.RoundQualA();
 rqa.processInput(inputArray);

  it('There should be 3 cases', function () {
    expect(rqa.cases.length).to.equal(3);
  });

  it('First Case credit should be 100', function () {
    expect(rqa.cases[0].credit).to.equal(100);
  });

  it('First Case number of items should be 3', function () {
    expect(rqa.cases[0].numberOfItems).to.equal(3);
  });

  it('First Case prices should be [5, 75, 25]', function () {
    expect(rqa.cases[0].prices.toString()).to.equal([5, 75, 25].toString());
  });

  it('Case 2 credit should be 200', function () {
    expect(rqa.cases[1].credit).to.equal(200);
  });

  it('Case 2 number of items should be 7', function () {
    expect(rqa.cases[1].numberOfItems).to.equal(7);
  });

  it('Case 2 prices should be [150 24 79 50 88 345 3]', function () {
    expect(rqa.cases[1].prices.toString()).to.equal([150, 24, 79, 50, 88, 345, 3].toString());
  });

  it('Case 3 credit should be 8', function () {
    expect(rqa.cases[2].credit).to.equal(8);
  });

  it('Case 3 number of items should be 8', function () {
    expect(rqa.cases[2].numberOfItems).to.equal(8);
  });

  it('Case 3 prices should be [2 1 9 4 4 56 90 3]', function () {
    expect(rqa.cases[2].prices.toString()).to.equal([2, 1, 9, 4, 4, 56, 90, 3].toString());
  });

  it('Case 1 items that add up to correct credit value are 2 and 3', function () {
    expect(rqa.cases[0].getItemsThatAddUpToCredit().toString()).to.equal([2, 3].toString());
  });

  it('Case 2 items that add up to correct credit value are 1 and 4', function () {
    expect(rqa.cases[1].getItemsThatAddUpToCredit().toString()).to.equal([1, 4].toString());
  });

  it('Case 3 items that add up to correct credit value are 4 and 5', function () {
    expect(rqa.cases[2].getItemsThatAddUpToCredit().toString()).to.equal([4, 5].toString());
  });


});