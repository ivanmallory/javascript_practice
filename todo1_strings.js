function removeBlanks(string){
    wordArray = string.split(" ");
    newString = wordArray.join("");
    return newString;
}
removeBlanks("Pl ayTha tF u nkyM usi c");

function getDigits(string){
    newArr = [];
    digitArr = string.split("");
    for(var i = 0; i < digitArr.length; i++){
        if(digitArr[i] >= 0 && digitArr[i] <=9){
            newArr.push(digitArr[i]);
        }
    }
    newString = newArr.join("");
    return newString;
}
getDigits("0s1a3y5w7h9a2t4?6!8?0");

function returnAcronym(string){
    arr = string.split(" ");
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase()
    }
    return arr.join('');
}
returnAcronym("there's no free lunch - gotta pay yer way.")

function countNonSpaces(string){
    newCount = [];
    spaceCount = string.split("");
    console.log(spaceCount.length);
    for(var i = 0; i < spaceCount.length; i++){
        if (spaceCount[i] != ' '){
            newCount.push([spaceCount[i]])
        }
    }
    return newCount.length; 
}
countNonSpaces("Honey pie, you are driving me crazy")

function removeShorterStrings(arr, val){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > val){
            newArr.push(arr[i]);
        }
    }
    arr = newArr;
    return arr;
}
removeShorterStrings(["mango", "banana", "apple", "pineapple", "kiwi"], 5)