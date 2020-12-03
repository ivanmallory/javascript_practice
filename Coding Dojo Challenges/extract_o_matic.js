function extractDigits(num, digitNum){
    var separator = 1;
    if(digitNum >= 0){
        for(var i = 0; i < digitNum; i++){
            separator = separator*10;
        }
        //separator = Math.power(10, digitNum);
        //console.log(separator);

        var remainder = num % separator;
        
        num = (num-remainder)/separator;
        //console.log('num is now ', num);

        num = num % 10;
        return num;
    }
    else{
        var separator = 1;
        for(var i = 0; i > digitNum; i--){
            separator = separator*10;
        }
        num = mum*separator;
        num = num-num%1; //gets rid of remaining decimals
        num = num%10;
        return num;
    }
}

for(var i = 0; i < arr.length; i++){
    if(arr[i] < max  && arr[i] > min){
        arr = arr[i];
    }
}
return arr;


//Bubblesort 
for(var i = 0; i < arr.length-1; i++){
    for(var j = 0; j < (arr.length-i-1); j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
return arr;

//Skyline Heights

 