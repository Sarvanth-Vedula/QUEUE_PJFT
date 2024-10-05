import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import temp from "../assets/logo/temp.png";

const mapStyles = {
  width: "100%",
  height: "1600px",
};

const positions = [
  { position: { lat: 38.9072, lng: -77.0369 }, content: "Washington D.C" },
  { position: { lat: 47.6061, lng: -122.3328 }, content: "Seattle" },
  { position: { lat: 42.3601, lng: -71.0589 }, content: "Boston" },
  { position: { lat: 41.8781, lng: -87.6298 }, content: "Chicago" },
  { position: { lat: 32.7767, lng: -96.797 }, content: "Dallas" },
  { position: { lat: 39.4, lng: -104.59 }, content: "Denver" },
];

class Maps extends React.Component {
  state = {
    userLocation: null,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    selectedImage: null,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.onGeoSuccess,
        this.onGeoError
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  onGeoSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({
      userLocation: { lat: latitude, lng: longitude },
    });
  };

  onGeoError = (error) => {
    console.log("Error occurred while getting geolocation: " + error.message);
  };

  onMarkerHover = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      selectedImage: temp,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedImage: null,
      });
    }
  };

  render() {
    const { userLocation } = this.state;

    // Night mode style
    const nightModeStyle = {
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    };

    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={userLocation || { lat: 39.7823244, lng: -104.9690266 }} // Default to Denver if user location is not available
        styles={nightModeStyle.styles} // Apply night mode style
        mapTypeControl={false} // Disable map and satellite options
      >
        {/* Marker for user's current location */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
        )}

        {/* Other markers */}
        {positions.map((pos, index) => (
          <Marker
            key={index}
            position={pos.position}
            onMouseover={this.onMarkerHover}
            name={pos.content}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            {this.state.selectedImage && (
              <img
                src={this.state.selectedImage}
                alt=""
                style={{ maxHeight: "100px", maxWidth: "100px" }}
              />
            )}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC97IINRm14C0dDwA5i4bWVxQkBlINIUEU",
})(Maps);
