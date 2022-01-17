var typed = new Typed(".typing",{
    strings: ["Designer.", "Front-End Developer.", "Student."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: -200,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 30,
});

function closeMessage(){
    document.getElementById("flash-message").style.display = "none";  // hide the message
}

//when the scroll is under 30px call a function

$(document).ready(function(){
    
    if ($(window).width() > 550) {

        $(window).scroll(function(){
            if ($(this).scrollTop() < 30){
                $('.menu').addClass('open');
                $('.social').addClass('open');
            }
            else{
                $('.menu').removeClass('open');
                $('.social').removeClass('open');
            }
        });
    }else{
        $('.menu').removeClass('open');
        $('.social').removeClass('open');
    }

    setInterval( function(){
        $('#flash-message').hide()
    },5000);

    $('.btn-menu').click(function(){
        $('.menu').toggleClass('open');
        $('.social').toggleClass('open');
        this.classList.toggle('open');
    });

    $('.menu').click(function(){
        $('.menu').removeClass('open');
        $('.social').removeClass('open');
        $('.btn-menu').removeClass('open');
    });
});    