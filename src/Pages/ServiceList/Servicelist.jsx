import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import quizAnswer from "../../Services/services/quizAnswer";
import beautyService from "../../Services/services/Servicesbeauty";
import { urlImage } from "../../Services/url";
import { error } from "../../utilties/Messagehandler";
import classes from "./ServiceList.module.css";
const ServiceList = () => {
  const navigate = useNavigate();
  const itemsPerPage = 6;
  let { id } = useParams();
  const [subCat, setService] = React.useState([]);
  const [ori, setOri] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const { state } = useLocation();
  // console.log("🚀 ~ state-----------", state);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const ispalmist = !id;
  // console.log("🚀 ~ ispalmist-----------", ispalmist);
  const SingleService = (name, val) => {
    navigate(name, { state: { val } });
  };

  React.useEffect(() => {
    if (ispalmist) {
      let recom = [];
      setloading(true);

      quizAnswer
        .getAnswer(state.SubCategoryId)
        .then((val) => {
          if (!val.quiz || !Array.isArray(val.quiz)) {
            throw new Error("Invalid quiz data");
          }

          // Filter and push matching answers
          state.ans.forEach((userans) => {
            recom.push(
              ...val.quiz.filter((fil) =>
                fil.Answer?.some(
                  (finding) =>
                    finding.answer === userans.answer &&
                    finding.name === userans.name
                )
              )
            );
          });

          // Validate recom array
          if (recom.length === 0) {
            console.warn("No matching recommendations found");
            setloading(false);
            return;
          }

          console.log("🚀 ~ Recom Data:", recom);

          // Validate and map ids
          let ids = recom
            .filter((valid) => valid.ServiceId) // Ensure ServiceId exists
            .map((valid) => valid.ServiceId._id);

          if (ids.length === 0) {
            console.warn("No valid ServiceIds found in recommendations");
            setloading(false);
            return;
          }

          console.log("🚀 ~ Service IDs:", ids);

          // Fetch recommendations
          return beautyService.recommendationServices({ ids });
        })
        .then((result) => {
          if (result?.userServices) {
            setService(result.userServices);
            setOri(result.userServices);
          } else {
            console.warn("No user services returned");
          }
          setloading(false);
        })
        .catch((error) => {
          console.error("Error in useEffect:", error.message);
          setloading(false);
        });
    } else {
      getcate();
    }
  }, [id]);

  React.useEffect(() => {
    // Fetch subCat from another resources.
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(subCat.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(subCat.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, subCat]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % subCat.length;

    setItemOffset(newOffset);
  };
  const getcate = async () => {
    try {
      setloading(true);
      let result = await beautyService.getService(id);
      console.log(result, 2);
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
        {!loading ? (
          <div className="col-md-9">
            {currentItems.length > 0 ? (
              <>
                {currentItems.map((val) => (
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
                          {val.BussnesId?.bussnessname || val.userid.name}{" "}
                          Services
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
                ))}

                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="previous"
                  renderOnZeroPageCount={null}
                />
              </>
            ) : (
              <h3 style={{ textAlign: "center" }}>No Services</h3>
            )}
          </div>
        ) : (
          <div
            class="spinner-border text-primary text-center centers"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default ServiceList;
