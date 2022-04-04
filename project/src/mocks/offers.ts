import {SingleOfferPreview} from '../types/single-offer-preview';

const offers: SingleOfferPreview[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
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
      'https://picsum.photos/300/400',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
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
      avatarUrl: 'https://i.pravatar.cc/135',
      id: 3,
      isPro: true,
      name: 'Helga',
    },
    id: 2,
    images: [
      'https://picsum.photos/250/350',
      'https://picsum.photos/205/305',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
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
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
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
      'https://picsum.photos/210/310',
      'https://picsum.photos/220/320',
      'https://picsum.photos/230/330',
      'https://picsum.photos/215/315',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
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
      'https://picsum.photos/350/450',
      'https://picsum.photos/190/290',
      'https://picsum.photos/195/295',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
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
