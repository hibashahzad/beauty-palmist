import React from "react";
import classes from "./BusinessLogin.module.css";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import UerServices from "../../Services/services/UserServices";
import { error, success } from "../../utilties/Messagehandler";
import bussnessServices from "../../Services/services/bussnessuser";
import { useAuth } from "../../Services/provideMain";
const BusniessLogin = () => {
  let navigate = useNavigate();
  const { login } = useAuth();
  let Client = () => {
    navigate("/Clogin");
  };
  const move = (name) => {
    navigate(name);
  };
  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await UerServices.login(values.email, values.password);
      if (data.status == 1) {
        bussnessServices.getBussness(data.id).then((value) => {
          success(data.message);
          login(data.token, "bussness", value.bussness);
          setSubmitting(false);
        });
      } else if (data.status == 0) {
        error(
          "Your Application is Not Apporved Yet or You are not Registered as A bussnessUser"
        );
      } else {
        error("Your Application is disapproved Please Contact Admin ");
      }
    } catch (e) {
      error(e.error);
    }
  };
  return (
    <div class={`${classes[`main-container`]}`}>
      <div class={`container `}>
        <div class="row">
          <div class="col-md-6 ">
            <div
              class={`card ${classes.LoginCard} shadow-lg bg-body rounded m-md-0 m-auto`}
            >
              <div
                class="row g-0"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <div class="col-md-6 ">
                  <button
                    onClick={Client}
                    class={`btn btn-primary ${classes.btnsize} ${classes.z} `}
                  >
                    Client
                  </button>
                </div>
                <div class="col-md-6 ">
                  <button
                    class={`btn btn-primary ${classes.btnsize} ${classes.bussiness}`}
                  >
                    Bussiness
                  </button>
                </div>
              </div>
              <div class="card-body">
                <h2>Login</h2>

                <Formik
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Invalid email address format")
                      .required("Email is required"),
                    password: Yup.string().required("Password is required"),
                  })}
                  initialValues={{ email: "", password: "" }}
                  onSubmit={handleFormSubmit}
                >
                  {({ values, isSubmitting, validateForm, setTouched }) => (
                    <Form>
                      <div class="form-group">
                        <Field
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          className="form-control"
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="errorField"
                        />
                      </div>
                      <div class="form-group mb-3">
                        <Field
                          name="password"
                          type="password"
                          placeholder="password"
                          className="form-control"
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="errorField"
                        />
                      </div>
                      <button
                        type="submit"
                        // onClick={(e) => Services()}
                        class={`btn btn-primary ${classes[`login-btn`]}`}
                      >
                        {isSubmitting ? "Please wait..." : "Login"}
                      </button>
                      <h3>
                        Don't have an account?{" "}
                        <i className="bolds" onClick={() => move("/Selection")}>
                          Sign Up
                        </i>
                      </h3>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-inline">
            <div class={`card ${classes.titleCard}`}>
              <div class={`card-body ${classes.body}`}>
                <h1 className={classes.head1}>Business Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusniessLogin;
