import {store} from '../store';

// export type State = {
//   city: string;
//   offers: OfferTypes[];
// }
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
