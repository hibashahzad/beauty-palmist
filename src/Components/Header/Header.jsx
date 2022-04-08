import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  const navRoadmapHandler = (names) => {
    const element = document.getElementById(names);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Container style={{ marginTop: "14px" ,paddingBottom:"30px"}}>
      <Navbar
        className={classes.bgnavbar}
        expand="lg"
        sticky="top"
        style={{ padding: "10px" }}
      >
        <Navbar.Brand href="#" className={`d-flex ${classes.imagese}`}>
          <img
            src="https://static.wixstatic.com/media/11c705_5d07b24c70fe4634ba9f1a42ec5aa41f~mv2.jpg/v1/fill/w_312,h_319,al_c,lg_1,q_80,enc_auto/11c705_5d07b24c70fe4634ba9f1a42ec5aa41f~mv2.jpg"
            alt="refresh page again"
            width="50%"
          />
          <div>
            <div>Beauty Palmist</div>
            <div style={{ fontSize: "14px" }}>The Future of Your Beauty</div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className={classes.small} />

        <Navbar.Collapse id="navbarScroll" className={classes.set}>
          <Nav className="my-lg-0  mt-5 pt-5  ">
            <Nav.Link className={`${classes.white} normal1`}>Home</Nav.Link>
            <Nav.Link className={`${classes.white} normal1`}>Services</Nav.Link>
            <Nav.Link className={`${classes.white} normal1`}>
              Palmist Quiz
            </Nav.Link>
            <Nav.Link className={`${classes.white} normal1`}>Login</Nav.Link>

            <Nav.Link className={`${classes.white} normal1`}>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className={classes.profile}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              class="fa fa-home fa-fw"
              style={{
                fontSize: "30px",
                border: "2px solid blue",
                borderRadius: "30px",
                backgroundColor: "#689ADE",
              }}
            ></i>

            <DropdownButton
              id="dropdown-basic-button"
              title="Awais Shahbaz"
              className="drop"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            {" "}
            <button className="btn btn-dark w-75" style={{ display: "block" }}>
              My Booking
            </button>
          </div>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
