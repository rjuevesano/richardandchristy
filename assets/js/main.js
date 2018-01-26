$(document).ready(function() {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */

    $('input, textarea').placeholder();

    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("March 3, 2018 04:00:00 PM").getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secs</span>';


        //countdown.innerHTML = days + "d, " + hours + "h, "
       // + minutes + "m, " + seconds + "s";

    }, 1000);


    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 10.246633,
        lng: 123.8152696,
        scrollwheel: false,
        zoom: 15,
    });

    map.addMarker({
        lat: 10.23819,
        lng: 123.816899,
        title: 'Reception Location',
        infoWindow: {
            content: '<div class="note">Ceremony & Reception</div><h4 class="map-title script">Corona del Mar</h4><div class="address"><span class="region">Pooc, Talisay City, Cebu, Philippines, 6045</span></div>'
        }
    });

    // map.addMarker({
    //     lat: 50.969747,
    //     lng: -3.199985,
    //     title: 'Reception Location',
    //     infoWindow: {
    //         content: '<div class="note">Reception</div><h4 class="map-title script">The Manor House</h4><div class="address"><span class="region">Address line goes here</span><br><span class="postal-code">Postcode</span><br><span class="city-name">City</span></div>'
    //     }
    //
    // });

    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');


    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');

    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });

    audiojs.events.ready(function() {
      var as = audiojs.createAll();
    });

    // var myAudio = document.getElementById("myAudio"); 
    // myAudio.pause();
});
