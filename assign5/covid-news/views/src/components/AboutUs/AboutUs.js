import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './AboutUs.css'
import yaswanth from "../../assets/yaswanth.jpeg";
import pawan from "../../assets/pawan.jpeg";
import don from "../../assets/Don.jpg";
import joy from "../../assets/Joy.jpg";
import { baseUrl } from "../../services/api";
import diagram from "../../assets/datamodel.png";
const AboutUs = () => {
    return (
      <div className="about-us py-4">
        <Container>
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={don} />
                <Card.Body>
                  <Card.Title>Donald Wigington</Card.Title>
                  <Card.Text className="cardText">
                  I am a Graduate student in the USF MBAIS program. For this project I designed the overall layout and both the Home Page component along with its corresponding model and controllers. I used the react dom and implemented the navigation bar. To make the page more attractive, I used a carousel from the bootstrap library.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col>
              <Card>
                <Card.Img variant="top" src={pawan} />
                <Card.Body>
                  <Card.Title>Pawan Jethwani</Card.Title>
                  <Card.Text className="cardText">
                  Hi, I'm a Graduate student in Business Analytics and information systems at the USF, I have over 11 years of experience as a QA Consultant. I contributed in designing
                  About Us component, including its associated model and controllers. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
  
            <Col>
              <Card>
                <Card.Img variant="top" src={joy} />
                <Card.Body className="cardBody">
                  <Card.Title>Joy Boddu</Card.Title>
                  <Card.Text>
                    Hi, I am a Data Solutions specialist with a Master's degree in Management Information Systems from USF Muma College of Business. I have over three years of experience as a Mulesoft developer at Accenture.
                    I have designed the component AllStates, which has the informations about states and their respective details in a tabular format.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
  
            <Col>
              <Card>
                <Card.Img variant="top" src={yaswanth} />
                <Card.Body>
                  <Card.Title>Yaswanth Chandolu</Card.Title>
                  <Card.Text className="cardText">
                    Hi, I'm a graduate student with major in Business Analytics and Information systems with 4 years of experience as a business Analyst.  I implemented the States component which can be accessed by cliking the view details of any of the respective state.
              
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
  
          <div className="text-start my-5">
            <h3>API Endpoints</h3>
            <ul>
              <li>Get All states info</li>
              <p>
                GET: <a href={`${baseUrl}/state`}>{`${baseUrl}/state`}</a>
              </p>
              <li>Particular State info Based on State Code</li>
              <p>
                GET:{" "}
                <a
                  href={`${baseUrl}/state-data/getStateData/:stateCode`}
                >{`${baseUrl}/state-data/getStateData/:stateCode`}</a>
              </p>
              <li>Create a state data</li>
              <p>
                POST:{" "}
                <a href={`${baseUrl}/state-data`}>{`${baseUrl}/state-data`}</a>
              </p>
              <li>Update a state Data</li>
              <p>
                PATCH:{" "}
                <a
                  href={`${baseUrl}/state-data/:id`}
                >{`${baseUrl}/state-data/:id`}</a>
              </p>
              <li>Delete a state Data</li>
              <p>
                DELETE:{" "}
                <a
                  href={`${baseUrl}/state-data/:id`}
                >{`${baseUrl}/state-data/:id`}</a>
              </p>
            </ul>
          </div>
          
          <div className="text-start my-5">
            <h3>Technical Overview</h3>
            <p>
            The application follows the Model-View-Controller(MVC) architectural pattern to ensure a well-organized structure. Each component within the application possesses both controllers and models, enhancing the separation of concerns and promoting modularity.
  
  In terms of navigation, React DOM is employed to facilitate seamless movement between different sections of the application. This choice enhances the overall user experience by providing a smooth and intuitive navigation system.
  
  To enhance the website's visual appeal and adaptability across various devices, the flex property is utilized. This ensures a responsive design, allowing the content to dynamically adjust and maintain an aesthetically pleasing layout on different screen sizes.
  
  For the crucial aspect of data analysis, the application leverages the Reactcharts dependency. This library provides a robust set of tools for visualizing data. Specifically, static results are presented using the Line Charts component, offering a clear and graphical representation of the analyzed data. This not only contributes to a more engaging user interface but also 
  facilitates a better understanding of the presented information through visual representation.
            </p>
          </div>
          <div className="text-start my-5">
            <h3>Data Model</h3>
            <img
              src={diagram}
              width={"100%"}
              height={"400px"}
              alt="diagram"
              style={{ border: "1px solid black" }}
            />
          </div>
          
          {/*<div className="text-start my-5">
            <h3>Git Log Output</h3>
            <p>
              This represents the number of changes done by the team and the contributions of all the teammates.
            </p>
            <img
              src={diagram}
              width={"100%"}
              height={"400px"}
              alt="diagram"
              style={{ border: "1px solid black" }}
              /> 
          </div> */}
    
        </Container>
      </div> 
    );
  };
  
  export default AboutUs;