let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let message =document.querySelector("#message");
let Userscorew= document.querySelector("#user-score");
let compscorew= document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"] ; 
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawgame = () => {
    console.log("The game is draw ");
    message.innerText = "The game is draw !"
    message.style.backgroundColor = "gray";
   

}
const ShowWinner = (userWin,Userchoice,CompChoice)=>{
    if(userWin){
        userScore++;
        Userscorew.innerText = userScore;
        console.log(`You Won! ${Userchoice} beats ${CompChoice}`  );
        message.innerText = "You Won !"
        message.style.backgroundColor = "green";
      
    }
    else{
        compScore++;
        compscorew.innerText = compScore;
        console.log(`You Loss ${CompChoice} beats ${Userchoice}`);
        message.innerText = "You Loss !"
        message.style.backgroundColor = "red";
        
    }
}
const playgame = (Userchoice) =>{
    console.log("User choice is ",Userchoice);
    let compChoice = genCompChoice();
    console.log("Comp. choice is ",compChoice);
    if(Userchoice === compChoice){
        drawgame();
    }
    else {
        let userWin = true;
        if( Userchoice === "rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(Userchoice === "paper"){
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        ShowWinner(userWin,Userchoice,compChoice);
    }

}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice is clicked",userchoice);
        playgame(userchoice);
    });
});
