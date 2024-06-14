// components/Map.js
import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];
const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ onCoordinatesChange }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const searchBoxRef = useRef(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) return;

    const place = places[0];
    const location = place.geometry.location;

    setMarker({
      position: {
        lat: location.lat(),
        lng: location.lng(),
      },
    });

    map.panTo(location);
    onCoordinatesChange({ lat: location.lat(), lng: location.lng() });
  };

  const onMapClick = (e) => {
    const location = e.latLng;

    setMarker({
      position: {
        lat: location.lat(),
        lng: location.lng(),
      },
    });

    onCoordinatesChange({ lat: location.lat(), lng: location.lng() });
  };

  return isLoaded ? (
    <div>
      <StandaloneSearchBox
        onLoad={(ref) => (searchBoxRef.current = ref)}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search Box"
          style={{
            boxSizing: 'border-box',
            border: '1px solid transparent',
            width: '240px',
            height: '32px',
            padding: '0 12px',
            borderRadius: '3px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            fontSize: '14px',
            outline: 'none',
            textOverflow: 'ellipses',
            position: 'absolute',
            left: '50%',
            marginLeft: '-120px',
          }}
        />
      </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: -34.397, lng: 150.644 }}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
        {marker && <Marker position={marker.position} />}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Map;
