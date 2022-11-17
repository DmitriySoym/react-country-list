import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

interface IProps {
  country: ICountry[];
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <ul className="w-75 mx-auto">
      {Object.values(country).map(
        ({ name, flag, capital, region, area, population }) => (
          <li
            className="row row-cols-6 text-center align-items-center border fw-bold"
            key={name}>
            <img src={flag} className="img-thumbnail p-4"></img>
            <span className="fs-5">{name}</span>
            <span className="fs-5">{capital}</span>
            <span className="fs-5">{region}</span>
            <Badge classColor={Color.Primary} label="area">
              : {area}
            </Badge>
            <Badge classColor={Color.Secondary} label="population">
              : {population}
            </Badge>
          </li>
        )
      )}
    </ul>
  );
};
