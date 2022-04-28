import classes from "./PCategory.module.css";
import React from "react";
import SubCategory from "./../../../Services/services/subCategorybyCategory";
import { error } from "./../../../utilties/Messagehandler";
import { move } from "formik";
import { useNavigate } from 'react-router-dom';
const PCategory = () => {
  const [subCat, setSubCat] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const naviagte = useNavigate();

  React.useEffect(() => {
    getcate();

    // byCategory
  }, []);
  const move=(id)=>{
    naviagte("/Quiz/"+id)
  }
  const getcate = async () => {
    try {
      const subCats = {};
      setloading(true);

      let result = await SubCategory.getSubCategory();
      result.subcategory.forEach((element) => {
        if (subCats[element.categoryId.name]) {
          subCats[element.categoryId.name].push(element);
        } else {
          subCats[element.categoryId.name] = [element];
        }
      });

      setSubCat(subCats);

      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };
  return (
    <div className={`py-5 ${classes.maincategory}`}>
      <div className={`card ${classes.topcard}`}>
        <div className={classes.toptitle}>
          <h1>Palmist Categories</h1>
        </div>
      </div>
      <div className="col">
      {Object.entries(subCat).map(([k, v])=>
        <>
          <div className={`card ${classes.categorycard}`}>
            <div className="card-body">
              <div className="row cardrow">
                <div className="col-md-4">
                  <div className={classes.centeringdiv}>
                    <i className="fa fa-scissors"></i>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={classes.centeringdiv}>
                    <h1>{k}</h1>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={classes.centeringdiv}>
                    <button
                      className={`btn ${classes.dropdownbutton}`}
                      type="button"
                      data-toggle="collapse"
                      data-target={`#${k}`}
                    >
                      <i className="fa-regular fa-circle-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {v.map((value)=>
          <div className="collapse" id={k}>
            <div className={`card ${classes.collapcard}`}>
              <div className="col">
                <div className={` row ${classes.collapeRow} `}>
                  <div className="col-md-6">
                    <h3>{value.name}</h3>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      onClick={()=>move(value._id)}
                      className={` btn ${classes.quizbtn} `}
                    >
                      Take Quiz <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </>
      )}
      </div>
    </div>
  );
};

export default PCategory;
