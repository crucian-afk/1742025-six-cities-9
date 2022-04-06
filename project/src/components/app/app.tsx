import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import PrivateRoute from '../private-route/private-route';
import Login from '../login/login';
import NotFoundScreen from '../not-found/not-found';
import Property from '../property/property';
import FavoriteList from '../favorites/favorite-list';
import {useAppSelector} from '../../hooks';
import Layout from '../../layout/layout';

export default function App(): JSX.Element {
  const {city, offers} = useAppSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={ <MainPage offers={offers} city={city} /> } />
          <Route path={AppRoute.SignIn} element={ <Login /> } />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoriteList offers={offers} />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Room} element={ <Property offers={offers} /> } />
        </Route>
        <Route path="*" element={ <NotFoundScreen /> } />
      </Routes>
    </BrowserRouter>
  );
}
