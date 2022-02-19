import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import PrivateRoute from '../private-route/private-route';
import Login from '../login/login';
import NotFoundScreen from '../not-found/not-found';

type AppScreenProps = {
  offersCount: number;
}

export default function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={ <MainPage offersCount={offersCount} /> }
        />
        <Route
          path={AppRoute.Room}
          element={ <MainPage offersCount={offersCount} /> }
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
