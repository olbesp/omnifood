$(document).ready(function(){

	// Mobile menu

	$(".menu-icon").click(function(){
		$(this).toggleClass("open");
    $(".menu").slideToggle();
	});

	// Animations on scroll
	$("h1").waypoint(function(direction) {
		$("h1").addClass("animated slideInRight");
	}, {
		offset: "90%"
	});

	$(".heading .btn").waypoint(function(direction) {
		$(".heading .btn").addClass("animated bounceIn");
	}, {
		offset: "90%"
	});

  $(".feature-description").waypoint(function(direction) {
    $(".feature-description").addClass("animated fadeIn");
  }, {
    offset: '70%'
  });

  $(".iphone-img").waypoint(function(direction) {
    $(".iphone-img").addClass("animated fadeInUp");
  }, {
    offset: '50%'
  });

  $(".city").waypoint(function(direction) {
    $(".city").addClass("animated fadeIn");
  }, {
    offset: '70%'
  });

  $(".price-plan:first-of-type").waypoint(function(direction) {
    $(".price-plan:first-of-type").addClass("animated pulse");
  }, {
    offset: '50%'
  });
});
