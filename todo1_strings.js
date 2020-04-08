// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(string){
    wordArray = string.split(" ");
    newString = wordArray.join("");
    return newString;
}
removeBlanks("Pl ayTha tF u nkyM usi c");

// Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

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

// Acronyms

// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function returnAcronym(string){
    arr = string.split(" ");
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase()
    }
    return arr.join('');
}
returnAcronym("there's no free lunch - gotta pay yer way.")

// Count Non-Spaces

// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

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

// Remove Shorter Strings

// Given a string array and value (length), remove any strings shorter than the length from the array.

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