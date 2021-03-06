$(document).ready(function() {
	$('#fullpage').fullpage({
		parallax: true,
		parallaxKey: 'bmV0bGlmeS5jb21fOTFDY0dGeVlXeHNZWGc9U3hw',

	});

	// init Masonry
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		  // use element for option
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});

	// layout Masonry after each image loads
	$grid.imagesLoaded().progress(function() {
		$grid.masonry('layout');
	});
});

//handle netlify redirect after auth
if (window.netlifyIdentity) {
	window.netlifyIdentity.on("init", user => {
		if (!user) {
			window.netlifyIdentity.on("login", () => {
				document.location.href = "/admin/";
			});
		}
	});
}
