import 'leaflet/dist/leaflet.css';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const';
import {ActiveOfferId, city, SingleOfferPreview} from '../../types/single-offer-preview';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type mapProps = {
  offers: SingleOfferPreview[];
  currentCity: city;
  activeOffer: ActiveOfferId;
}

export default function Map({offers, currentCity, activeOffer}: mapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(offer.id === activeOffer.id ? activeCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef} />;
}
