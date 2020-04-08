// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true.

function binarySearch(sortarr, val, startIndex = 0, endIndex = sortarr.length-1){
    if(val < sortarr[startIndex] || val > sortarr[endIndex]){
        return false;
    }
    var midIndex = Math.floor((startIndex+endIndex)/2);
    if(sortarr[midIndex] == val){
        return true;
    }
    else if(sortarr[midIndex] > val){
        return binarySearch(sortarr, val, startIndex, endIndex = midIndex-1);
    }
    else{
        return binarySearch(sortarr, val, startIndex = midIndex + 1, endIndex);
    }

}

var sortedArray = [1,3,5,7,9,10,12,16]
console.log(binarySearch(sortedArray, 3));

// Greatest Common Factor

// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function greatestCommonFactor(num1, num2){
    if(num1 >= num2){
        var high = num1;
        var low = num2;
    }
    else{
        var high = num2;
        var low = num1;
    }
    if(high % low === 0){
        return low;
    }
    else{
        return greatestCommonFactor(high % low, low)
    }
};
console.log(greatestCommonFactor(20,5))
