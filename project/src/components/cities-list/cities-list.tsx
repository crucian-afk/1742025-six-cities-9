import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import {CITIES} from '../../const';

export default function CitiesList(props: {city: string}) {
  const {city} = props;
  const dispatch = useAppDispatch();

  const handleClick = (cityName: string) => () => dispatch(changeCity(cityName));

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => {
          const className = `locations__item-link tabs__item${cityName === city && ' tabs__item--active'}`;
          return (
            <li key={cityName} className="locations__item" onClick={handleClick(cityName)}>
              <a className={className} href="#locations__item">
                <span>{cityName}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

