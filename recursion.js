//recursion refers to a function that calls itself - a different way of looping

function forSigma(val){
    var sum = 0
    for(var i = val; i > 0; i--){
        sum += i
    }
    return sum;
}

function rSigma(val, sum=0){
    if(val === 0){
        return;
    }
    return val + rSigma(val-1);
}

function rFactorial(num){
    num = Math.floor(num);
    if(num <= 1){
        return 1;
    };
    return num * rFactorial(num-1)
};
console.log(rFactorial(6))

function floodFill(canvas2d, startXY, newColor){
    origColor = canvas2d[startXY[1]][startXY[0]];
    fill(canvas2d, startXY[0], startXY[1], origColor, newColor)
    return canvas2d
};
function fill(canvas, x, y, origColor, newColor){
    if( x < 0 || x >= canvas.length || y < 0 || y >= canvas[0].length || canvas[y][x] != origColor){
        return false;
    };
    canvas[y][x] = newColor;
    fill(canvas, x+1, y, origColor, newColor)
    fill(canvas, x-1, y, origColor, newColor)
    fill(canvas, x, y+1, origColor, newColor)
    fill(canvas, x, y-1, origColor, newColor)
};

//binary search allows us to search specific parts of a sorted array rather than looping through the whole thing
//we start at the middle, check value against middle, search upper or lower half accordingly
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