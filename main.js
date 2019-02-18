var playfield = document.getElementById("playfield");
var target= document.getElementById("target");
var score=document.getElementById("score");
var reset=document.getElementById("reset");
var timer=document.getElementById("timer");
var notice=document.getElementById("notice");
var count=0;
var gameStart=false;
var gameFinished=false;
var startTime;
var nowTime;
var timer_id;
var topLimit=362;
var leftLimit=762;


target.addEventListener("click",function(){//First click = Game start
    if (gameStart===false){
        gameStart=true;
        startTime=new Date();
        timer_id=setInterval(goTimer,10);
    }
})

target.addEventListener("click",function(){
    if (gameFinished){
        notice.innerHTML="Please put reset button."
    }else{
        randomTop=Math.floor(Math.random()*topLimit);
        randomLeft=Math.floor(Math.random()*leftLimit);
        target.style.top=randomTop+"px";
        target.style.left=randomLeft+"px";
        count+=1;
        score.innerHTML=count;
    }
});

reset.addEventListener("click",function(){
    clearInterval(timer_id);
    score.innerHTML=0
    target.style.top="182px";
    target.style.left="382px";
    count=0;
    gameStart=false;
    gameFinished=false;
    notice.innerHTML="";
    timer.innerHTML="15.00";
    timer.style.color="black";
    timer.style.fontWeight="normal";
})

var goTimer=function(){
    nowTime=new Date();
    timePassed=(nowTime.getTime()-startTime.getTime())/1000;
    timer.innerHTML=(15-timePassed).toFixed(2);
    if (timePassed>10 && timePassed<=15){
        timer.style.color="red";
        timer.style.fontWeight="bold";
    }
    if (timePassed>15){
        clearInterval(timer_id);
        timer.innerHTML="0.00";
        gameFinished=true;
    }
}