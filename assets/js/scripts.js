(function () {
    jQuery(document).ready(function($){
        "use strict"; // use strict to start

        /*-----------
        Date picker
        -----------*/
        $('#datepicker').datetimepicker({
        //  inline: true,
            format: 'DD/MM/YYYY'
        });

        /*-----------
        timepicker
        -----------*/
        $('#timepicker').datetimepicker({
        //  inline: true,
            format: 'hh:mm A'
        });




        /*-----------
        DEfault slider
        -----------*/
        $(".banner-slider").owlCarousel({
              navigation : true, // Show next and prev buttons
              navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              slideSpeed : 1000,
              pagination: false,
              paginationSpeed : 1000,
              singleItem:true,
              autoPlay:true,
             transitionStyle : "backSlide"
            
        });

         /*-----------
        background slider
        -----------*/
        $(".background-slider").owlCarousel({
              navigation : true, // Show next and prev buttons
              navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              slideSpeed : 1000,
              pagination: false,
              paginationSpeed : 1000,
              singleItem:true,
              autoPlay:true
        });

        /*-----------
        Banner title-slider
        -----------*/
        $(".title-slider").owlCarousel({
              navigation : true, // Show next and prev buttons
              navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              slideSpeed : 1000,
              pagination: false,
              paginationSpeed : 1000,
              singleItem:true,
              autoPlay:true,
              transitionStyle : "fade"
        });


        /*-----------
        dish-carousel, .review-carousel
        -----------*/
        $(".dish-carousel, .review-carousel").owlCarousel({
              navigation : true, // Show next and prev buttons
              navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
             
              pagination: false,
              paginationSpeed : 400,
              singleItem:true,
              autoPlay:true,
              transitionStyle : "backSlide"
          });
        
        /*-----------
        sidebar widget slider carousel
        -----------*/
           $(".widget-slider").owlCarousel({
              navigation : true, // Show next and prev buttons
              navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              slideSpeed : 300,
              pagination: false,
              singleItem:true,
              transitionStyle : "backSlide"
          });
        
        /*-----------
        related post slider carousel
        -----------*/
        $(".related-post-slide").owlCarousel({
            navigation : true, // Show next and prev buttons
            navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            slideSpeed : 300,
            pagination: false,
            items: 3, 
            //              singleItem:true,
            transitionStyle : "backSlide"
          });

        /*-----------
        client logo slider carousel
        -----------*/
        $(".client-list").owlCarousel({
            navigation : false, // Show next and prev buttons
            navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            slideSpeed : 300,
            pagination: false,
            items: 5,
            autoplay:true,
            // singleItem:true,
            transitionStyle : "backSlide"
        });


        /*-----------
            Fixednav scroll 
            -----------*/
        jQuery(window).on('scroll',function () { 
            var vheight=$(window).height();
            var winwidth=$(window).width();
            if ($(window).scrollTop() > 0) {
                $('.navbar-fixed-top').addClass('sticky');
            }
            else{
                $('.navbar-fixed-top').removeClass('sticky');
            }
        });


        /*-------- 
            Magnify Popup
            ---------*/
        if(jQuery('.popup-link').length){
            jQuery('.popup-link').magnificPopup({
                type: 'image',
                gallery:{
                    enabled:true
                }
            }); 
        }
            if(jQuery('.iframe-popup-link').length){
            jQuery('.iframe-popup-link').magnificPopup({
                type: 'iframe',
                gallery:{
                    enabled:true
                }
            }); 
        }
        
        if(jQuery('.menu-item').length){
            jQuery('.menu-item').magnificPopup({
                type: 'image',
                gallery:{
                    enabled:true
                }
            }); 
        }
          /*--------
         $('.menu-item').magnificPopup({
  type: 'image',
        gallery: {
  enabled: true, // set to true to enable gallery

  preload: [0,2], // read about this option in next Lazy-loading section

  navigateByImgClick: true,

  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
  
});
    ----*/    

        /*-------
        navbar search /Site search
        -----------*/

        $( ".btn-search" ).on('click',function(e) {
            e.preventDefault();
            $( "html" ).addClass( "search-open" );
            $( ".site-search" ).addClass( "open" );
        });
        $( ".search-close" ).on('click',function(e) {
            e.preventDefault();
            $( "html" ).removeClass( "search-open" );
            $( ".site-search" ).removeClass( "open" );
        });

        /*-------
        Mobile dropdown script
        -----------*/
        $(function(){
            $('.dropdown-menu > .dropdown > a').on("click",function(e){
                e.preventDefault();
                var current=$(this).next();
                var grandparent=$(this).parent().parent();
                grandparent.find(".dropdown-menu:visible").not(current).hide();
                current.toggle();
                e.stopPropagation();
            });
        });

        /*********** 
         parallex pge banner]
        ************/
       
        $(window).enllax();

        /*-------
        Shuffle Grid gallery 
        -----------*/

        $(window).on('load',function(){
            /* initialize shuffle plugin */
            var $grid = $('#grid');
            $grid.shuffle({
                itemSelector: '.grid-item' // the selector for the items in the grid
            });
            /* reshuffle when user clicks a filter item */
            $('#filter a').on('click',function (e) {
                e.preventDefault();
                // set active class
                $('#filter a').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName );
            });
        });

    
        /*--------
        Video background js
        -----------*/
        if($('.video-background').length){
            $('.video-background').videobackground({
                videoSource: [['assets/media/vid01.mp4', 'video/mp4'],
                    ['assets/media/vid01.webm', 'video/webm'], 
                    ['assets/media/vid01.ogv', 'video/ogg']], 
                controlPosition: '#main',
                loop: true,
//					poster: 'assets/media/vid.jpg',
                loadedCallback: function() {
                    $(this).videobackground('mute');
                }
            });
        }


        
        
            
        
        

        /*--------
        Google map API
        -----------*/

        if(jQuery('.map').length){
                google.maps.event.addDomListener(window, 'load', init);
        }	
		function init() {
		var myLatlng = new google.maps.LatLng(23.823824, 90.364351);//Add your Latitude longitude Value here to change map location
		var maptooltipbold = 'ThemeEver';
		var maptooltip = 'You can add your content here';  
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
		stylers:[{hue:"#00ff59"},{lightness:-25},{saturation:-97}]}]
		};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = 'assets/img/map.png';
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
	

        //Google map end
      
    'use strict';
    let swRegistration = null;
     //serviceworker starts
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported');
      navigator.serviceWorker.register('service-worker.js')
      .then(function(swReg) {
        console.log('Service Worker is registered', swReg);
        swRegistration = swReg;
      })
      .catch(function(error) {
        console.error('Service Worker Error', error);
      });
    } else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
    }
   
      
        
    });
    
})(jQuery);

  
        


	
	
	