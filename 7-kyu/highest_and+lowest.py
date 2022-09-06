# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
def high_and_low(numbers):
    numbers = numbers.split()
    largest_number = int(numbers[0])
    lowest_number = int(numbers[0])
    pos = 0

    for num in numbers: 
        numbers[pos] = int(num)
        pos = pos + 1

    for num in numbers: 
        if num > largest_number: 
            largest_number = num
        if num < lowest_number: 
            lowest_number = num
 
    numbers = f"{largest_number} {lowest_number}"
    return numbers

print(high_and_low("1 3 48 30 -4 200 4893 20349 -20"))

