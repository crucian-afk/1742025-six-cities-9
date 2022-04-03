import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';


const Setting = {
  OFFERS: offers,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={Setting.OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
