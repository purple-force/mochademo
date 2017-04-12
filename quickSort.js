function quickSort(arr){
	var len=arr.length;
	if(len<=1){
		return arr;
	}
	
	var midIndex=Math.floor(len/2);
	var midValue=arr[midIndex];
	var left=[],
		right=[];
	for(var i=0;i<len;i++){
		if(i===midIndex){
			continue;
		}
		if(arr[i]<midValue){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(midValue,quickSort(right));
}
module.exports=quickSort;
