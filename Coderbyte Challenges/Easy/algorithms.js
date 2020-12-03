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