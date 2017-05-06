# -*- coding: utf-8 -*-
"""
Created on Fri May 05 20:54:54 2017

@author: Brian

it seems that a popular interview question for entry-level or internship positions 
ask candidates string manipulation questions like palindrome tests
so I made a simple method checking if words are palindromes 
"""

word_1 = 'racecar'
word_2 = 'asDftfdSa'
word_3 = 'aRdvark'
word_4 = 'Racecar'

def wordCheck(word1):
    word1=str.lower(word1)  #word lower cased
    word_rev = word1[::-1]    
    if list(word1) == list(word_rev):
        print 'is palindrome ' 
    else:
        print 'is not palindrome'

        

wordCheck(word_1)
wordCheck(word_2)
wordCheck(word_3)
wordCheck(word_4)