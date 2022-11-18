import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="row row-cols-6 text-center align-items-center border fw-bold">
      <img src={country.flag} className="img-thumbnail p-4" />
      <span className="fs-5">{country.name}</span>
      <span className="fs-5">{country.capital}</span>
      <span className="fs-5">{country.region}</span>
      <Badge classColor={Color.Primary} label="area" value={country.area} />

      <Badge
        classColor={Color.Secondary}
        label="population"
        value={country.population}
      />
    </li>
  );
};
