# Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

def firstNotRepeatingCharacter(s):
    n = len(s)

    dict = {}

    ret = '_'

    for i in range(n):
        print("init", dict)
        if s[n-i-1] not in dict:
            dict[s[n-i-1]] = 1
            print("if", dict)
        else:
            dict[s[n-i-1]] +=1
            print("else", dict)

    for d in dict:
        if d == 1:
            return d

    return ret

print(firstNotRepeatingCharacter("abacabad"))