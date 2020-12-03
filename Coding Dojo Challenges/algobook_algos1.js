for(var i = -52; i < 1067; i++){
    console.log(i);
}

for(i = -300; i <= 0; i++){
    if(i % 3 == 0){
        if(i !== -3 && i !== -6){
            console.log(i);
        }
    }
}

var int = 2000
while(int < 5280){
    int++
    console.log(int);
}

function isItMyBirthday(num1, num2){
    let day = 11;
    let month = 29;
    
    if(num1 == day || num2 == day){
        if(num1 == month || num2 == month){
            console.log("How did you know?");
        }
    }
    else{
        console.log("Just antoher day...");
    }
}

isItMyBirthday(11, 29);
isItMyBirthday(3, 19)

function leapYear(year){
    if(year % 4 == 0){
        if(year % 100 != 0 || year % 400 == 0){
            console.log("Leap Year!")
        }
        else{
            console.log("Not a Leap Year!")
        }
    }
    else{
        console.log("Not a Leap Year!")
    }
} 
leapYear(2000)

function printCount(){
    var count = 0
    for(var i = 512; i < 4096; i++){
        if(i % 5 == 0){
            console.log(i);
            count ++
        }
    }
    console.log("There were " + count + " multiples of 5");
}
printCount();

function multiplesOfSix(){
    var i = 0;
    while(i < 60001){
        i++
        if(i % 6 == 0){
            console.log(i);
        }
    }
}
multiplesOfSix();

function codingDojo(){
    for(var i = 1; i < 101; i++){
        if(i % 5 == 0 && i % 10 != 0){
            console.log("Coding")
        }
        if(i % 10 == 0){
            console.log("Dojo")
        }
        console.log(i);
    }
}
codingDojo();

function wDYK(incoming){
    console.log(incoming)
}
wDYK("Howdy there!")

function hugeNumber(){
    var sum = 0;
    for(var i = -299999; i < 300000; i++){
        if(i % 2 == 1){
            sum += i;
        }
    }
    console.log(sum)
}
hugeNumber();

function countdownByFours(){
    var i = 2016;
    while(i > 0){
        i--
        if(i % 4 == 0){
            console.log(i);
        }
    }
}
countdownByFours();

function flexibleCountdown(lowNum, highNum, mult){
    for(var i = highNum; i > lowNum; i--){
        if(i % mult == 0){
            console.log(i);
        }
    }
}
flexibleCountdown(2,9,3);

function finalCountdown(num1, num2, num3, num4){
    while(num2 < num3){
        if(num2 % num4 != 0){
            if(num2 % num1 === 0){
                console.log(num2);
            }
        }
    num2++
    }
}
finalCountdown(3,5,17,9)

