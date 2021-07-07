"use strict";

let score = 0
let name = prompt("here we go Enter Your First Name Please");
name = name.toUpperCase()
//console.log("welcome", name)
alert("welcome" + "  " + name)
// Q1


    let answer1 = prompt("Do you Think I'm a fan of barcelona - Answer with YES Or NO Y/N")
    //console.log("No will be Correct / yes will be Wrong")
    answer1 = answer1.toLowerCase()
    //console.log("No will be Correct / yes will be Wrong")
    switch (answer1) {
        case 'yes':
            alert("wrong answer ")

            break;
        case 'no':
            score++;
            alert(" Correct answer")
            break;
        case 'y':

            alert("wrong answer")
            break;

        case 'n':
            alert(" Correct answer")
            score++;
            break;

        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }



// Q2 

    let answer2 = prompt("Do You Think i can do it in ASAC ? please answer with yes or no")
    //console.log("No will be wrong / yes will be correct")

    answer2 = answer2.toLowerCase()
    switch (answer2) {
        case 'yes':
            score++;
            alert("Correct answer ")
            break;
        case 'no':
            alert(" Wrong answer")
            break;
        case 'y':
            score++;
            alert("Correct answer")
            break;

        case 'n':
            alert(" Wrong answer")
            break;

        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }



// Q3 

    let answer3 = prompt("Do you think i will quit this course ? please answer with yes or no")
    //console.log("No will be Correct / yes will be Wrong")
    answer3 = answer3.toLowerCase()



    switch (answer3) {
        case 'yes':
            alert("wrong answer ")
            break;
        case 'no':
            score++;
            alert(" Correct answer")
            break;
        case 'y':
            alert("wrong answer")
            break;

        case 'n':
            score++;
            alert(" Correct answer")
            break;

        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }





// Q4 

    let answer4 = prompt("do you think i like Mansaf the most ? please answer with yes or no ")
    //console.log("No will be wrong / yes will be correct")
    answer4 = answer4.toLowerCase()

    switch (answer4) {
        case 'yes':
            score++;
            alert("Correct answer ")
            break;
        case 'no':
            alert(" Wrong answer")
            break;
        case 'y':
            score++;
            alert("Correct answer")
            break;

        case 'n':
            alert(" Wrong answer")
            break;

        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }






// Q5 


    let answer5 = prompt("Do you Think i have an american car ? please answer with yes or no ")
    //console.log("No will be Correct / yes will be Wrong") 

    answer5 = answer5.toLowerCase()
    switch (answer5) {
        case 'yes':
            alert("wrong answer ")
            break;
        case 'no':
            score++;
            alert(" Correct answer")
            break;
        case 'y':
            alert("wrong answer")
            break;

        case 'n':
            score++;
            alert(" Correct answer")
            break;

        default:
            alert("you sould answer with YES/No OR Y/N")
            ShowMessage()
            break;
    }











alert(`your Final score: ${score} /5`)
alert("Thank you for answring")







