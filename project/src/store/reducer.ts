import offers from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList} from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    });
});
