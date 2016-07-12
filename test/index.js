/*global describe, it, require*/

var expect = require("chai").expect;

describe("tautology", function () {
    it("true is true", function () {
        expect(true).to.be.true;
    });

});

/*
describe("cats", function () {
    
    console.log(App)
    
  /!*  var cats = App.getCats();

    it("is array", function () {
        expect(cats).to.be.instanceOf(Array);
    });
    
    it("there are 3 cats", function () {
        expect(cats).to.have.lengthOf(3);

    });*!/
});
*/
