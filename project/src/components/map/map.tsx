import 'leaflet/dist/leaflet.css';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const';
import {Location, Points} from '../../types/offer-type';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [28, 40],
  iconAnchor: [20, 40],
});

type mapProps = {
  city: Location;
  points: Points;
  selectedPoint: number | null;
}

const useMapAdapter = (props: Omit<mapProps, 'type'>) => {
  const {city, points, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(selectedPoint !== undefined && offer.id === selectedPoint
            ? activeCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
  return {mapRef};
};

export default function Map({city, points, selectedPoint}: mapProps): JSX.Element {
  const {mapRef} = useMapAdapter({city, points, selectedPoint});

  return <section ref={mapRef} className="cities__map map" />;
}
