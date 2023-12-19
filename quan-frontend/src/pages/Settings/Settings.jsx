import React, { useContext, useState } from "react";

// import Barters from "components/Barters";
import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import SettingsStyled from "./Settings.styled";

import profileImg from "../../assets/img/button.png";
import imageArrow from "../../assets/img/imageArrow.svg";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";
import ThemeContext from "pages/context/ThemeContext";

function BartersPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div>
      <Header />
      <SettingsStyled>
        <BarterMenu linkActive={"settings"} />
        <Form
          className="cont"
          style={{ padding: "30px", flex: "0.8", marginTop: "20px" }}
        >
          <div>
            <div className="info">
              <div>
                <h3>Profile settings</h3>
                <p>Here you can change profile inforamtion</p>
              </div>
            </div>
            <div className="settings">
              <div className="settings-main">
                <Form.Group className="mb-3">
                  <Form.Label className="h4">First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    style={{ width: "50%" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="h4">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    style={{ width: "50%" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="h4">City</Form.Label>
                  <Form.Select
                    type="text"
                    placeholder="City"
                    style={{ width: "50%" }}
                  >
                    <option value="" disabled selected>
                      Choose your city
                    </option>
                    <option value="New York">New York</option>
                    <option value="Pavlodar">Pavlodar</option>
                    <option value="Astana">Astana</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="London">London</option>
                    <option value="Aktau">Aktau</option>
                    <option value="Alma-Ata">Alma-Ata</option>
                    <option value="Vienna">Vienna</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="upload-pic">
                <input
                  type="file"
                  onChange={() => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                ></input>

                <label htmlFor="file">
                  <div className="DragText">
                    <div className="DragText Top">
                      <h3>Upload your photo</h3>
                      <img src={profileImg} alt="" />

                      <div className="dragdrop">
                        <p>
                          <span>Drag drop</span> your file here or{" "}
                          <span>Browse</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* This is Grid system */}
          {/* <Container>
            Just mock of grid elements
            <Row>
              <Col className="border bg-secondary">1 of 2</Col>
              <Col className="border bg-secondary">2 of 2</Col>
            </Row>
            <Row>
              <Col className="border bg-primary">1 of 3</Col>
              <Col className="border bg-primary">2 of 3</Col>
              <Col className="border bg-primary">3 of 3</Col>
            </Row>
          </Container> */}
          {/* This is Navbat bootstrap */}
          {/* <Navbar className="bg-tertiary">

            <Container className="bg-secondary">
              <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as:{" "}
                  <span className="text-light">Ayirbasta user</span>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
        </Form>
      </SettingsStyled>
    </div>
  );
}

export default BartersPage;
