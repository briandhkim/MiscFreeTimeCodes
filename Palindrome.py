# -*- coding: utf-8 -*-
"""
Created on Fri May 05 20:54:54 2017

@author: Brian

it seems that a popular interview question for entry-level or internship positions 
ask candidates string manipulation questions like palindrome tests
so I made a simple method checking if words are palindromes 
"""

word_1 = 'racecar'
word_2 = 'racecar'
word_3 = 'aRdvark'
word_4 = 'Racecar'

def wordCheck(word1, word2):
    if len(word1) == len(word2):
        word1 = str.lower(word1)        #both words are lower cased
        word2 = str.lower(word2)
        word_rev = reversed(word2)
        if list(word1) == list(word_rev):
            print 'is palindrome ' 
        else:
            print 'is not palindrome'
    else:
        print 'is not palindrome'
        
wordCheck(word_1, word_2)
wordCheck(word_4, word_1)
wordCheck(word_3, word_2)
wordCheck(word_3, word_4)
