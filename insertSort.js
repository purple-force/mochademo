function insertSort(arr){
	var len=arr.length,
		copy=arr.slice();
	if(len<=1){
		return copy;
	}
	for(var i=1;i<len;i++){
		var temp=copy[i];
		for(var j=i-1;j>=0&&copy[j]>temp;j--){
			copy[j+1]=copy[j];
		}
		copy[j+1]=temp;
	}
	return copy;
}
module.exports=insertSort;
