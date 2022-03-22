const playstopbtn = document.getElementById("play-stop-button");
const timer =document.getElementById("timer");
const numberup=document.getElementById("numberup");
const task =document.getElementById("task");
const wboard =document.getElementById("wboard");
const gorest =document.getElementById("gorest");
const reps =document.getElementById("rep");

let rep=reps.innerText;
gorest.innerText="STOPPED";
const tempo=numberup.value;
let timercount=0;
let timercount2=tempo;
let secondi=0;

// Toggles the passed button from OFF to ON and vice-versa.
function toggle() {
    if (playstopbtn.value == "OFF") {
        playstopbtn.value = "ON";
        playstopbtn.innerHTML = "Start";
        clearInterval(timercount);
        clearInterval(timercount2);
        wboard.classList.remove('verde');
        gorest.innerText="STOPPED";
        timercount = null; 
        timer.innerHTML=0;
        task.value=0;
        task.style=0;
    } 
    else {

        playstopbtn.value = "OFF";
        playstopbtn.innerHTML = "Stop";
        wboard.classList.add('verde');
        rep=1;
        starttimer();
    }
}

function starttimer(){
    
    reps.innerText=rep;
    secondi=0;
    gorest.innerText="GO";
    playstopbtn.value = "OFF";
    playstopbtn.innerHTML = "Stop";
    wboard.classList.add('verde');
    timercount = setInterval(counter, 1000);
}

function counter(){
    timer.innerHTML=secondi;
    
    task.value=(secondi/numberup.value)*100;
    task.style=(secondi/numberup.value)*100;
    //console.log(task.value);
    //console.log(secondi);
    secondi++;
    if(secondi>=numberup.value){
        clearInterval(timercount);
        timercount2 = setInterval(counterdwn, 1000);
    };
}
function counterdwn(){
    timer.innerHTML=secondi;
    gorest.innerText="REST";
    task.value=(secondi/numberup.value)*100;
    task.style=(secondi/numberup.value)*100;
    
    wboard.classList.remove('verde');
    wboard.classList.add('rosso');
    //console.log(task.value);
    //console.log(secondi);
    secondi--;
    if(secondi<0){
        clearInterval(timercount2);
        wboard.classList.remove('rosso');
        playstopbtn.value = "ON";
        playstopbtn.innerHTML = "Start";
        gorest.innerText="";
        if(rep<3){
            rep++;
            starttimer();}
        else reps.innerText=0;
    };
}
