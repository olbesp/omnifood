$(document).ready(function(){

	// Mobile menu

	$(".menu-icon").click(function() {
		var menu = $(".menu");
		menu.slideToggle(400);
		// Change icon
		var icon = $(".menu-icon i");
		if (icon.hasClass("fa-bars")) {
			icon.removeClass("fa-bars");
			icon.addClass("fa-times");
		} else {
			icon.removeClass("fa-times");
			icon.addClass("fa-bars");
		}
	});

// ----------------------------------------------------------------
	// Header buttons scroll

	  $("#watch-price").click(function() {
	    $("html, body").animate({scrollTop: $("#sign-up").offset().top}, 1000);
	  });

	  $("#watch-about").click(function() {
	    $("html, body").animate({scrollTop: $("#about").offset().top}, 800);
	  });

// ----------------------------------------------------------------
	// Fixed nav

	  $("#about").waypoint(function(direction) {
	    if (direction == "down") {
	      $("nav").addClass("fixed-nav");
	    } else {
	      $("nav").removeClass("fixed-nav");
	    }
	  }, {
	    offset: '70px;'
	  });

// -------------------------------------------------------------
	// Navigation scroll

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

// -------------------------------------------------------------

	// Animations

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
    offset: "70%"
  });

  $(".iphone-img").waypoint(function(direction) {
    $(".iphone-img").addClass("animated fadeInUp");
  }, {
    offset: "50%"
  });

  $(".city").waypoint(function(direction) {
    $(".city").addClass("animated fadeIn");
  }, {
    offset: "70%"
  });

  $(".price-plan:first-of-type").waypoint(function(direction) {
    $(".price-plan:first-of-type").addClass("animated pulse");
  }, {
    offset: "50%"
  });

	$(".sign-up-btn").waypoint(function(direction) {
		$(".sign-up-btn").addClass("animated bounceIn");
	}, {
		offset: "80%"
	});
});
