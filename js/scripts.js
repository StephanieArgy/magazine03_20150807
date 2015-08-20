$(document).ready(function() {

  $('.footerMenuTrigger').click(function() {
    $(".mainNav").toggleClass('off');
  });

  $('.mainNav li').click(function() {
    $(".mainNav").addClass('off');
  });

});
