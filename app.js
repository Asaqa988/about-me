"use strict";

    let score = 0 
    let name = prompt("Welcome TO Quiz Game Enter Your First Name Please") ; 
    name = name.toUpperCase()
    //console.log("welcome", name)
    alert("welcome" + "  " + name)
// Q1
    
function question1 (){ 
    let answer1 = prompt("Do you Think I'm Noob in software Devlopment Field  Answer with YES Or NO Y/N")
    //console.log("No will be Correct / yes will be Wrong")
   answer1 = answer1.toLowerCase()

   switch (answer1) {
       case 'yes':
           alert("wrong answer ") //i have been coding for 1 year with python Django Framework =)
           
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

}
   question1() 

    // Q2 
function question2 (){
    let answer2 = prompt("Do You Think JAVASCRIPT is a cool lang")
    //console.log("No will be Correct / yes will be Wrong")
    
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

}
question2 ()

    


    
   

    // Q3 
function question3(){

    let answer3 = prompt("Do you think QA is A hard Carrer")
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

}
question3 ()



    // Q4 
function question4 (){
    let answer4 = prompt("Do you believe that we evolved from animals?")
    //console.log("No will be Correct / yes will be Wrong")
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
}
question4 ()


    // Q5

     
        let answer5 = prompt("Do you Think JAVASCRIPT is my first programming lang")
        //console.log("No will be Correct / yes will be Wrong")
        answer5 = answer5.toLowerCase()
    
    
    // Q5 

function question5 () {
    let answer5 = prompt("Do you Think JAVASCRIPT is my first programming lang")
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
        
            default:
                alert("you sould answer with YES/No OR Y/N")
                ShowMessage()
                break;
        }
    


    /**
     * !we can use If statmen also Here's the Code if you wanna switch it 
     ** if (answer === 'yes' && answer ==='y') {
     **  alert("Correct answer")
     ** } else if (answer === 'no' && answer ==='n'){
     **    alert(" Wrong answer")
     ** And it's better to use Array here and Loop through it 
    }
     */

   
//Q6
function question6 () {

    let counter = 4;
    for (let i = 0; i < 4; i++) {
        let guess = prompt("Guess a number betwen 1 to 10" + "You Have" +"  " + counter +"  "+ "Attempts");
        guess = parseInt(guess)
        if (guess === 4) {
            score++;
            alert("correct Answer")
            break; 
            
        }
        else if (guess > 4){
            alert("too High")
            counter--;
            
        }
        else if (guess<=4) {
            counter--;
            alert("Too Low")
        } 
        if(counter == 0){
    
                alert("Correct Answer is 4 ")
              
        }
    }


}
question6 ()


    
       
    
    
//Q7 
function question7 () {

    let fav = prompt("What's My fav Programming Language ")
    fav = fav.toLowerCase()
    fav = fav.toString()
    let lang =[
        'Ruby',
        'Java',
        'Python',
        'HTML',
        'JavaScript',
        'C++',
          
       ]
       let attempts = 6
       for (let i = 1; i <=attempts; i++) {
           if (fav === 'ruby' || fav == 'javascript') {
               score++;
               alert("correct Answer")
               break;
           }
           else{
               for (let j = 0; j < lang.length; j++) {
                   while (attempts!=1) {
                       if (fav === 'ruby' || fav == 'javascript') {
                           attempts = 1; 
                           score++;
                           alert("correct Answer")
                           break;
                           
                       }
                    
                       if(fav !== lang[j]){
                          attempts--;
                          alert(`Wrong answer you have ${attempts}`);
                          alert('Possible Answers : ruby, javascript')
                          fav = prompt("What's My fav Programming Language ")
                          
                          
                          
                      }
                      
                    
                   }
               
         
                   
              }    
               
              
          }
          
           }

}
question7 () 

 
    alert(`your Final score: ${score} /10`) 
    alert("Thank you for playing")
}  