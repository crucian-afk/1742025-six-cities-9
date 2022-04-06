import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offer-type';

export const changeCity = createAction<string>('city/change');

export const fillOffersList = createAction<OfferType[]>('fillListOffers');
