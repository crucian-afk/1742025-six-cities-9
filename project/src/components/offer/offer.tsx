import {SingleOfferPreview} from '../../types/single-offer-preview';
import {Link, generatePath} from 'react-router-dom';
import capitalize from '../../utils/utils';

type offerProps = {
  offer: SingleOfferPreview;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

export default function Offer({offer, onMouseEnter, onMouseLeave}: offerProps): JSX.Element {
  const {isPremium, previewImage, type, title, rating, price, isFavorite, id} = offer;
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath('/offer/:id', {id: String(id)})}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
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
          <Link to={generatePath('/offer/:id', {id: String(id)})}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}
