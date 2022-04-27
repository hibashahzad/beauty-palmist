import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import beautyService from "../../Services/services/Servicesbeauty";
import { urlImage } from "../../Services/url";
import { error } from "../../utilties/Messagehandler";
import classes from "./ServiceList.module.css";
const ServiceList = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [subCat, setService] = React.useState([]);
  const [ori, setOri] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const SingleService = (name, val) => {
    navigate(name, { state: { val } });
  };

  React.useEffect(() => {
    getcate();

    // byCategory
  }, [id]);
  const getcate = async () => {
    try {
      setloading(true);
      let result = await beautyService.getService(id);
      console.log(result);
      setService(result.userServices);
      setOri(result.userServices);
      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };
  const filter = (name) => {
    if (name !== "All") {
      console.log(name);
      setService(ori.filter((fil) => name == fil.ServiceType));
    } else {
      setService([...ori]);
    }
  };
  return (
    <div className={`${classes.width} container-fluid`}>
      <div className="row">
        <div className={`col-md-3 ${classes.main}`}>
          <div className="shadow-lg pt-4 rounded">
            <h1 className="py-3">Sort By Price Range</h1>
            <div className="shadow-lg bg-black py-5 rounded">
              <h2 className={classes.range} onClick={() => filter("Luxury")}>
                LUXERY
              </h2>
              <h2
                className={classes.range}
                onClick={() => filter("Affordable")}
              >
                Affordable
              </h2>
              <h2 className={classes.range} onClick={() => filter("LowCost")}>
                LowCost
              </h2>
              <h2 className={classes.range} onClick={() => filter("All")}>
                All Ranges
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {subCat.length > 0 ? (
            subCat.map((val) => (
              <div className="row my-3">
                <div className={`col-md-9 ${classes.sectionset}`}>
                  <div className="row gy-2">
                    <div className="col-1 fw-bold">1</div>
                    <div className="col-8 fw-bold">{val.name}</div>
                    <div className="col-3">
                      <button
                        onClick={() => SingleService("/SingleService", val)}
                        class={`btn btn-primary ${classes[`login-btn`]}`}
                      >
                        View <i class="fa fa-arrow-right ps-2"></i>
                      </button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-11">
                      {val.BussnesId?.name || val.userid.name} Services
                    </div>
                    <div className="col-1"></div>
                    <div className="col-11 fst-italic text-muted">
                      {val.detail}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <img
                    className={`${classes.circle} m-auto text-center`}
                    src={`${urlImage}${val.image}`}
                  />
                </div>
              </div>
            ))
          ) : (
            <h3 style={{ textAlign: "center" }}>No Services</h3>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ServiceList;
