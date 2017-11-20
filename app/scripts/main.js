$(document).ready(function () {
  if ($(window).width() < 540) {
  $(".cross").hide();
  $(".navigation").hide();
  $(".hamburger").click(function () {
    $(".navigation").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });
  $( ".cross" ).click(function() {
    $( ".navigation" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });
  }
});


