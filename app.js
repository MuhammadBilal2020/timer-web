//call inputs from html
let hoursInput = document.getElementById('hour')
let minuteInput = document.getElementById('min')
let secondsInput = document.getElementById('sec')

//call start and reset buttons from html
let startBtn = document.getElementById('start')
let resetBtn = document.getElementById('reset')

//input initial values
secondsInput.value =0 
hoursInput.value = minuteInput.value /60 
 minuteInput.value = secondsInput.value /60

// initialize interval 
 let interval ;


 //timer function
let timer = ()=>{


    //hours validations
    if(hoursInput.value > 24 ){
prompt( 'hours must be less then 25')
hoursInput.value = 0
    }


    //minutes validation
    else if(minuteInput.value > 60){
prompt(' minutes must be less then 60  ')
    }


    //seconds validation
    else if(secondsInput.value > 59){
        prompt(' seconds must be less then 60  ')
            }
  
            else{

//   empty validation          
    if(hoursInput.value ==0 && minuteInput.value ==0 && secondsInput.value == 0){
        prompt('please set time')
    }


    // timer logics
    // else{
    //     interval = setInterval(() => {
    //         secondsInput.value--
    //         if(secondsInput.value <=0){
    //             secondsInput.value =59
    //             minuteInput.value--
    //         }
    //         if(minuteInput.value <=0){
    //             minuteInput.value = 59
    //             hoursInput.value--
    //         }
                       
    //         }, 1000);
    // }

    else {
        interval = setInterval(() => {
            secondsInput.value--;
    
            if (secondsInput.value < 0) {
                secondsInput.value = 59;
                if (minuteInput.value > 0) {
                    minuteInput.value--;
                } else {
                    minuteInput.value = 59;
                    if (hoursInput.value > 0) {
                        hoursInput.value--;
                    } else {
                        // Stop the timer when all values are zero
                        clearInterval(interval);
                        secondsInput.value = 0;
                        minuteInput.value = 0;
                        hoursInput.value = 0;
                    }
                }
            }
    
        }, 1000);
    }
    

}

    
}



//start timer
startBtn.addEventListener('click', timer)




//reset timer

resetBtn.addEventListener('click' , ()=>{
    clearInterval(interval)
    hoursInput.value = 0
    minuteInput.value = 0
    secondsInput.value = 0

})




 