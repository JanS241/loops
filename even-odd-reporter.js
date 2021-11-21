// even-odd-reporter

for (let i=0; i <= 20; i++){

    isOdd = function(num) {
        const rest = num % 2 ;
        if (rest === 0) return 'even' ;
         else return 'odd' ; 
        };

    console.log( `Is ${i} even or odd?  Answer : ${i} is ` + isOdd(i) );    

}