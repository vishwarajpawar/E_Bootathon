This folder has 
### Aim
WAP to print Armstrong Numbers from 1 to 100
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
At last we need a for loop which will gives us number 1 

<img src="https://github.com/patil-poojap/Techie-Tribe/blob/master/experiment/images/ss4.svg"/>


### Procedure
Experiment 1:
1.	Click on Stimulate to start the stimulation of explanation of code.
2.	Click Next to get a step by step execution of code.
3.	You can click on Add 10 to no which will take jump to +10th number.
4.	Every time you click on Add 10 to no. it will take jump to number+10th number.
### Pre Test
Q 1.	What will be the output of the following C code?<br>
    #include <stdio.h><br>
    int main()<br>
    {<br>
        int i = 5;<br>
        i = i / 3;<br>
        printf("%d\n", i);<br>
        return 0;<br>
    }<br>
a) Implementation defined &emsp;&emsp;                    b) 1<br>
c) 3 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                 d) Compile time error <br>
Answer : b<br>
<br>
Q 2.	What will be the output of the following C code?<br>
#include <stdio.h><br>
    int main()<br>
    {<br>
        while ()<br>
            printf("In while loop ");<br>
        printf("After loop\n");<br>
    }<br>
a) In while loop after loop&emsp;&emsp;&emsp;&emsp;                              b) After loop<br>
c) Compile time error &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                       d) Infinite loop<br>

Answer: c<br>
<br>
Q 3.	How many times i value is checked in the following C code?<br>
#include <stdio.h><br>
    int main()<br>
    {<br>
        int i = 0;<br>
        do {<br>
            i++;<br>
            printf("in while loop\n");<br>
        } while (i < 3);<br>
    }<br>

a) 2  &emsp;&emsp;&emsp;&emsp;                   b) 3<br>
c) 4  &emsp;&emsp;&emsp;&emsp;                    d) 1<br>

Answer: b<br>
<br>
Q 4.	The C code ‘for(;;)’ represents an infinite loop. It can be terminated by ___________<br>

a) break  &emsp;&emsp;&emsp;&emsp;                                   b) exit(0)<br>
c) abort()  &emsp;&emsp;&emsp;&emsp;                                 d) terminate<br>

Answer: a<br>
<br>
Q 5.	What will be the output of the following C code?<br>

#include <stdio.h><br>
    void main()<br>
    {<br>
        double k = 0;<br>
        for (k = 0.0; k < 3.0; k++);<br>
            printf("%lf", k);<br>
    }<br>

a) 2.000000&emsp;&emsp;&emsp;&emsp;                                            b) 4.000000<br>
c) 3.000000&emsp;&emsp;&emsp;&emsp;                                            d) Run time error<br>

Answer: c<br>
<br>


### Post Test
Q 1. Verify whether 1634 is Armstrong number?<br>
<br>
Q 2. Write a pseudo code to find Armstrong numbers between 101 to 500?<br>
<br>
Q 3. Which of the following is Armstrong Number?<br>
<b>a.153<br></b>
b. 121<br>
c. 119<br>
d. 1234<br>

### References
<ol>
<li> <a href="https://en.wikipedia.org/wiki/Narcissistic_number">Narcissistic number Wiki</a> </li>
<li> <a href="https://mathworld.wolfram.com/NarcissisticNumber.html">Wolfram mathworld</a> </li>
<li> <a href="https://www.geeksforgeeks.org/c-programming-language/">C Programming Language</a> </li>
</ol>
