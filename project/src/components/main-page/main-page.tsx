import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import OffersList from '../offers-list/offers-list';
import {OffersProps} from '../../types/offer-type';
import {useState} from 'react';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import Layout from '../../layout/layout';

type MainProps = OffersProps & {city: string}

export default function MainPage(props: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(null as number | null);
  const {city, offers} = props;
  const cityLocation = offers[0].city.location;
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const points = sortedByCityOffers.map(({ id, location }) => ({ id, location }));
  const adsAmount = sortedByCityOffers.length;

  return (
    <div>
      <Layout />
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active" href="/">
                  <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Favorites}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <CitiesList city={city} />
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{adsAmount} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                      Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={offers}
                    setActiveOffer={setActiveOfferId}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={cityLocation} points={points} selectedPoint={activeOfferId} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
