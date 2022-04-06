import {

    Navbar,
    Container,
    Nav,
  
  } from "react-bootstrap";
  import React from "react";
  import classes from "./Header.module.css";

  const Header = () => {
    const navRoadmapHandler = (names) => {
      const element = document.getElementById(names);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
      <Navbar className={classes.bgnavbar}   expand="lg" sticky="top">
        <Container  
  > 
          <Navbar.Brand href="#">
            <img src="logo.svg"    alt="refresh page again"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className={classes.small}/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2 my-lg-0 ms-md-auto">
            
                <Nav.Link
                  className={`${classes.white} normal1`}
             
              
                >
                 fff
                </Nav.Link>
         
             
            
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;
  