// JavaScript: A Text Adventure Game

// game variables
const start = "Welcome to JavaScript: A Text Adventure Game. Type \"start\" to start the game.";

const enter = "Please enter 1 or 2 for your answer";

const contn = "\n>> Continue";

const gameOver = "Incorrect. You lost.";

const gameWin = "You calculated the expression and (barely) coded in JavaScript! You win!";

const exit = "Thanks for playing.";


// question 1
const q1 = ("In front of you is a script written in JavaScript. The script looks to be a calculator...one that makes the user change the code to enter what they want to solve.");

//random numbers
let rnd1 = Math.floor(Math.random() * 99 + 1);
let rnd2 = Math.floor(Math.random() * 9 + 1);
let rnd3 = Math.floor(Math.random() * 9 + 1);
let rnd4 = Math.floor(Math.random() * 2 + 1);

const q1c1 = ("Your task is to calculate ((" + rnd1 + "/" + rnd2 + ") * " + rnd3 + ")^" + rnd4);

const q1c2 = ("The beginning of the code is as follows:" + 
                "\n// JavaScript Calculator" + 
                "\n\n// replace with addend/minuend/factor/dividend/base" +
                "\nlet number1 = 1;" + 
                "\n\n// replace with operator (+ - * / % ^)" +
                "\nlet operator = \"+\";" + 
                "\n\n// replace with addend/subtrahend/factor/divisor/power" +
                "\nlet number2 = 2;" + 
                "\n\n// ..." +
                "\nif (...");

const q1p = q1c1 +
            "\n\nWhat do you calculate first?" +
            "\n1: " + rnd2 + "*" + rnd3 +
            "\nOR" +
            "\n2: " + rnd1 + "/" + rnd2;


// question 2
const q2 = "You need to calculate " + rnd1 + "/" + rnd2 + " first.";

const q2p = q2 + "\n\n" + q1c2 + 
            "\n\nWhat do you set \'number1\' and \'number2\' equal to?" +
            "\n1: number1 = " + rnd1 + ", number2 = " + rnd2 +
            "\nOR" +
            "\n2: number1 = " + rnd2 + ", number2 = " + rnd1;


// question 3
const q3 = "You need to calculate " + rnd1 + "/" + rnd2 + ".";

const q3c1 = "The code so far:" + 
                "\n// replace with addend/minuend/factor/dividend/base" +
                "\nlet number1 = " + rnd1 + ";" + 
                "\n\n// replace with operator (+ - * / % ^)" +
                "\nlet operator = \"+\";" + 
                "\n\n// replace with addend/subtrahend/factor/divisor/power" +
                "\nlet number2 = " + rnd2 + ";";

const q3p = q3 + "\n\n" + q3c1 + 
            "\n\nWhat do you set 'operator\' equal to?" +
            "\n1: operator = /" +
            "\nOR" +
            "\n2: operator = ^";


// question 4
const q4 = "Now you need to run the calculator. Node.js is installed, and you have the terminal open.";

const q4p = q4 +
            "\n\nWhat do you type in the terminal?" + 
            "\n1: \'node calculator.js\'" +
            "\nOR" +
            "\n2: \'code calculator.js\'";


// question 5
const q5 = "The calculator outputs...";

const q5c1 = "Drumroll please...";

const q5c2 = "Terminal      _ [] X" +
                "\nthisislinux@notAMac:~$  node calculator.js" +
                "\n" + (rnd1/rnd2) + 
                "\nthisislinux@notAMac:~$  ";

const q5c3 = "Now you need to calculate (" + (rnd1/rnd2 + " * " + rnd3 + ")^" + rnd4);

const q5c4 = "The code so far:" + 
                "\n// replace with addend/minuend/factor/dividend/base" +
                "\nlet number1 = " + rnd1 + ";" + 
                "\n\n// replace with operator (+ - * / % ^)" +
                "\nlet operator = \"/\";" + 
                "\n\n// replace with addend/subtrahend/factor/divisor/power" +
                "\nlet number2 = " + rnd2 + ";";

const q5p = q5c3 + "\n\n" + q5c4 +
            "\n\nWhat do you replace the variables with now?" + 
            "\n1: number1 = " + (rnd1/rnd2) + ";" +
            "\n operator = " + "^" + ";" +
            "\n number2 = " + rnd4 + ";" +
            "\nOR" +
            "\n2: number1 = " + (rnd1/rnd2) + ";" +
            "\n operator = " + "*" + ";" +
            "\n number2 = " + rnd3 + ";";


