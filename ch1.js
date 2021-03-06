// 1. Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice
// versa.

var myNumber = 42;
var myName = "Jake";
var temp = "";

console.log(myNumber);
console.log(myName);

temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myNumber);
console.log(myName);


// 2. Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (var i = -52; i < 1067; i++) {
    console.log(i);
}


// 3. Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    console.log("good morning!");
}

for (var i = 0; i < 99; i++) {
    console.log(i)
    beCheerful(i);
}

// 4. Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// iterate through -300 - 0

for (var num = -300; num <= 0; num++) {
    if (num == -3 || num == -6) {
        break
    } else if (num % 3 === 0) {
        console.log(num);
    }
}

// 5. Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

var e = 2000;

while (e < 5281) {
    console.log(e);
    e++;
}


// 6. You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?",
// else log "Just another day...."

var month = 1;
var day = 1;

for (var month = 1; month < 13; month++) {
    if (month == 10) {
        for (var day = 1; day < 32; day++) {
            if (day == 21) {
                console.log(month);
                console.log(day);
                console.log("How did you know?");
            } else {
                console.log(month);
                console.log(day);
                console.log("Just another day...");
            }
        }
    }

    // for (var day = 1; day < 31; day++) {
    // console.log(day) {
    //     if (month == 10 && day == 21) {
    //         console.log("How did you know?");
    //     } else {
    //         console.log("Just another day...");
    //     }
    // }
}

// 7. Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is
// a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.


// 8. Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.


// 9. Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.


// 10. Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".


// 11. What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.


// 12. Whoa, That Sucker’s Huge...
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?


// 13. Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.


// 14. Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult
// from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).


// 15. The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
// essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
// print the multiples of param1, starting at param2 and extending to param3. One exception: if a
// multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9),
// print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).