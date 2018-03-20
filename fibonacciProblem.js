/**
write a function that takes one parameter (number)
the function output should be the Fibonacci sequence
to the number of spaces set by parameter starting from
zero
e.g.
input: 12
output: 0 1 1 2 3 5 8 13 21 34 55 89

**/



function consoleFib(n){
    function fib(n){
        if(n===0||n===1){
            return 0;
        }
        if(n===2||n===3){
            return 1;
        }
        return fib(n-1)+fib(n-2);
    }
  
    let outputStr = '';
    for(i=1; i<=n; i++){
        outputStr+=fib(i)+' ';
    }
    console.log(outputStr);
}

consoleFib(12);