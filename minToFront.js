function minToFront(arr){
    for(var i = arr.length-1; i>=0; i--){
        if(arr[i] < arr[i-1]){
            temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }
    return arr;
}
minToFront([4,2,1,3,5])