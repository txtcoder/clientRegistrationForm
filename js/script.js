function validateForm() {
var name = document.forms["name"].value;
if (name==null || name =="")
{alert("Name must be filled out");
return false;
}
var email = document.forms["email"].value;
if (email==null || email =="")
{
alert("Email must be filled out");
return false;
}
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
{}
else{
alert("Email must be of the correct format");
return false;
}  
var date = document.forms["selectdate"].value;
if (date== null || date =="")
{
alert("Date must be filled out");
return false;
}
var event = document.forms["allevents"].value;
if (event == null || event == "")
{
alert("Event must be filled out");
return false;
}
var message = document.forms["message"].value;
if (message == null || message == "" || message.lenth < 2)
{
alert ("Message must be filled out");
return false;
}

}


function validateFormMobile() {
var name = document.forms2["name"].value;
if (name==null || name =="")
{alert("Name must be filled out");
return false;
}
var email = document.forms2["email"].value;
if (email==null || email =="")
{
alert("Email must be filled out");
return false;
}
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
{}
else{
alert("Email must be of the correct format");
return false;
}  
var date = document.forms2["selectdate"].value;
if (date== null || date =="")
{
alert("Date must be filled out");
return false;
}
var event = document.forms2["allevents"].value;
if (event == null || event == "")
{
alert("Event must be filled out");
return false;
}
var message = document.forms2["message"].value;
if (message == null || message == "" || message.lenth < 2)
{
alert ("Message must be filled out");
return false;
}

}


$(document).ready(function() {
	
	
	//Slider
	$("#slider").carousel({
		interval: 5000
	});
	

});

// ARROW BOUNCE EFFECT 
var num = 0.5; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.arrow-down').fadeOut('slow');
    } else {
        $('.arrow-down').fadeIn('slow');
    }
});

// Food Menu

$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('#menu_nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #menu_content';
			$('#menu_content').load(toLoad)
		}											
	});

	$('#menu_nav li a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #menu_content';
		$('#menu_content').hide('fast',loadContent);
		$('#load').remove();
		$('#menu_wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#menu_content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#menu_content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});

// Flex Slider		
jQuery(document).ready(function($){
	'use strict';
	if(jQuery('.flexslider').length) {
	 $('.flexslider').flexslider({
		animation: "slide", 
		controlNav: false,
		slideshow: true,
               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		easing: "linear",           
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
		/* prevText: '<i class="fa fa-angle-left"></i>',           //String: Set the text for the "previous" directionNav item
		nextText:  '<i class="fa fa-angle-right"></i>'              //String: Set the text for the "next" directionNav item
 	    */
	});
	};
});

// Google Map
jQuery(document).ready(function($) {
	"use strict";
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var myLatlng = new google.maps.LatLng(43.843216, -79.311962);
		var maptooltipbold = 'Crystal Fountain';
		var maptooltip = 'Crystal Fountain Event Venu Newly Renovated For 2016';
		//---------------------------------------------------------//
		var mapOptions = {
			zoom: 17,
			scrollwheel: false,
			center: myLatlng,
			styles: [{featureType:"landscape",
			stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",
			stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",
			stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",
			stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",
			stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",
			stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",
			stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",
			stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",
			stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",
			stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",
			stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
		};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = 'img/location.png';
		var content = document.createElement('div');
		content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";
		var infowindow = new google.maps.InfoWindow({
		 content: content
		});
		
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			draggable:false,
			scrollwheel: false,
			icon: image,
			animation: google.maps.Animation.BOUNCE
		});
			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.open(map, marker);
			});

	}
});