import React from "react";
import ListedCountries from "./ListedCountries";

const CountriesList = ({ countries }) => {
  return countries?.map((country, i) => {
    return (
      <ListedCountries
        key={i}
        name={countries[i].name}
        image={countries[i].flag}
        population={countries[i].population}
        region={countries[i].region}
        capital={countries[i].capital}
        nativeName={countries[i].nativeName}
        subRegion={countries[i].subregion}
        currencies={countries[i].currencies}
        languages={countries[i].languages}
        borderCountries={countries[i].borders}
        topLevelDomain={countries[i].topLevelDomain}
      />
    );
  });
};

export default CountriesList;
