import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import React from "react";
import classes from "./Header.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import UerServices from "./../../Services/services/UserServices";
import { useAuth } from "../../Services/provideMain";

const Header = () => {
  const naviagte = useNavigate();
  let { state, handleLogout } = useAuth();

  const move = (name) => {
    naviagte(name);
  };
  return (
    <container style={{ marginTop: "14px" }}>
      <Navbar
        className={classes.bgnavbar}
        expand="lg"
        style={{ padding: "10px" }}
      >
        <Navbar.Brand href="#" className={`d-flex ${classes.imagese}`}>
          <img
            src="https://static.wixstatic.com/media/11c705_5d07b24c70fe4634ba9f1a42ec5aa41f~mv2.jpg/v1/fill/w_312,h_319,al_c,lg_1,q_80,enc_auto/11c705_5d07b24c70fe4634ba9f1a42ec5aa41f~mv2.jpg"
            alt="refresh page again"
            width="40%"
          />
          <div>
            <div style={{ fontWeight: "bold" }}>Beauty Palmist</div>
            <div style={{ fontSize: "14px", fontStyle: "italic" }}>
              The Future of Your Beauty
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className={classes.small} />

        <Navbar.Collapse id="navbarScroll" className={classes.set}>
          {state.user?.role != "bussness" ? (
            <Nav className="my-lg-0  mt-5 pt-5  ">
              <Nav.Link
                className={`${classes.white} normal1`}
                onClick={() => move("/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`${classes.white} normal1`}
                onClick={() => move("/Services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                className={`${classes.white} normal1`}
                onClick={() => move("/Palmist")}
              >
                Palmist Quiz
              </Nav.Link>
              {!state.auth ? (
                <Nav.Link
                  className={`${classes.white} normal1`}
                  onClick={() => move("/Clogin")}
                >
                  Login
                </Nav.Link>
              ) : (
                <Nav.Link
                  className={`${classes.white} normal1`}
                  onClick={() => handleLogout()}
                >
                  Log Out
                </Nav.Link>
              )}
            </Nav>
          ) : (
            <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Welcome {state.user?.name} Its your Dashborad
            </h2>
          )}
        </Navbar.Collapse>
        {state.auth ? (
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

              {state.user?.role != "bussness" ? (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={UerServices.getloggedInUser()?.name}
                  className="drop"
                >
                  <Dropdown.Item onClick={() => move("/MyBooking")}>
                    My Bookings
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => handleLogout()}
                  >
                    Log Out
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <button
                  className="btn btn-dark mx-2"
                  style={{ display: "block" }}
                  onClick={() => handleLogout()}
                >
                  Log Out
                </button>
              )}
            </div>
            {state.user?.role != "bussness" && (
              <div>
                {" "}
                <button
                  className="btn btn-dark mt-2"
                  style={{ display: "block" }}
                  onClick={() => move("/MyBooking")}
                >
                  My Booking
                </button>
              </div>
            )}
          </div>
        ) : (
          <img
            src="https://static.wixstatic.com/media/11c705_5d07b24c70fe4634ba9f1a42ec5aa41f~mv2.jpg/v1/fill/w_312,h_319,al_c,lg_1,q_80,enc_auto/11c705_5d07b24c70fe4634ba9f1a42ec5aa41f~mv2.jpg"
            alt="refresh page again"
            width="10%"
          />
        )}
      </Navbar>
    </container>
  );
};

export default Header;
