window.onload = function() {


    // Set the date we're counting down to
    var countDownDate = new Date("Dec 24, 2023 23:59:59").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Update the timer elements
      document.getElementById("days").innerHTML = days + "d ";
      document.getElementById("hours").innerHTML = hours + "h ";
      document.getElementById("minutes").innerHTML = minutes + "m ";
      document.getElementById("seconds").innerHTML = seconds + "s ";
    
      // If the count down is finished, clear the interval and display "EXPIRED"
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
    
    
    }