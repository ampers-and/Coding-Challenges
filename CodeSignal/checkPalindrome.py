# Given the string, check if it is a palindrome.

def checkPalindrome(inputString):
    n = len(inputString)

    for i in range(n//2):
        if inputString[i] != inputString[n-i-1]:
            return False
    
    return True