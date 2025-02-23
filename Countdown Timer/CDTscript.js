
const calcCountDown = () => {
    const targetDate = document.querySelector('.ipDate').value; // Get input date from user
    const targetTime = document.querySelector('.ipTime').value; // Get input time from user
    
    if(!targetDate || !targetTime) {
        alert("Enter both date and time");  // Notifies if both inputs aren't entered
        return;
    } else{
        
        const audio = new Audio('clock-alarm-8761.mp3'); // Load audio for alarm
        intervalId = setInterval( () => { // Start countdown interval

            const target = new Date(targetDate + 'T' + targetTime); // Initialize target date & time
            const now = new Date(); // Initialize current date & time
            let diff = target - now; // Calculates difference in milliseconds
    
            if(diff <= 0){  // If countdown is over
                audio.play();
                document.querySelector('.display').innerHTML = ` Time up! `;
                clearInterval(intervalId)
            }
            if(diff > 0){  // If countdown is still running
                let days = Math.floor(diff / (1000 * 60 * 60 * 24)); // To calculate days
                let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // To calculate hours
                let mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)); // To calculate minutes
                let sec = Math.floor(diff % (1000 * 60) / (1000)); // To calculate seconds
                document.querySelector('.display').innerHTML = `${days} Days, ${hours} Hours, ${mins} Minutes, ${sec} seconds`; // Renders the countdown
            }
        },1000) // Updates every 1 second 
    }
}

const resetCountDown = () => {
    clearInterval(intervalId); // Clear the interval
    document.querySelector('.display').innerHTML = `0 Days, 0 Hours, 0 Minutes, 0 seconds`; // Reset the display
    document.querySelector('.ipDate').value = ''; // Clear the date input
    document.querySelector('.ipTime').value = ''; // Clear the time input
};


