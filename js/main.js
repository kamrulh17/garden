
$(".search button").click(function(){
    $(".search-bar").toggleClass("open-search-bar");
});

function myFunction(x) {
  x.classList.toggle("change");
};

$(".toggler-btn").click(function(){
  $(".main-nav").toggleClass("open-nav");
});

$(document).ready(function($) {

/* ===== sticky-menu ===== */
    var windows = $(window);
    var sticky = $('.header-sticky')
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 250) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });

    $(".toggle-menu-icon").click(function(){
        $(".menu").slideToggle();
    })

});

/* ===== CounterUp ===== */
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

/* ===== mixit up activation ===== */
var mixer = mixitup(".mix-container");

/* ===== swiper slider ===== */
var swiper = new Swiper(".mySwiper", {
    autoplay: 5000,
    speed: 800,
    autoplayDisableOnInteraction: false,
    pagination: {
      el: ".swiper-pagination",
    },
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
  /* swiper slider deactivate on mouse hover and then activate again */

  $(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });


  /* ===== scroll to top ===== */
  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }