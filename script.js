list =['rock','paper','scissor'];

let  star1=document.getElementById("star1");
let  star2=document.getElementById("star2");
let  star3=document.getElementById("star3");
let  star4=document.getElementById("star4");
let  star5=document.getElementById("star5");
let  star=document.querySelectorAll(".star");

let point1=document.getElementById("p-p");
let point2=document.getElementById("c-p");
let res=document.getElementById("result-tag");

let playerPoint=0;
let computerPoint=0;

let button=document.querySelectorAll(".button");
let box=document.getElementById("box");
let winner=document.getElementById("winner");
let play_again=document.getElementById("play-again");

function Game(val,comp){
    if (val==='rock' && comp==='paper'){
        computerPoint++;
        point2.innerHTML=computerPoint;
        res.innerHTML=`Computer's ${comp} Beats Your ${val}`;
        }
    else if (val==='rock' && comp==='scissor'){
        playerPoint++;
        point1.innerHTML=playerPoint;
        res.innerHTML=`Your ${val} Beats Computer's ${comp}`;
    } 
    else if (val==='paper' && comp==='rock'){
        playerPoint++;
        point1.innerHTML=playerPoint;
        res.innerHTML=`Your ${val} Beats Computer's ${comp}`;
    } 
    else if (val==='paper' && comp==='scissor'){
        computerPoint++;
        point2.innerHTML=computerPoint;
        res.innerHTML=`Computer's ${comp} Beats Your ${val}`;
    }
    else if (val==='scissor' && comp==='rock'){
        computerPoint++;
        point2.innerHTML=computerPoint;
        res.innerHTML=`Computer's ${comp} Beats Your ${val}`;
    } 
    else if (val==='scissor' && comp==='paper'){
        playerPoint++;
        point1.innerHTML=playerPoint;
        res.innerHTML=`Your ${val} Beats Computer's ${comp}`;
    } 
    else{
        res.innerHTML="DRAW";
    }

}

button.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let idx=Math.floor(Math.random()*list.length);
        let comp=list[idx];
        console.log(comp);
        const val=choice.getAttribute("id");
        
        Game(val,comp);
        if (playerPoint>computerPoint+3){
            box.style.visibility="visible";
            winner.innerHTML="YOU WON THE MATCH";
            play_again.addEventListener("click",()=>{
                reset();
            })
        }
        else if(computerPoint>playerPoint+3){
            box.style.visibility="visible";
            winner.innerHTML="COMPUTER WON THE MATCH";
            play_again.addEventListener("click",()=>{
                reset();
            })
        }
    })
});


let stars=[star1,star2,star3,star4,star5];

function starEnter(n){
    for (let i=0;i<n;i++){
        star[i].style.color="Yellow";
    }
}

function starLeave(n){
    for (let i=0;i<n;i++){
        star[i].style.color="rgb(73, 71, 71)";
    }
}

function starClick(n) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.color = i < n ? "Yellow" : "rgb(73, 71, 71)";
  }
}

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseenter", () => {
    starEnter(i + 1);
  });

  stars[i].addEventListener("mouseleave", () => {
    starLeave(i + 1);
  });

}


// star1.addEventListener("mouseenter",()=>{
//     starEnter(1);
// })
// star1.addEventListener("mouseleave",()=>{
//     starLeave(1);
// })

// star2.addEventListener("mouseenter",()=>{
//     starEnter(2);
// })
// star2.addEventListener("mouseleave",()=>{
//     starLeave(2);
// })

// star3.addEventListener("mouseenter",()=>{
//     starEnter(3);
// })
// star3.addEventListener("mouseleave",()=>{
//     starLeave(3);
// })

// star4.addEventListener("mouseenter",()=>{
//     starEnter(4);
// })
// star4.addEventListener("mouseleave",()=>{
//     starLeave(4);
// })

// star5.addEventListener("mouseenter",()=>{
//     starEnter(5);
// })
// star5.addEventListener("mouseleave",()=>{
//     starLeave(5);
// })

function reset(){
    point1.innerHTML=0;
    point2.innerHTML=0;
    res.innerHTML="PLAY THE GAME";
    playerPoint=0;
    computerPoint=0;
    box.style.visibility="hidden";
}