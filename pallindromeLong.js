/*
have a function that takes in a string and checks if
the content is a pallindrome or not
returns true if pallindrome
returns false if not
non alphabet characters should be ignored(e.g. punctuations)
*/

const str_p = "Madam I'm Adam"; 
const str_p2 = "A man, a plan, a canal -- Panama";
const str_p3 = "Lay a wallaby baby ball away, Al.";

const str_np = "not pallindrome";
const str_np2= "not a pall'indrome sent'";
const str_np3= "still not a pal'indrome setntenc/2";

function pallindrome(str){
  let alphaOnly = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
  for(let i=0, k=alphaOnly.length-1; i<alphaOnly.length; i++, k--){
    if(alphaOnly[i]!==alphaOnly[k]){
      return false;
    }
  }
  return true;
}

console.log(pallindrome(str_p));
console.log(pallindrome(str_p2));
console.log(pallindrome(str_p3));
console.log(pallindrome(str_np));
console.log(pallindrome(str_np2));
console.log(pallindrome(str_np3));