//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverseArr(arr){
    for(var i=0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
}
reverseArr([1,2,3,4])

//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

//Second: allow negative shiftBy (shift L, not R).

//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

//Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    console.log('orig array:', arr)
    console.log('offset;', shiftBy)
    var temp = 0
    if(shiftBy > 0){
        for(var i = 0; i < shiftBy; i++){
            for(var j = arr.length; j >=1; j--){
                arr[j] = arr[j-1];
            }
            temp - arr[arr.length - 1];
            arr.length = arr.length - 1;
            arr[0] = temp;
        }
    }
    else if (shiftBy < 0){
        for(var k=0; k < Math.abs(shiftBy); k++){
            temp=arr[0];
            for(var l=0; l < arr.length - 1; l++){
                arr[l] = arr[l+1];
            }
            arr[arr.length-1] = temp;
        }
    }
    return arr;
}
rotateArr([1,2,3],1)

function removeMinMax(arr, min, max){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min  || arr[i] > max){
            delete arr[i];
        }
    }
    return arr;
}
removeMinMax([1,3,5,13,8,11,20,25],5,20)

function arrConcat(arr1,arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for(var j = 0; j < arr2.length; j++){
        newArr.push(arr2[j]);
    }
    return newArr;
}
arrConcat(['a','b'], [1,2])

function returnHeight(arr){
    newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
        if(arr[i] > arr[i+1]){
            return newArr;
        }
    }
}
//returnHeight([-1,1,1,7,3])
returnHeight([-10,0,4,3,6,5])
        
