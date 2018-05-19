
/**
we define an anagram to be a word whose characters can be rearranged to create another word. given two strings,
we want to know the minimum number of characters in either string that we must modify to make the two strings anagrams.
if it's not possible to make the two strings anagrams, we consider this number to be -1.

e.g. 
    'tea' and 'ate' are anagrams, so we would need to modify 0 characters.
    'tea' and 'toe' are not anagrams, but we can modify 1 character in either string (0 - a or a - o) to make them aanagrams.
    'act' and 'acts' are not anagrams and cannot be converted to anagrams because they contain different numbers of characters
    

**/



function getMinimumDifference(a, b) {
    const output=[];
    for(let i = 0; i<a.length; i++){    //a and b should be equal length
        if(a[i].length !== b[i].length){
            output.push(-1);
        }else if(a[i].split('').sort().join('') === b[i].split('').sort().join('')){
            output.push(0);
        }else{
            let letterLength = a[i].length;
            let lettersA = {};
            let lettersB = {};
            for(let k = 0; k<letterLength; k++){
                if(!lettersA[a[i][k]]){
                    lettersA[a[i][k]] = 1;
                }else{
                    lettersA[a[i][k]]++;
                }
                if(!lettersB[b[i][k]]){
                    lettersB[b[i][k]] = 1;
                }else{
                    lettersB[b[i][k]]++;
                }
            }
            for(let letter in lettersA){
                if(lettersA[letter] === lettersB[letter]){
                    letterLength -= lettersA[letter];
                }else if(lettersA[letter] && lettersB[letter]){
                    if(lettersA[letter] > lettersB[letter]){
                        letterLength -= lettersB[letter];
                    }else{
                        letterLength -= lettersA[letter];
                    }
                }
            }
            output.push(letterLength);
        }
    }
    return output;
}