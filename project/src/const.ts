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

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
