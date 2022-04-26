import { useState, useEffect } from "react";

const useCountry = (countryName) => {
  const URL = `https://restcountries.com/v2/name/${countryName}`;

  const [countriesData, setCountriesData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setCountriesData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [URL]);
  return { countriesData, error };
};
export default useCountry;
