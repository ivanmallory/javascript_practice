//Push Front
//Given an array and an additional value,
//Insert this value at the beginning of the array
//Do this without using any built-in arry methods.

function pushFront(arr,val){
    for (var idx = arr.length; idx >=1; idx--){
        arr[idx] = arr[idx-1];
    }
    arr[0] = val;
    return arr;
}
pushFront([1,2,3,4], 99)

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
    console.log(arr);
    var returnVal = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx+1];
        console.log(arr);
    }
    arr.pop() //arr.length-- or arr.length-1
    return returnVal
}
popFront([1,2,3,4])

//Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr,idx,val){
    console.log(arr);
    for(var i = arr.length; i > idx; i--){
        arr[i] = arr[i-1];
        console.log(arr);
    }
    arr[idx] = val;
    return arr;
}
insertAt([1,2,3,4],2,99)

//Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr,idx){
    console.log(arr);
    var returnVal = arr[idx];
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
        console.log(arr);
    }
    arr.pop();
    return returnVal;
}
removeAt([1,2,3,4],2)

//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    for(var i = 0; i < arr.length-1; i = i + 2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        console.log(arr);
    }
    return arr;
}
swapPairs([1,2,3,4])
swapPairs([1,2,3])

//Remove Duplicates

//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDuplicates(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
removeDuplicates(["Alan", "Alan", "Alex", "Benjamin", "Bindar", "Bindar", "Cathy", "Mary", "Mary"])

// Min to Front

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

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

