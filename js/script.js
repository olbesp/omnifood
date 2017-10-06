$(document).ready(function(){

	// Mobile menu

	$(".menu-icon").click(function(){
		$(this).toggleClass("open");
    $(".menu").slideToggle();
	});

	// Fixed navbar

	$("#about").waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("fixed-top");
    } else {
      $("nav").removeClass("fixed-top");
    }
  }, {
    offset: '70px;'
  });
});
