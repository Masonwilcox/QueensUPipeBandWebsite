

// Nav Bar //

$(".nav-item.dropdown").hover(
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
  }
);
// End Nav Bar //


$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggle();
  });
});


// Image Slider //
// let currentSlide = 0;
// const slides = document.querySelectorAll("#slider img");
// const navBoxes = document.querySelectorAll(".nav-box");

// function goToSlide(n) {
//     slides[currentSlide].classList.remove("active");
//     navBoxes[currentSlide].classList.remove("active");

//     currentSlide = (n + slides.length) % slides.length;

//     slides[currentSlide].classList.add("active");
//     navBoxes[currentSlide].classList.add("active");
// }

// function nextSlide() {
//     goToSlide(currentSlide + 1);
// }

// function prevSlide() {
//     goToSlide(currentSlide - 1);
// }

// navBoxes.forEach((navBox, index) => {
//     navBox.addEventListener("click", () => {
//         goToSlide(index);
//     });
// });

// let slideInterval = setInterval(nextSlide,3000);

// End Image Slider //


// Course Bagpipe Section //

$(document).ready(function () {
  $("#signupForm").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var level = $("#level").val();
    if (name && email && level) {
      $.ajax({
        type: 'POST',
        url: 'index.php',
        data: {
          name: name,
          email: email,
          level: level
        },
        success: function (response) {
          alert("Thank you for signing up! We will contact you at " + email + " to confirm your " + level + " class.");
        },
        error: function () {
          alert("An error occurred. Please try again later.");
        }
      });
    } else {
      alert("Please fill out all fields before submitting the form.");
    }
  });
});



function toggleDarkLightMode() {
  let root = document.documentElement;
  let currentMode = root.style.getPropertyValue('--light-mode-color');
  if (currentMode === 'rgb(245, 245, 245)') {
    root.style.setProperty('--light-mode-color', 'rgb(51, 51, 51)');
    root.style.setProperty('--dark-mode-color', 'rgb(245, 245, 245)');
  } else {
    root.style.setProperty('--light-mode-color', 'rgb(245, 245, 245)');
    root.style.setProperty('--dark-mode-color', 'rgb(51, 51, 51)');
  }
}                                         




const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});




  // let slideIndex = 1;
  // showSlides(slideIndex);

  // // Next/previous controls
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // // Thumbnail image controls
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  // }


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function() {
  $('.read-more').click(function(e) {
    e.preventDefault();
    $('.hidden-text').toggle();
  });
});






