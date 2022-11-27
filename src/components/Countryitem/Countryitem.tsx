import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <img width="100" src={country.flag} />
      </div>
      <div>{country.name}</div>
      <div>{country.capital}</div>
      <div>{country.region}</div>
      <div>
        <Badge classColor={Color.Primary} label="area" value={country.area} />
      </div>

      <div>
        <Badge
          classColor={Color.Secondary}
          label="population"
          value={country.population}
        />
      </div>
    </li>
  );
};
