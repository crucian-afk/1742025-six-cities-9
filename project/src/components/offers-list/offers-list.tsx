import Offer from '../offer/offer';
import {SingleOfferPreview} from '../../types/single-offer-preview';

type offerListProps = {
  offers: SingleOfferPreview[];
}

export default function OffersList({offers}: offerListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: SingleOfferPreview) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </>
  );
}
