import React from "react";
import "./services.scss";
import { serviceData } from "../../data";
import Button from 'react-bootstrap/Button';

const Services = () => {
  return (
    <section class="services" id="services">
      <h2 class="subtitle">Services</h2>
      <div class="service-wrapper">
        {serviceData.map((service) => {
          return (
            <div class="service-card">
              <h3 class="service-card-title">{service.title}</h3>
              <p class="services-description">{service.description}</p>
              <Button variant="outline-success">Read more</Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
