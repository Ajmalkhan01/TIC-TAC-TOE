const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turnO = true;
let boxes = document.querySelectorAll(".boxes");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".winner");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn")

 
 

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide")
} 
 
 
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO) {
            box.style.color= "#b0413e";
            box.innerText = "O";
            turnO = false;
        }else {
            box.style.color= "#8098ff";
            box.innerText = "X";
            turnO = true;
        }box.disabled= true;
        checkWinner();
    });
});


const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
} 

const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.innerText = "";
    }
} 


const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
};
const checkWinner = () => {
    for(let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 !="" &&  pos2 !="" &&  pos3 !="") {
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                disableBtn();
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);