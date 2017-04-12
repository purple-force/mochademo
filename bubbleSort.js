function bubbleSort(arr){
	var len=arr.length;
	if(len<=1){
		return arr;
	}
	var temp;
	for(var i=len;i>0;i--){
		for(var j=0;j<i;j++){
			if(arr[j]>arr[j+1]){
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	return arr;
}
module.exports=bubbleSort;