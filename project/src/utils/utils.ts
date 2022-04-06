import {OfferType} from '../types/offer-type';

export const capitalize = (string: string): string => {
  if (!string) {
    return string;
  }
  return string[0].toUpperCase() + string.slice(1);
};

export const getOffers = (currentCity: string, offers: OfferType[]) => offers.slice().filter((offer) => offer.city.name === currentCity);
