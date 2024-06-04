
// Initialize and display the map
async function initMap() {
  // Specify the coordinates where the marker will be placed
  var myLatLng = { lat: 41.848800, lng: -87.884400 }; // Example coordinates for New York City
  var myLatLng2 = { lat: 41.77331832929785, lng: -88.14563357116408 };

  // Create a new map centered at the specified coordinates
  var map1 = new google.maps.Map(document.getElementById('map-westchester'), {
    zoom: 15,  // Adjust zoom level as needed
    center: myLatLng
  });

  // var map2 = new google.maps.Map(document.getElementById('map-naperville'), {
  //   zoom: 15,  // Adjust zoom level as needed
  //   center: myLatLng2
  // });


  const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">Law Offices of Randall B. Hribal</h3>' +
    '<div id="bodyContent">' +
    "<p><strong>Address:</strong> 10500 Cermak Rd # 2, Westchester, IL 60154</p>" +
    "</div>" +
    "</div>";


  const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">Law Offices of Randall B. Hribal</h3>' +
    '<div id="bodyContent">' +
    "<p><strong>Address:</strong> 10500 Cermak Rd # 2, Westchester, IL 60154</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString1,
    ariaLabel: "Law Offices of Randall B. Hribal",
  });

  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    ariaLabel: "Law Offices of Randall B. Hribal",
  });


  var marker1 = new google.maps.Marker({
    position: myLatLng,
    map: map1,
    title: 'Law Offices of Randall B. Hribal'
  });

  marker1.addListener("click", () => {

    infowindow.open({
      anchor: marker1,
      map1,
    });
  });

  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map1,
    title: 'Law Offices of Randall B. Hribal'
  });

  marker2.addListener("click", () => {

    infowindow2.open({
      anchor: marker2,
      map1,
    });
  });

  initMap();
}
