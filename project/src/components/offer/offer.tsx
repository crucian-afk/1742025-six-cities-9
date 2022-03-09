import {SingleOfferPreview} from '../../types/single-offer-preview';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type offerProps = {
  offer: SingleOfferPreview;
}

const capitalize = (string: string): string => {
  if (!string) {
    return string;
  }
  return string[0].toUpperCase() + string.slice(1);
};

export default function Offer({offer}: offerProps): JSX.Element {
  const {isPremium, previewImage, type, title, rating, price, isFavorite} = offer;
  return (
    <article className="cities__place-card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${isFavorite ? '--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'To bookmarks' : 'In bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 100 / 5}%`}} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}
