const timerValue = document.querySelector('.clock_value input');
const timerName = document.querySelector('.taskName_section input')
const timerOptions = document.querySelector('.timer_options');
const playButton = document.querySelector('.start img')
const pauseButton = document.querySelector('.timer_options .pause')
const circle = document.querySelector("circle");

let intervalID;
let flag = false;
let timerDuration;


const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

    ////////////////////////////////////////////////

playButton.addEventListener('click',function (){
    if(timerValue.value == false || isNaN(timerValue.value) == true || timerValue.value < 0 || timerName.value == ""){
        alert('niepoprawne dane, uzupełnij czas lub nazwę minutnika.');
    }
    else if (flag == false){
        timerDuration = timerValue.value;
        startCountdown();
    }
    else stopCountdown();
    });


pauseButton.addEventListener('click', function(){
    if(flag == true){
        pause();
    }
    else{
        return;
    }
})


    ////////////////////////////////////////////////


const timerAlgorithm = function(){  
    let value = parseInt(timerValue.value,10);
    let timerNamed = String(timerName.value).toLowerCase(); 
    if(value>0){
        value--;
        timerValue.value = value;
        console.log(timerDuration)
        console.log(circle.setAttribute("stroke-dashoffset", (perimeter * value) / timerDuration- perimeter));
          
    }
    else{
        clearInterval(intervalID);
        stopCountdown();
        alert(`Czas ${timerNamed} właśnie minął!`);
        
    } 
}


const startCountdown = function(){
    playButton.src='./images/stop-button-black-rounded-square.svg';
    intervalID = setInterval(timerAlgorithm,1000);
    flag = true;
    console.log(`dziala start ${flag}`)
}

const stopCountdown = function(){
    clearInterval(intervalID);
    playButton.src='./images/play-button-arrowhead.svg';
    console.log(`dziala stop ${flag}`)
    timerValue.value="";
    timerName.value ="";
    flag = false;
    circle.setAttribute("stroke-dashoffset", 0);
}

const pause = function(){
    clearInterval(intervalID);
    playButton.src='./images/play-button-arrowhead.svg';
    flag = false;
    console.log(`dziala pauza ${flag}`)
}
