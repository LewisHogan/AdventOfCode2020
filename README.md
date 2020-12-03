# Advent of Code 2020

## Day One

### Part One

The first task of day one was to find two numbers in a list which when summed together equaled 2020.

Once these numbers were identified, the solution to the puzzle would be the product of these two.

### Part Two

The second task of day one was identical to the first but with one caveat: instead of two numbers to search for, the result was a combination of three numbers.

## Day Two

### Part One

The first task of day two is to count the number of valid passwords within the list of records.

A password is valid if it contains at least n instances of a specified character, and at most m instances (n and m are defined within the record).

### Part Two

The second task of day two remains the same as the first, but has uses different validation criteria.

A password is valid if it contains a character at either index m or n (indices are 1 based instead of 0 based).

## Day Three

Day Three involves finding the number of times we land on a space with a tree when moving in a fixed pattern.

### Part One

Part one involves solving the above problem by stepping with a slope of 3 on the right and 1 down.

### Part Two

Part two involves solving the same problem as in part one, but requires counting multiple slopes:

- Right 1, down 1.
- Right 3, down 1. (checked in part one)
- Right 5, down 1.
- Right 7, down 1.
- Right 1, down 2.

The results of all these slopes is then multiplied together.