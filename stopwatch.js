const button_hover=document.getElementsByTagName('button');
for(let i=0;i<button_hover.length;i++)
{
    button_hover[i].addEventListener('mouseover',()=>{
        button_hover[i].style.boxShadow='4px 4px black'

    });
    button_hover[i].addEventListener('mouseout',()=>{
        button_hover[i].style.boxShadow='';
    });
}

let startTime=0;
let elapsedTime=0;
let lapTime=0;
let lapCount=1;
let timerInterval;

const display=document.getElementById('displaytext');
const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const resetBtn=document.getElementById('resetBtn');
const lapBtn=document.getElementById('lapBtn');
const laptimes=document.getElementById('laptimes');

function startTimer()
{
    startTime=Date.now()-elapsedTime;
    timerInterval=setInterval(updateTimer,1000);
    startBtn.classList.add('disabled');
    stopBtn.classList.remove('disabled');
    resetBtn.classList.remove('disabled');
    lapBtn.classList.remove('disabled');
    startBtn.addEventListener('mouseover',()=>{
        startBtn.style.boxShadow="";
    });
}
function stopTimer(){
    clearInterval(timerInterval);
    startBtn.classList.remove('disabled');
    stopBtn.classList.add('disabled');
    resetBtn.classList.remove('disabled');
    lapBtn.classList.add('disabled');
    stopBtn.addEventListener('mouseover',()=>{
        stopBtn.style.boxShadow="";
    });
}
function resetTimer(){
    clearInterval(timerInterval);
    startTime=0;
    elapsedTime=0;
    lapTime=0;
    lapCount=1;
    display.textContent='00:00:00';
    laptimes.innerHTML="";
    startBtn.classList.remove('disabled');
    stopBtn.classList.add('disabled');
    resetBtn.classList.add('disabled');
    lapBtn.classList.add('disabled');
}
function lapTimer(){
    lapTime=Date.now()-startTime;
    const hours=Math.floor(lapTime/3600000).toString().padStart(2,'0');
    const minutes=Math.floor((lapTime%3600000)/60000).toString().padStart(2,'0');
    const seconds=Math.floor((lapTime%60000)/1000).toString().padStart(2,'0');
    const lapDisplay=hours+':'+minutes+':'+seconds;
    const laplistItem=document.createElement('li');
    laplistItem.textContent='Lap'+lapCount+':'+' '+lapDisplay;
    laptimes.appendChild(laplistItem);
    lapCount++;
}
function updateTimer(){
    elapsedTime=Date.now()-startTime;
    const hours=Math.floor(elapsedTime/3600000).toString().padStart(2,'0');
    const minutes=Math.floor((elapsedTime%3600000)/60000).toString().padStart(2,'0');
    const seconds=Math.floor((elapsedTime%60000)/1000).toString().padStart(2,'0');

    display.textContent=hours+':'+minutes+':'+seconds;
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);
lapBtn.addEventListener('click',lapTimer);


stopBtn.classList.add('disabled');
resetBtn.classList.add('disabled');
lapBtn.classList.add('disabled');
startBtn.addEventListener('mouseover',()=>{
    startBtn.style.boxShadow="";
});
stopBtn.addEventListener('mouseover',()=>{
    stopBtn.style.boxShadow="";
});
resetBtn.addEventListener('mouseover',()=>{
    resetBtn.style.boxShadow="";
});
lapBtn.addEventListener('mouseover',()=>{
    lapBtn.style.boxShadow="";
});
