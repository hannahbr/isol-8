var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 



$(document).ready(function () {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 100) {
        $('#navBar').css("opacity", 0);
    }
    else {
        $('#navBar').css("opacity", 1);
    }
  });

 
});


$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('ul.tabs').tabs();
});

