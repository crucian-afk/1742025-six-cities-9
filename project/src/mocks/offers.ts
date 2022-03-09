import {SingleOfferPreview} from '../types/single-offer-preview';

const offers: SingleOfferPreview[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.380216,
        longitude: 4.815168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Bath',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'https://picsum.photos/200/100',
    price: 120,
    rating: 4.8,
    title: 'Beautiful apartment for family',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 42.370216,
        longitude: 3.895168,
        zoom: 10,
      },
      name: 'Berlin',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laborum Berlin',
    goods: [
      'Conditioner',
      'Microwave',
    ],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: true,
      name: 'Helga',
    },
    id: 2,
    images: [
      'https://picsum.photos/200/300',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 42.170216,
      longitude: 3.895168,
      zoom: 10,
    },
    maxAdults: 1,
    previewImage: 'https://picsum.photos/200/200',
    price: 255,
    rating: 1.9,
    title: 'Nice flat for any traveler',
    type: 'flat',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 57.640216,
        longitude: 4.155168,
        zoom: 10,
      },
      name: 'Minsk',
    },
    description: 'Nihil! Adipisci animi atque doloremque ea eos harum itaque maiores Hamburg',
    goods: [
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 2,
      isPro: true,
      name: 'Henry',
    },
    id: 3,
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 55.640216,
      longitude: 5.155168,
      zoom: 9,
    },
    maxAdults: 3,
    previewImage: 'https://picsum.photos/200/300',
    price: 75,
    rating: 3,
    title: 'Cheap room for active travellers',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Barcelona',
    },
    description: 'nesciunt quasi quibusdam. Accusamus commodi cum dolorem eius nam sed Stuttgart',
    goods: [
      'Conditioner',
      'Heating',
      'Microwave',
      'Dishwasher',
      'Room service',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    id: 4,
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.770216,
      longitude: 4.375168,
      zoom: 7,
    },
    maxAdults: 5,
    previewImage: 'https://picsum.photos/200/400',
    price: 570,
    rating: 4.8,
    title: 'Fancy & spacious apartment for demanding people',
    type: 'apartment',
  },

];

export default offers;
