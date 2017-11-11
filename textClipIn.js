$( document ).ready(function() {
				
	//Using lettering.js to split words and letters into spans
	$(".txt-animate").lettering('words').children('span').lettering();

	//setting word spaces based on text character width
	var letter = $('.txt-animate>span>span');
	$(".txt-animate>span").css({ marginRight: letter.width() / 3 });

	//text animation on load
	$.each($('.txt-animate>span>span').not('.txt-animate.scroll-animate>span>span'), function(i, el){
		setTimeout(function(){
		   $(el).css({
			'transform':"translateY(0)"
		   }, 600);
		},50 + ( i * 50 ));

	});

});
		
//text animation on scroll
var waypoint = new Waypoint({
	element: document.getElementsByClassName('scroll-animate'),
	offset: '85%',
	continuous: false,
	handler: function() {
		$.each($('.scroll-animate>span>span'), function(i, el){
			setTimeout(function(){
			   $(el).css({
				'transform':"translateY(0)"
			   }, 600);
			},75 + ( i * 75 ));
		});
	}
})