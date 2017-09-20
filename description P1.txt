this is the description of the problem and the solutions i propose:


Question:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


Solution:
-----Method 1-----
1- make 2 array's which store the natural numbers of 3 and 5 below 1000.
2- add each value to the array of each respectively
3- then add all the values in each array and add the 2 arrays to eachother

-----Method 2-----
1- make a variable for each the numbers that holds the most recent value of the 3 and 5 multiples repectively
2- add this number to a recuring value that grows with each addition
3- finally add the 2 numbers from the 2 holder variables.

----Method 3-----
1-2 arrays, for multiples of 3 and 5.
2- 2 loops for the addition of all elements in the array and place the 2 array value in var holders
3- add both var holders...