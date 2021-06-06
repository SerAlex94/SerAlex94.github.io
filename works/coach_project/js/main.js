window.onscroll = function() {scrollFunction()};

if($(window).width() > 900)
  {
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.background = "rgba(51, 51, 51, 0.8)",
        document.getElementById("navi").style.color = "#fff";
      } else {
        document.getElementById("header").style.background = "none",
        document.getElementById("navi").style.color = "#1571c4";
      }
    }
  } else {
    $('.navi__btn').on("click", function(){
      $('.navi').addClass('active');
      $('.navi').slideToggle(400);
    });
  
    $('.navi__list').on("click", function(){
      $('.navi').removeClass('active');
      $('.navi').slideToggle(400);
    });
  }


$(document).ready(function(){
  $('.testimonials__slider').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: { arrows: false }
      }
    ]
  });















  
  /* if($(window).width() < 900)
  {
    $('.navi__btn').on("click", function(){
      $('.navi').addClass('active');
      $('.navi').slideToggle(400);
    });
  } else {
    
  } */


  

  /* $('.navi__link').on("click", function(){
    $('.navi__btn').click();
    $('.navi').slideToggle(400);
  }); */
  

 /*  $('.navi__btn').click(function(){
    $(this).toggleClass('active');
    $('.navi').slideToggle(400);
    $('.navi__list').on("click", function(){
      $('.navi__btn').removeClass('active');
    });
  }); */

  $(".request-open-popup").click(function() {
    $(".request-popup").fadeIn(300);
    $('body').css('overflow-y', 'hidden');
  });

  $(".buy-open-popup").click(function() {
    $(".buy-popup").fadeIn(300);
    $('body').css('overflow-y', 'hidden');
  });

  $(".js-close-popup").click(function() {
    $(".request-popup, .buy-popup").fadeOut(0);
    $('body').css('overflow-y', 'visible');
  });

  $(".js-scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0}, "medium");
    return false;
  });

  $(".logo__img,.contacts__logo-img").click(function() {
    $("html, body").animate({ scrollTop: 0}, "low");
    return false;
  });

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});


/* $(".js-open-request_popup").click(function() {
  $(".request_popup").fadeIn(300);
  $('body').css('overflow-y', 'hidden');
});

$(".js-close-popup").click(function() {
  $(".request_popup").fadeOut(0);
  $('body').css('overflow-y', 'visible');
}); */


