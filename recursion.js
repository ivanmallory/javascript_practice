//recursion refers to a function that calls itself - a different way of looping

function forSigma(val){
    var sum = 0
    for(var i = val; i > 0; i--){
        sum += i
    }
    return sum;
}
// Recursive Sigma

// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(val, sum=0){
    if(val === 0){
        return;
    }
    return val + rSigma(val-1);
}
// 

// Recursive Factorial

// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFactorial(num){
    num = Math.floor(num);
    if(num <= 1){
        return 1;
    };
    return num * rFactorial(num-1)
};
console.log(rFactorial(6))

//Flood Fill

//Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

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