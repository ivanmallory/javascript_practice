//Codeland Username Validation
//Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

//1. The username is between 4 and 25 characters.
//2. It must start with a letter.
//3. It can only contain letters, numbers, and the underscore character.
//4. It cannot end with an underscore character.

//If the username is valid then your program should return the string true, otherwise return the string false.
//Examples
//Input: "aa_"
//Output: false
//Input: "u__hello_world123"
//Output: true

function CodelandUsernameValidation(str) { 

    // code goes here  
    const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const valid_length = (str) => str.length >= 4 && str.length <= 25;
    return valid_reg.test(str) && valid_length(str);
  }
  // keep this function call here 
console.log(CodelandUsernameValidation(readline()));


//Longest Word
//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
//Examples
//Input: "fun&!! time"
//Output: time
//Input: "I love dogs"
//Output: love

function LongestWord(sen) { 
    // code goes here 
    sen = sen.replace(/[^a-zA-Z ]/ig,'');
    var senArr = sen.split(", ");
    var longword = senArr[0];
    for (var i = 0; i < senArr.length; i++){
        if (senArr[i].length > longword.length){
          longword = senArr[i];	
        }
    }
    return longword;
}
  // keep this function call here 
console.log(LongestWord(readline()));


//Find Intersection

//Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

//Examples
//Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//Output: 1,4,13
//Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
//Output: 1,9,10


function FindIntersection(strArr) { 
  const lists = strArr.map(str => str.split(", "));
  const firstList = lists[0];
  const secondList = lists[1];

  let matchMap = {};
  let resultArr = [];

  firstList.forEach(num => matchMap[num] = true)

  secondList.forEach(num => {
    if(matchMap[num]){
      resultArr.push(num);
    }
  })

  if(resultArr.length > 0){
    return resultArr.join(",");
  }
  return false;
}
// keep this function call here 
console.log(FindIntersection(readline()));

//Bracket Matcher

//Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

//Examples
//Input: "(coder)(byte))"
//Output: 0
//Input: "(c(oder)) b(yte)"
//Output: 1

function BracketMatcher(str){
  const stack = [];

  for(var i = 0; i < str.length; i++){
    if(str[i] === '('){
      stack.push('(');
    }
    else if(str[i] === ')'){
        if(stack.length === 0){
          return 0;
        }
        else{
          stack.pop();
        }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

//etter Capitalize

//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

//Examples
//Input: "hello world"
//Output: Hello World
//Input: "i ran there"
//Output: I Ran There

function LetterCapitalize(str) { 

  // code goes here
  var strArr = str.split('');
  for(var i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i].split('');
    strArr[i][0] = strArr[i][0].toUpperCase()
    strArr[i] = strArr[i].join('');
  }
  strArr = strArr.join('');
  return strArr; 

}
// keep this function call here 
console.log(LetterCapitalize(readline()));