$(window).resize(function() {
	var path = $(this);
	var contW = path.width();
	if(contW >= 751){
		document.getElementsByClassName("rightbar-toggle")[0].style.right="200px";
	}else{
		document.getElementsByClassName("rightbar-toggle")[0].style.right="-200px";
	}
});
$(document).ready(function() {
	$('.dropdown').on('show.bs.dropdown', function(e){
	    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		var elem = document.getElementById("rightbar-wrapper");
		right = window.getComputedStyle(elem,null).getPropertyValue("right");
		if(right == "200px"){
			document.getElementsByClassName("rightbar-toggle")[0].style.right="-200px";
		}
		else if(right == "-200px"){
			document.getElementsByClassName("rightbar-toggle")[0].style.right="200px";
		}
	});
});