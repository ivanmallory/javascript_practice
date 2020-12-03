function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);

//Answer: 2,3, undefined

function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

//Answer: 6,10,10


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

//Answer: 3,7

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

//Answer: 15, 15, 10, 15


for(var i=0; i<15; i+=2){
    console.log(i);
 }

//Answer: 0,2,4,6,8,10,12,14

 function looping(x,y){
    for(var i=0; i<3; i++){
       for(var j=0; j<3; j++){         
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);

 //Answer: 0,0,0,0,1,2,0,2,4



 function looping(x,y){
    for(var i=0; i<3; i++){
       for(var j=0; j<5; j++){         
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);

 //Answer: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15


//Part 2



 function printUpTo(x){
    for(var i=1; i<1000000; i++){
        console.log(i)
    }
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false