const endDate = new Date("09 Dec, 2024 23:59:10").getTime();
const startDate = new Date().getTime();



let x = setInterval(
    function updateTimer(){
        const now= new Date().getTime();
        //time--> milliseconds
        const distanceCovered = now - startDate;
        const distancePending = endDate - now;
        
    
        //calculate days, min,hrs,secs
        // 1 day = 24 * 60 * 60 * 1000; 
    
        const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
        const hrs = Math.floor((distancePending % (24 * 60 * 60 * 1000)/(60 * 60 * 1000)));
        const mins = Math.floor((distancePending % (60 * 60 * 1000)) /(60*1000));
        const secs = Math.floor((distancePending % (60 * 1000)) / (1000));
    
    
        // populate in UI
        document.getElementById("days").innerHTML = days;
        document.getElementById("hrs").innerHTML = hrs;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("secs").innerHTML = secs;
    
        // calculate width percentage for progress bar
        const totalDistance = endDate - startDate;
    
        const percentageDistance = (distanceCovered/totalDistance)*100;
    
        // set width for progress bar
        document.getElementById("progress-bar").style.width =percentageDistance + "%"
    
    
        if(distancePending <0 ){
            clearInterval(x);
            document.getElementById("countdown").innerHTML="EXPIRED";
            document.getElementById("progress-bar").style.width="100%";
        }
    }
, 1000);