import Offer from '../offer/offer';
import {SingleOfferPreview} from '../../types/single-offer-preview';

type offerListProps = {
  offers: SingleOfferPreview[];
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

export default function OffersList({offers, onMouseEnter, onMouseLeave}: offerListProps): JSX.Element {

  return (
    <>
      {offers.map((offer: SingleOfferPreview) => (
        <Offer
          key={offer.id}
          offer={offer}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </>
  );
}
