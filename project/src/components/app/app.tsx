import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import PrivateRoute from '../private-route/private-route';
import Login from '../login/login';
import NotFoundScreen from '../not-found/not-found';
import {SingleOfferPreview} from '../../types/single-offer-preview';
import Property from '../property/property';

type AppProps = {
  offers: SingleOfferPreview[];
}

export default function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={ <MainPage offers={offers} /> }
        />
        <Route
          path={AppRoute.Room}
          element={ <Property /> }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={ <Login /> }
        />
        <Route
          path="*"
          element={ <NotFoundScreen /> }
        />

      </Routes>
    </BrowserRouter>
  );
}
