import Offer from '../offer/offer';
import {Offers} from '../../types/offer-type';

type offerListProps = {
  offers: Offers;
  setActiveOffer?: (x: number | null) => void;
}

export default function OffersList(props: offerListProps): JSX.Element {
  const {offers} = props;
  return (
    <>
      {offers.map((offer) => (
        <Offer
          key={offer.id}
          offer={offer}
          setActiveOffer={props.setActiveOffer}
        />
      ))}
    </>
  );
}
