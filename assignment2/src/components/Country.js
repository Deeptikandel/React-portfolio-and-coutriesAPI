import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Country.css";
import useCountry from "../Hooks/useCountry";

const Country = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("Finland");
  const { countriesData, error } = useCountry(query);

  console.log(countriesData);

  return (
    <section className="contact" id="contacts">
      <h2 className="subtitle">Countries Data</h2>
      <Form
        className="contact-form"
        onSubmit={(e) => {
          setQuery(input);
          setInput("");
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <div className="form-field">
            <Form.Control
              type="text"
              value={input}
              placeholder="Type Country Name"
              onChange={(event) => setInput(event.target.value)}
            />
            <Button className="m-2" variant="dark" type="submit">
              Show
            </Button>
          </div>
        </Form.Group>
      </Form>

      {error && <h1>Something is worong</h1>}
      <div className="info">
        {countriesData &&
          countriesData.map((country, i) => {
            return (
              <div
                key={i}
                style={{ border: "4px solid white", paddingBottom: "8px" }}
              >
                <h1>Country:{country.name}</h1>
                <p>Capital:{country.capital}</p>
                <h1>Population:{country.population}</h1>
                <img width="100px" src={country.flag} alt="country flag" />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Country;
