var minus=require("../minus.js");
var expect=require("chai").expect;
describe("minus test",function(){
	it("minus(1,2) should return -1",function(){
		expect(minus(1,2)).to.be.deep.equal(-1);
	});
});
