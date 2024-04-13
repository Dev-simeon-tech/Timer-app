const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const circle = document.querySelector('#circle')

const circleRadius = circle.getAttribute('r');
const perimeter = 2 * circleRadius * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;
const timer = new Timer(durationInput,startButton,pauseButton,
   {
    onStart(totalDuration) {
        duration = totalDuration;

    },
    onTick(timeRemaning) {
        circle.setAttribute('stroke-dashoffset',
        (perimeter * timeRemaning)/duration - perimeter); 
        // this math equation above will return the offset value for each tick      
    
    },
    onComplete() {
        console.log('complete');
    },
   });

// console.log(t1)
