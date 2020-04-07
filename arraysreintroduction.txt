function greaterthanY(arr,y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
        count++;
        }
    }
    console.log(count);
}
greaterthanY([1,2,3,4,5,6,7,8],3)

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i=1; i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
    sum = sum + arr[i];
}
var avg = sum/arr.length;
console.log(max);
console.log(min);
console.log(avg);
}

maxMinAvg([1,2,3,4,5]);


function replaceNegatives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}
replaceNegatives([1,2,-3,-5,5]);

function removeVals(arr){
    for (var i=0; i < arr.length; i++){
        if(arr[i] == arr[0]){
            console.log(arr[i]);
        }
        if(arr[i] == arr[arr.length-1]){
            console.log(arr[i]);
        }
        if(arr[i] == arr[arr.length-5]){
            console.log(arr[i]);
        }
    }
    console.log(arr);
}

removeVals([20,30,40,50,60,70],2,4);