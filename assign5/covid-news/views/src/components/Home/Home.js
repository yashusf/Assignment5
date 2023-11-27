import React from "react";
import Banner from "./Banner";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <div className="overview-Section">
            <h2>Overview</h2>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <img
                className="overview-image"
                src="https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="doctor"
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="overview-desc">
                <h3>Let's Save The World</h3>
                <p>
                  COVID-19 is a highly contagious respiratory disease caused by
                  the SARS-CoV-2 virus. It can spread through respiratory
                  droplets produced when an infected person coughs, sneezes, or
                  talks. The virus can also spread by touching a contaminated
                  surface and then touching your eyes, nose, or mouth. While
                  there is no cure for COVID-19, there are a number of things
                  you can do to prevent yourself from getting sick. These
                  include:
                </p>
                <ul>
                  <li>
                    <b>Getting vaccinated:</b> The COVID-19 vaccine is safe and
                    effective at preventing serious illness, hospitalization,
                    and death.
                  </li>
                  <li>
                    <b>Wearing a mask:</b> When you are indoors in public
                    places, wear a well-fitting mask to help reduce the spread
                    of respiratory droplets.
                  </li>
                  <li>
                    <b>Practicing good hygiene:</b> Wash your hands often with
                    soap and water for at least 20 seconds, especially after
                    being in a public place or after blowing your nose,
                    coughing, or sneezing.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
