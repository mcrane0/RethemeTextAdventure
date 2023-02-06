// JavaScript: A Text Adventure Game

// game variables
const start = "Welcome to JavaScript: A Text Adventure Game. Type \"start\" to start the game.";

const enter = "Please enter 1 or 2 for your answer";

const contn = "\n>> Continue";

const gameOver = "Incorrect. You lost.";

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

        }
    
        else if (userInput == 2){ // incorrect
            alert(gameOver);
            alert(exit);
        }

        else { // not an option
            alert("Not an option. Answer 1 or 2.")
            alert(exit);
        }
    }

    else { // not an option
        alert("Not an option. Answer 1 or 2.")
        alert(exit);
    }
}
else {
    alert(exit);
}