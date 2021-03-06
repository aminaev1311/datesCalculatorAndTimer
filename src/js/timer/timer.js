import { Howl } from 'howler';
import soundTrack from '../../assets/sounds/sound3.wav';

let timeInputEl = document.getElementById("timeInput");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let timeLeftEl = document.getElementById("timeLeft");
let timeIsOverEl = document.getElementById("timeIsOver");

let intervalId = null;

const sound = new Howl({
    // src: ['./assets/sounds/sound3.wav']
    src: [soundTrack]
});

const startHandler = (event) => {
    startBtn.disabled = true;
    timeIsOverEl.innerText = "";
    let timeSet = timeInputEl.value;
    timeLeftEl.innerText = timeSet;

    intervalId = setInterval(()=> {
        if (timeSet >= 1) {
            timeSet--;
            timeLeftEl.innerText = timeSet;
            timeIsOverEl.innerText = "";
        }
        if (timeSet === 0 ) {
            timeIsOverEl.innerText = "Time is over!!!";
            clearInterval(intervalId);
            // Play the sound.
            sound.play();
        }
    }, 1000);
}

startBtn.addEventListener('click', startHandler);

const stopHandler = (event) => {
    startBtn.disabled = false;
    clearInterval(intervalId);
    timeIsOverEl.innerHTML = `the timer was stopped. Press <i>Start</i> to resume the countdown`;
    sound.stop();
}

stopBtn.addEventListener('click', stopHandler);





