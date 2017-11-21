$(document).ready(function () {

  $(".hamburger").click(function () {
    $(".navigation").slideToggle("slow", function () {
    });
  });


  // if ($(window).width() <= 767) {
  // $(".navigation").hide();
  // $(".hamburger").click(function () {
  //   $(".navigation").slideToggle("slow", function () {
  //   });
  // });
  // // $( ".cross" ).click(function() {
  // //   $( ".navigation" ).slideToggle( "slow", function() {
  // //     $( ".cross" ).hide();
  // //     $( ".hamburger" ).show();
  // //   });
  // // });
  // }else if ($(window).width() >= 768){
  //   $(".navigation").show();
  // }
});