// question 6
const q6 = q5;

const q6c1 = "Terminal      _ [] X" +
                "\nthisislinux@notAMac:~$  node calculator.js" +
                "\n" + ((rnd1/rnd2) * rnd3) + 
                "\nthisislinux@notAMac:~$  ";

const q6c2 = "Now you need to calculate " + ( ((rnd1/rnd2) * rnd3) + "^" + rnd4);

const q6p = q6c2 + 
            "\n\nWhat do you replace the variables with now?" + 
            "\n1: number1 = " + ((rnd1/rnd2) * rnd3) + ";" +
            "\n operator = " + "%" + ";" +
            "\n number2 = " + rnd4 + ";" +
            "\nOR" +
            "\n2: number1 = " + ((rnd1/rnd2) * rnd3) + ";" +
            "\n operator = " + "^" + ";" +
            "\n number2 = " + rnd4 + ";";


// question 7
const q7 = q5;

const q7c1 = "Terminal      _ [] X" +
                "\nthisislinux@notAMac:~$  node calculator.js" +
                "\n" + Math.pow(((rnd1/rnd2) * rnd3), rnd4) + 
                "\nthisislinux@notAMac:~$  ";

const q7c2 = "((" + rnd1 + "/" + rnd2 + ") * " + rnd3 + ")^" + rnd4 + " equals " + Math.pow(((rnd1/rnd2) * rnd3), rnd4) + ".";



// start
let userInput = prompt(start);

if (userInput == "start"){
    // question 1
    alert(q1 + contn);
    alert(q1c1 + contn);
    alert(q1c2 + contn);
    userInput = prompt(q1p);

    if (userInput == 1){ // incorrect
        alert(gameOver);
        alert(exit);
    }

    else if (userInput == 2){ // correct
        alert("Correct." + contn);

        // question 2
        userInput = prompt(q2p);

        if (userInput == 1){ // correct
            alert("Correct." + contn);

            // question 3
            userInput = prompt(q3p);

            if (userInput == 1){ // correct
                alert("Correct." + contn);

                // question 4
                userInput = prompt(q4p);

                if (userInput == 1){ // correct
                    alert("Correct." + contn);

                    // question 5
                    alert(q5 + contn);
                    alert(q5c1 + contn);
                    alert(q5c2 + contn);
                    userInput = prompt(q5p);

                    if (userInput == 1){ // incorrect
                        alert(gameOver);
                        alert(exit);
                    }
                        
                    else if (userInput == 2){ // correct
                        alert("Correct." + contn);

                        // question 6
                        alert(q6 + contn);
                        alert(q6c1 + contn);
                        userInput = prompt(q6p);

                        if (userInput == 1){ // incorrect
                            alert(gameOver);
                            alert(exit);
                        }
                            
                        else if (userInput == 2){ // correct
                            alert("Correct." + contn);

                            // game win
                            alert(q7 + contn);
                            alert(q7c1 + contn);
                            alert(gameWin + contn);
                            alert(q7c2 + contn);
                            alert(exit);
                        }
                        
                        else { // not an option
                            alert("Not an option. Answer 1 or 2.");
                            alert(exit);
                        }
                    }
                    
                    else { // not an option
                        alert("Not an option. Answer 1 or 2.");
                        alert(exit);
                    }
                }
                    
                else if (userInput == 2){ // incorrect
                    alert(gameOver);
                    alert(exit);
                }
                
                else { // not an option
                    alert("Not an option. Answer 1 or 2.");
                    alert(exit);
                }
            }
                
            else if (userInput == 2){ // incorrect
                alert(gameOver);
                alert(exit);
            }
            
            else { // not an option
                alert("Not an option. Answer 1 or 2.");
                alert(exit);
            }
        }
    
        else if (userInput == 2){ // incorrect
            alert(gameOver);
            alert(exit);
        }

        else { // not an option
            alert("Not an option. Answer 1 or 2.");
            alert(exit);
        }
    }

    else { // not an option
        alert("Not an option. Answer 1 or 2.");
        alert(exit);
    }
}
else {
    alert(exit);
}

/*

if (userInput == 1){ // incorrect
    alert(gameOver);
    alert(exit);
}
    
else if (userInput == 2){ // correct
    alert("Correct." + contn);
}

else { // not an option
    alert("Not an option. Answer 1 or 2.")
    alert(exit);
}

*/