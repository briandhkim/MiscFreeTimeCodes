/**
The following code is intended to increment/decrement
A and B until A is equal to X and B is equal to Y.
Find the bugs

public static void numberFunct(a, b, x, y){
  while(a!=x&&b!=y){
    if(a>x){
      a++;
    }else{
      a--;
    }
    if(b>y){
      b++;
    }else{
      b--;
    }
  }
}
**/
/*
guess 1: may result in infinite loop since 
the if conditional may not stop for a and b at
the same time. otherwise the check would go on
indefinitely
guess 1.5: if conditionals are wrong. 
if a>x, a should decrement; not increment
guess: 1.55: function doesn't return anything?
*/


function numMatch(a, b, x, y){
    while(a!==x && b!==y){
    
      if(a!==x){
        if(a>x){
          a--;
        }else{
          a++;
        }
      }
      if(b!==y){
        if(b>y){
          b--;
        }else{
          b++;
        }
      }
    
    }
  
    console.log('complete');
}

numMatch(1,8,3,6);