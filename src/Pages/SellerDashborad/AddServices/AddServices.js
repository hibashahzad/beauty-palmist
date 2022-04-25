import "./AddServices.css";
import React from "react";
import { useAuth } from "../../../Services/provideMain";
import SubCategory from "../../../Services/services/subCategorybyCategory";
import { Formik } from "formik";
import { Form } from "formik";
import * as Yup from "yup";
import { Field } from "formik";

const AddServices = () => {
  const { getUser } = useAuth();
  const [cat, setCat] = React.useState([]);
  const [initial, setInitial] = React.useState({
    ServiceName: "",
    ServiceCategory: "",
    ServiceCode: "",
    ServiceDescription: "",
    Price: "",
    flexRadioDefault: "",
  });
  const [random, setRandom] = React.useState("");

  React.useEffect(() => {
    SubCategory.getSubCategoryByCategory(getUser().categoryId?._id).then(
      (val) => {
        setCat(val.subcategory);
        setInitial({...initial,ServiceCategory:
          Math.floor(Math.random() * 1000 + 10 + Math.random() * 100 + 1) +
            getUser().categoryId._id
        });
      
      }
    );
    console.log(cat);
  }, []);
  const handleFormSubmit = () => {};
  return (
    <div class="py-5 mainAddService">
      <div class="card addServiceCard">
        <div class="card-title titleService">Add Service Form</div>
        <div class="card-body">
          <Formik
           enableReinitialize={true}
           initialValues={initial}
           validationSchema={Yup.object().shape({
            ServiceName: Yup.string()
           
               .required("ServiceName is Required"),
               ServiceCategory: Yup.string()
         
               .required("ServiceCategory is required"),
               ServiceCode: Yup.string()
   
               .required("ServiceCode is required"),
               ServiceDescription: Yup.number()
              
               .required("PhoneNo is required"),
             confirmPassword: Yup.string().test(
               "passwords-match",
               "Passwords must match",
               function (value) {
                 return this.parent.password === value;
               }
             ),
            
            
           })}
            onSubmit={handleFormSubmit}
          >
            {({ values, isSubmitting, validateForm, setTouched }) => (
              <Form>
                <div class="row">
                  <div class="col-md-6">
                    <label for="ServiceName" class="ServiceLabel">
                      Service Name
                    </label>
                    <Field
                      name="ServiceName"
                      type="text"
                      class="form-control ServiceTextfield"
                      id="ServiceName"
                    />
                    <div class="form-group">
                      <label for="ServiceCategory" class="ServiceLabel">
                        Service Category
                      </label>
                      <Field
                        as="select"
                        name="ServiceCategory"
                        class="form-control ServiceTextfield"
                        id="ServiceCategory"
                      >
                        <option>Select</option>
                        {cat.length > 0 &&
                          cat.map((subCat) => (
                            <option value={subCat.id}>{subCat.name}</option>
                          ))}
                      </Field>
                    </div>
                    <label for="ServiceCode" class="ServiceLabel">
                      Service Code
                    </label>
                    <Field
                      name="ServiceCode"
                      readOnly={true}
                      value={random}
                      class="form-control ServiceTextfield"
                      id="ServiceCode"
                      placeholder="Service code will be auto-generated"
                    />
                    <label for="ServicePrice" class="ServiceLabel">
                      Price (PKR)*
                    </label>
                    <Field
                      name="Price"
                      type="number"
                      class="form-control ServiceTextfield"
                      id="ServicePrice"
                    />
                    {/* <div class="form-group">
                <label for="BookingPayment" class="ServiceLabel">
                  Booking Payment Percentage*
                </label>
                <select
                  class="form-control ServiceTextfield"
                  id="BookingPayment"
                >
                  <option>Full Payment</option>
                  <option>50% Advance Payment</option>
                  <option>25% Advance Payment</option>
                  <option>Custom Payment</option>
                </select>
              </div> */}
                  </div>
                  <div class="col-md-6">
                    {/* <button type="button" class="btn qbutton">
                  Fill Questionnare{" "}
                  <i
                    class="fa-regular fa-circle-question pr-2"
                    aria-hidden="true"
                  ></i>
                </button> */}

                    <label class="ServiceLabel">
                      Select your Service Type in terms of Price Range
                    </label>
                    <div class="form-check">
                      <Field
                        value="Luxury"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Luxury
                      </label>
                    </div>
                    <div class="form-check">
                      <Field
                        value="Affordable"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Affordable
                      </label>
                    </div>
                    <div class="form-check">
                      <Field
                        value="LowCost"
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Low Cost
                      </label>
                    </div>
                  </div>
                </div>
                <label for="ServiceDescription" class="ServiceLabel">
                  Service Description
                </label>
                <Field
                  type="text"
                  name="ServiceDescription"
                  as="textarea"
                  class="form-control descriptiontextfield"
                  id="ServiceDescription"
                  placeholder="Enter your service description"
                />
                <div class="btndiv">
                  <button type="submit" class="btn btn-lg btn-dark submitbtn">
                    SUBMIT
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
