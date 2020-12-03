function minimumStepsToOne(num){
    function recurse(curr){
        if(curr <= 1){
            return 0;
        }
        let steps = recurse(curr-1);
        
        if(curr % 2 == 0){
            let divby2 = recurse(curr/2);
            steps = Math.min(steps, divby2);
        }
        if(curr % 3 == 0){
            let divby3 = recurse(curr/3);
            steps = Math.min(steps, divby3);
        }
        return 1+steps;
    } 
    return recurse(num);
}
console.log(minimumStepsToOne(10));

function minimumStepsToOneMemo(num){
    let cache = {};

    function recurse(curr){
        if(curr <= 1){
            return 0;
        }
        if(curr in cache){
            return cache[curr];
        }
        let steps = recurse(curr-1);
        
        if(curr % 2 == 0){
            let divby2 = recurse(curr/2);
            steps = Math.min(steps, divby2);
        }
        if(curr % 3 == 0){
            let divby3 = recurse(curr/3);
            steps = Math.min(steps, divby3);
        }
        let result = 1+steps;
        cache[curr] = result;
        return result;
    } 

    let res = recurse(n);
    return res;

}
console.log(minimumStepsToOne(10));

function minimumStepsToOneTab(num){
    //init table/array
    let tab = new Array(n+1);
    
    //apply base case to table
    tab[1] = 0;

    //loop through table filling solutions to subproblems
    for(let curr = 2; curr <= num; curr++){
        let steps = tab[curr-1];
        
        if(curr % 2 == 0){
            let divby2 = tab[curr/2];
            steps = Math.min(steps, divby2);
        }
        if(curr % 3 == 0){
            let divby3 = tab[curr/3];
            steps = Math.min(steps, divby3);
        }
        let result = 1+steps;
        tab[curr] = result;
    }
    return tab[n];

    //return value at the end of the table
}

console.log(minimumStepsToOneTab(400));