var quickSort=require("../quickSort");
var expect=require("chai").expect;
describe("quickSort test",function(){
	it("empty arr sort",function(){
		expect(quickSort([])).to.be.deep.equal([]);
	});
	it("length one arr sort",function(){
		expect(quickSort([1])).to.be.deep.equal([1]);
	});
	it("not need arr sort",function(){
		expect(quickSort([1,2,3])).to.be.deep.equal([1,2,3]);
	});
	it("result same length",function(){
		expect(quickSort([2,1,4])).to.have.lengthOf(3);
	});
	it("normal arr sort",function(){
		expect(quickSort([12,42,22,45,24])).to.be.deep.equal([12,22,24,42,45]);
	});	
});