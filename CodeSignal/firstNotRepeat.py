# Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

def firstNotRepeatingCharacter(s):
    n = len(s)

    dict = {}

    ret = '_'

    retl = '_'

    for i in range(n):
        print("init", dict)
        if s[n-i-1] not in dict:
            dict[s[n-i-1]] = 1
            print("if", dict)
            retl = ret
            ret = s[n-i-1]
        else:
            dict[s[n-i-1]] +=1
            print("else", dict)
            ret = retl

    return ret

print(firstNotRepeatingCharacter("abacabad"))

def firstNotRepeatingCharacter(s):
    n = len(s)

    dict = {}

    ret = '_'

    for i in range(n):
        print("init", dict)
        if s[i] not in dict:
            dict[s[i]] = 1
            print("if", dict)
        else:
            dict[s[i]] +=1
            print("else", dict)

    for d in dict:
        if dict[d] == 1:
            return d

    return ret