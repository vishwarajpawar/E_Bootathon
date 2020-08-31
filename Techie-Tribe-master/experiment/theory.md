### Theory
An n-digit number that is the sum of the nth powers of its digits is called an n-narcissistic number. It is also known as an Armstrong number. The smallest example of a narcissistic number other than the trivial 1-digit numbers is:
153 = 1³ + 5³ + 3³
The first few are given by 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748, ...
Solving the problem of finding the Armstrong numbers from 1 to 100 we are going to C Programming Language. In the C program we are printing the Armstrong Numbers. We need a loop to find the number of digits in a number say 153, a while loop is given below: 

<img src="https://github.com/patil-poojap/Techie-Tribe/blob/master/experiment/images/ss1.PNG"/>

We get number of digits in count. Then stored in cnt (no of digits) variable. Then in order to find the Power of every digit we have to take second loop. By using re=copy%10; we will take every digit from number=153. The while loop repeats until number of digits cnt becomes 0. We will multiply digit according to power. e.g. 3*3*3 if power is 3. here mul=1 initially to avoid error of multiplication. We can use power function pow() which declared in “math.h” header file instead of writing separate while loop

<img src="https://github.com/patil-poojap/Techie-Tribe/blob/master/experiment/images/ss2.PNG"/>

Now logic to find Armstrong Number:	
We need to calculate the equation 153 = 1³ + 5³ + 3³. First while loop where it will run until copy becomes 0. copy is variable again contains number=153(assumed). mul variable contains Power of number. And ans contains answer in this this case is 153 = 1³ + 5³ + 3³. at end a conditional statement to check if answer is equal to number then number is Armstrong Number then we will print it.   

<img src="https://github.com/patil-poojap/Techie-Tribe/blob/master/experiment/images/ss3.PNG"/>

This solution in C program :
At last we need a for loop which will gives us number 1 to 100

<img src="https://github.com/patil-poojap/Techie-Tribe/blob/master/experiment/images/ss4.svg"/>

