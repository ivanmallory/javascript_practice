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
