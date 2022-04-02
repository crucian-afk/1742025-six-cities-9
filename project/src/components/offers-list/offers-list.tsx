import Offer from '../offer/offer';
import {SingleOfferPreview} from '../../types/single-offer-preview';
import {useState} from 'react';

type offerListProps = {
  offers: SingleOfferPreview[];
}

export default function OffersList({offers}: offerListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | undefined>();
  // eslint-disable-next-line no-console
  console.log(activeOffer);
  return (
    <>
      {offers.map((offer: SingleOfferPreview) => (
        <Offer key={offer.id} offer={offer} setActiveOffer={setActiveOffer}/>
      ))}
    </>
  );
}
