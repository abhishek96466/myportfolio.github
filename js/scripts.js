$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

var balls = document.getElementsByClassName("ball");
  document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for(var i=0;i<2;i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
  }

