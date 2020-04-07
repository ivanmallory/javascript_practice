function removeNegatives(arr){
    for (var i=arr.length-1; i>=0; i--){
        if (arr[i]<0){
            for (var j=i; j<arr.length-1; j++){
                arr[j] = arr[j+1]
            };
            arr.pop()
        }
    };
    return arr
};
console.log(removeNegatives([-5,-3,1,4,-6,7]));

function secondToLast(arr){
    if(arr.length < 2){
        return null;
    }
    return arr[arr.length-2]
}
secondToLast([42,true,"Kate",7])

function secondToLargest(arr){
    if(arr.length < 2){
        return null
    }
    var lrg = arr[0];
    if(arr[1] > lrg){
        var second = lrg;
        lrg = arr[1];
    }
    else{
        var second = arr[i];
    };
    for(var i = 2; i < arr.length; i++){
        if(arr[i] > lrg){
            second = lrg;
            large = arr[i];
        }
        else if (arr[i] > second){
            second = arr[i];
        }
    }
    return second;
}
secondToLargest([42,1,4,Math.PI,7])

function nthToLast(arr, val){
    if(arr.length < val){
        return null
    }
    return arr[arr.length-val]
}
nthToLast([5,2,3,6,4,9,7],3)

function nthLargest(arr, num){
    if(arr.length < num){
        return null;
    }
    var check = [arr[0]];
    for (var i = 1; i < arr.length; i++){
        var idx = check.length
        while(arr[i]>check[idx-1] && idx > 0){
            check[idx] = check[idx-1];
            idx--
        }
        check[idx] = arr[i];
        if(check.length > val){
            check.pop()
        }
    }
    return check[check.length-1]
}