var insertSort=require("../insertSort");
var expect=require("chai").expect;
describe("insertSort test",function(){
	it("empty arr sort",function(){
		expect(insertSort([])).to.be.deep.equal([]);
	});
	it("length one arr sort",function(){
		expect(insertSort([1])).to.be.deep.equal([1]);
	});
	it("not need arr sort",function(){
		expect(insertSort([1,2,3])).to.be.deep.equal([1,2,3]);
	});
	it("result same length",function(){
		expect(insertSort([2,1,4])).to.have.lengthOf(3);
	});
	it("normal arr sort",function(){
		expect(insertSort([12,42,22,22,24])).to.be.deep.equal([12,22,22,24,42]);
	});	
});