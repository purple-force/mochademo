var add=require("../add.js");
var expect=require("chai").expect;
describe("add test",function(){
	it("add(1,2) should return 3",function(){
		expect(add(1,2)).to.be.deep.equal(3);
	});
});
