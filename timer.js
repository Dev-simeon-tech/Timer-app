class Timer{
    constructor(durationInput, startButton, pauseButton,callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        
        this.startButton.addEventListener('click',this.start)
        this.pauseButton.addEventListener('click',this.pause)
    }
    start = () =>{
        if(this.onStart){
            this.onStart(this.timeRemaning);
        }
        this.tick();
        this.disableInput();
        this.startButton.setAttribute('disabled',true);
        this.times = setInterval(this.tick,50);
    }
    pause = () =>{
    
        clearInterval(this.times);  
        this.startButton.removeAttribute('disabled');
        this.enableInput();
    }
    tick = () =>{

        if(this.timeRemaning <= 0){
            // this function stops the timer when it reaches 0
            this.pause();  
            if(this.onComplete){
                this.onComplete();       
            }
        }
        else{
            // this.timeRemaning = this.timeRemaning - 1;
            this.timeRemaning = this.timeRemaning - 0.05;
            if(this.onTick){
                this.onTick(this.timeRemaning);
            }
        }
        // const timeRemaning = this.timeRemaning;
    }
    
    get timeRemaning(){
        return parseFloat(this.durationInput.value)
    }
    set timeRemaning(time){
        this.durationInput.value = time.toFixed(2);
    }
    disableInput = () =>{
        this.durationInput.setAttribute('disabled',true)
    }
    enableInput = () =>{
        this.durationInput.removeAttribute('disabled')
    }
   
}