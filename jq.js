$(document).ready(function(){
    $(window).scroll(function(){
    $(".test").css("opacity", 1 - $(window).scrollTop() / 250);
  });
});
