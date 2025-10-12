list =['rock','paper','scissor'];

let point1=document.getElementById("p-p");
let point2=document.getElementById("c-p");
let res=document.getElementById("result-tag");

let playerPoint=0;
let computerPoint=0;

let button=document.querySelectorAll(".button");

button.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let idx=Math.floor(Math.random()*list.length);
        let comp=list[idx];
        const val=choice.getAttribute("id");
        console.log("Choice was clicked",val,comp);
        
        if (val==='rock' && comp==='paper'){
        computerPoint++;
        point2.innerHTML=computerPoint;
        res.innerHTML="COMPUTER WON";
        }
        else if (val==='rock' && comp==='scissor'){
            playerPoint++;
            point1.innerHTML=playerPoint;
            res.innerHTML="YOU WON";
        } 
        else if (val==='paper' && comp==='rock'){
            playerPoint++;
            point1.innerHTML=playerPoint;
            res.innerHTML="YOU WON";
        } 
        else if (val==='paper' && comp==='scissor'){
            computerPoint++;
            point2.innerHTML=computerPoint;
            res.innerHTML="COMPUTER WON";
        } 
        else if (val==='scissor' && comp==='rock'){
            computerPoint++;
            point2.innerHTML=computerPoint;
            res.innerHTML="COMPUTER WON";
        } 
        else if (val==='scissor' && comp==='paper'){
            playerPoint++;
            point1.innerHTML=playerPoint;
            res.innerHTML="YOU WON";
        } 
        else{
            res.innerHTML="DRAW";
        }
    })
});

function reset(){
    point1.innerHTML=0;
    point2.innerHTML=0;
    res.innerHTML="PLAY THE GAME";
    playerPoint=0;
    computerPoint=0;
}