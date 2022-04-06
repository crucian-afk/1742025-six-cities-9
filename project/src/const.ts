export enum AppRoute {
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_ACTIVE = './img/pin-active.svg';

export const LOCATIONS = [
  {
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
      name: 'Paris',
    },
  },
  {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    city: {
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 10,
      },
      name: 'Cologne',
    },
  },
  {
    city: {
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 10,
      },
      name: 'Brussels',
    },
  },
  {
    city: {
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 10,
      },
      name: 'Hamburg',
    },
  },
  {
    city: {
      location: {
        latitude: 51.233334,
        longitude: 6.783333,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
  },
];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
