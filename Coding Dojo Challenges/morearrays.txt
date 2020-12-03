function resetNegatives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}
resetNegatives([1,2,-1,-3])

function moveForward(arr){
    for(var i=0; i<arr.length-1; i++){
            arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
    return arr;
}
moveForward([1,2,3]);

function returnReversed(arr){
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-(1+i)];
        arr[arr.length-(1+i)] = temp;
    }
    console.log(arr);
    return arr;
}
returnReversed([1,2,3])

function repeatTwice(arr){
    var newarr=[];
    for(var i=0; i<arr.length; i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    arr = newarr;
    console.log(arr);
    return arr;
}
repeatTwice([4,"Ulysses",42,"False"]);
