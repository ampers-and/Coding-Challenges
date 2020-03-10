def is_leap(year):
    leap = False

    # Write your logic here
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                leap = True
        else:
            leap = True

    return leap


x = 1992
print(x, is_leap(x))

x = 2000
print(x, is_leap(x))

x = 2400
print(x, is_leap(x))

x = 1900
print(x, is_leap(x))

x = 1800
print(x, is_leap(x))

x = 2006
print(x, is_leap(x))

x = 1978
print(x, is_leap(x))

x = 1984
print(x, is_leap(x))
