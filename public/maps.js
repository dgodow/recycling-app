// function drawMarker (type, coords) {
//   var latLng = new google.maps.LatLng(coords[0], coords[1]);
//   var iconURL = iconURLs[type];
//   var marker = new google.maps.Marker({
//     icon: iconURL,
//     position: latLng
//   });
//   marker.setMap(currentMap);
// }

// const axios = require('axios')

$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    bin: '/autorenew.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);
  }

  $.ajax({
    method: 'GET',
    url: '/api/bins',
  })
  .then(res => {
    // console.log(res)
    res.forEach(bin => {
      drawMarker('bin', [bin.latitude, bin.longitude])
    })
    .catch(err => {
      console.error(err);
      console.log('Error retrieving bins from db')
    })
  })

  var infoWindow = new google.maps.InfoWindow({map: currentMap});
  var userIcon = new google.maps.Marker({
    map: currentMap,
    icon: 'personpin2.png'
  })

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // infoWindow.setPosition(pos);
      userIcon.setPosition(pos)
      // infoWindow.setContent('Location found.');
      currentMap.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, currentMap.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, currentMap.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
});
