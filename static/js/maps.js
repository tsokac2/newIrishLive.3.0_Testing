function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom : 11,
            center: {
                lat: 53.350140,
                lng: -6.266155
            }
        });

  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center); 
  });

        let busMarkerIcon = {
            url:"static/images/bus_marker.png",
            scaledSize: new google.maps.Size(50, 50)
        }

        let dartMarkerIcon = {
            url:"static/images/dart_marker.png",
            scaledSize: new google.maps.Size(50, 50)
        }

        let luasMarkerIcon = {
            url:"static/images/luas_marker.png",
            scaledSize: new google.maps.Size(50, 50)
        }

        const Bus747Stop = new google.maps.Marker({
            position: {lat: 53.42810, lng: -6.24407},
            map: map,
            title: "BUS 747 Stop",
            icon: busMarkerIcon
        });

        const BusarasBusStation = new google.maps.Marker({
            position: {lat: 53.34983, lng: -6.25185},
            map: map,
            title: "Busaras Central Bus Station",
            icon: busMarkerIcon
        });

        const HeustonStation = new google.maps.Marker({
            position: {lat: 53.34646, lng: -6.29413},
            map: map,
            title: "Heuston Station",
            icon: dartMarkerIcon
        });

        const ConnollyTrainStation = new google.maps.Marker({
            position: {lat: 53.35165, lng: -6.24970},
            map: map,
            title: "Busaras Central Station",
            icon: dartMarkerIcon
        });

        const TaraStation = new google.maps.Marker({
            position: {lat: 53.34756, lng: -6.25418},
            map: map,
            title: "Tara Station, Bus Stop at Train Station",
            icon: dartMarkerIcon
        });

        const AbbeyStreetLuas = new google.maps.Marker({
            position: {lat: 53.34871, lng: -6.25819},
            map: map,
            title: "Abbey Street Luas Stop",
            icon: luasMarkerIcon
        });

        const TrinityLuasStop = new google.maps.Marker({
            position: {lat: 53.34540, lng: -6.25826},
            map: map,
            title: "Trinity Luas Stop",
            icon: luasMarkerIcon
        });

        const TallaghtLuasStop = new google.maps.Marker({
            position: {lat: 53.28752, lng: -6.37463},
            map: map,
            title: "Tallaght Luas Stop",
            icon: luasMarkerIcon
        });

        const SaggartLuasStop = new google.maps.Marker({
            position: {lat: 53.28481, lng: -6.43776},
            map: map,
            title: "Saggart Luas Stop",
            icon: luasMarkerIcon
        });

        const ThePoint = new google.maps.Marker({
            position: {lat: 53.34848, lng: -6.22894},
            map: map,
            title: "The Point Luas Stop",
            icon: luasMarkerIcon
        });

        const BridesGlen = new google.maps.Marker({
            position: {lat: 53.24204, lng: -6.14275},
            map: map,
            title: "Brides Glen Luas Stop",
            icon: luasMarkerIcon
        });

        const Broombridge = new google.maps.Marker({
            position: {lat: 53.37234, lng: -6.29772},
            map: map,
            title: "Broombridge Luas Stop",
            icon: luasMarkerIcon
        });

    }