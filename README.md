# _My Neighbor_

#### By _**Noah Akinson**_

#### _A program that will output "Beep!", "Boop!", and "Won't you be my neighbor?" at various intervals up to the number user inputs_

https://github.com/NoahJpg/Portfolio.git

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_A web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with some substitutions made within the returned list:_

## Setup/Installation Requirements

* _Clone the file to your desktop_
* _unzip folder to desktop_
* _open 'my-neighbor' folder_
* _double click on file 'index.html'_
* _this should open your default browser and run the webpage_

_if the page does not work, instead, right click index.html, select "Open with" and choose Google Chrome browser to run the file_

## Known Bugs

* _There are no known bugs at this time_


If you have any issues running this HTML site, then I have failed on a massive level. Please reach out to me at noahatkinson1.1@gmail.com or feel free to edit the code yourself if you feel so inclined.

## MIT License

Copyright (c) [2023] [Noah Atkinson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

Describe: splitIntoArray()

Test: "It should split numbers into an array"
Code: returnArray(543);
Expected Output: [5, 4, 3]

Describe: addNumsBelowInput()

Test: "It should return all numbers below input number, ending with input num"
Code: addNumsBelowInput(5);
Expected Output: [0, 1, 2, 3, 4, 5]


Describe: replaceOnesWithBeep()

Test: "it should numbers of any length containing 1 with 'Beep!' "
Code: replaceOnesWithBeep(1004)
Expected Output: "Beep!"


Describe: replaceTwosWithBoop()

Test: "it should numbers of any length containing 2 with 'Boop!' "
Code: replaceTwosWithBeep(3332)
Expected Output: "Boop!"

Describe: replaceThreesWithNeighbor()

Test: "it should numbers of any length containing 3 with 'Won't you be my neighbor?' "
Code: replaceThreesWithNeighbor(453)
Expected Output: "Won't you be my neighbor?"

Describe: myNeighbor()

Test: "it should reorganize separate replace functions into one to apply branching"
Code: myNeighbor(123)
Expected Output: "Won't you be my neighbor?"


Describe: splitIntoArray()

Test: "It should put numbers into an array"
Code: returnArray(543);
Expected Output: [543]


Describe: addNumsBelowInput()

Test: "It should put numbers below the input number into an array"
Code: addNumsBelowInput(9)
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Test: "It should include numbers with multiple digits"
Code: addNumsBelowInput(11)
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
FAIL

Describe: myNeighbor()

Test: "It should turn the input numbers into strings"
Code: myNeighbor(11)
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


Describe:  console.Log(result + " -result");

Test: "It should check that the result is being pushed to the output array"
Code: 3
Expected Output: [1, boop, 3]

Test: "It should check if outputted array will contain a 3
Test: "It should check if outputted array will contain a 3
Code: 4
Expected Output: true - result
Code: 2
Expected Output: false - result

Describe:  console.Log(result + " -result");

Test: "It should check if outputted array will contain a 3"
Code: 3
Expected Output: true - result

Describe: let number = i.toString();

Test: "It should convert later number functions to string to avoid repitition"
Code: 
Expected Output: 

Describe: outputResults()

Test: "It should store a variable that holds a blank string"
Code: let outputString = ""
Expected Output: n/a

Describe: outputResults()

Test: "It loop through the results and add each result to a string for the user to see"
Code: outputResults(5)
Expected Output: "0 Beep!Boop!Won't you be my neighbor? 4 5"









