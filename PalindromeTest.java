package palindrome.test;


/**
 *
 * @author Brian
 * it seems that many entry-level or internship coding positions test
 * candidates on string manipulation coding like checking words for palindromes
 * this an attempt at a simple method to check such instance
 */
public class PalindromeTest {

    public static boolean isPalindrome(String word){
        String wordCheck = word.toLowerCase(); //lowercasing the word; this is not necessary if equalsIgnoreCase function is used
        String reversed="";
        for (int i = wordCheck.length()-1; i>=0; i--){
            reversed=reversed+wordCheck.charAt(i);
        }
        
        if (wordCheck.equals(reversed))
            return true;
        else
            return false;
    }
    
    public static void main(String[] args) {
        String word1 = "aarrddrraa";
        String word2 = "areasdfe";
        String word3 = "WordCheckcehcdrow";  
        
       boolean wordCheck;
       wordCheck = isPalindrome(word2);
       if (wordCheck == true)
           System.out.println("The word is a palindrome");
       else
           System.out.println("The word is not a palindrome");
       
        
    }
    
}
