jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .workshop-search, #workshop-searchForm .workshop-close").click(function(){
		$("#workshop-searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#workshop-map .workshop-sectionHeading").click(function(){
		$("#workshop-map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	/* =============== TESTIMONIAL SLIDER =============== */
	$('.workshop-testimonialSlider').unslider({
		nav: false,
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
		}
	});

	/* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#workshop-whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#workshop-header').height() || $(this).scrollTop() > $('#workshop-header').height()) {
			$('body').addClass("workshop-fixed-nav");
			$('body').css('padding-top', $('#workshop-navbar').height() + 'px');
		} else {
			$('body').removeClass("workshop-fixed-nav");
			$('body').css('padding-top', 0);
		}
	});
	
	/* =============== ISOTOP =============== */	
	$(window).load(function(){
		$portfolio = $('.workshop-portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});
	
	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.workshop-portfolioItems > li').each( function() { $(this).hoverdir(); } );
	
	/* =============== PERTTYPHOTO =============== */
	$("a.workshop-prettyPhoto").prettyPhoto();
	
	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('#workshop-navbar ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#workshop-scrollToTop').fadeIn();
		} else {
			$('#workshop-scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#workshop-scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});