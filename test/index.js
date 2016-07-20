/*global describe, it, require*/
var expect = require("chai").expect;
//var Module = require("../dist/en/bundle");
var Module = require("../src/js/app");

describe("tautology", function () {
    it("true is true", function () {
        expect(true).to.be.true;
    });
});


describe("cats", function () {

    var cats = Module.getCats();

    it("is array", function () {
        expect(cats).to.be.instanceOf(Array);
    });
    
    it("there are 3 cats", function () {
        expect(cats).to.have.lengthOf(3);

    });
});
