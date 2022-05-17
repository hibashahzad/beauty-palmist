/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import classes from "./ServiceListS.module.css";
import Rating from "react-rating";
import { error, success } from "./../../../utilties/Messagehandler";
import beautyService from "./../../../Services/services/Servicesbeauty";
import { useAuth } from "../../../Services/provideMain";
import { urlImage } from "./../../../Services/url";
import ReactPaginate from "react-paginate";
const ServiceListS = () => {
  const { state } = useAuth();
  const navigate = useNavigate();
  const SingleService = (name, val) => {
    navigate(name, { state: { val } });
  };

  let { id } = useParams();
  const [subCat, setService] = React.useState([]);
  const itemsPerPage = 6;
  const [ori, setOri] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, [id]);
  const find = (e) => {
    setService(
      ori.filter((fil) =>
        fil.name.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };
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
  const remove = (id) => {
    beautyService
      .remServices(id)
      .then((value) => {
        setOri(ori.filter((rem) => rem._id != id));
        setService(ori.filter((rem) => rem._id != id));
        success("Delete Successfully");
      })
      .catch((e) => {
        error("Cannot be deleted at that Time");
      });
  };
  const getcate = async () => {
    try {
      setloading(true);
      let result = await beautyService.ServiceUser(state.user._id);

      setService(result.userServices);
      setOri(result.userServices);
      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };
  return (
    <div className={`${classes.width} container-fluid`}>
      <h1 class="my-5">Services</h1>
      <div class="row align-items-center">
        <div class=" col-sm-8">
          <form class="card card-sm form-control-borderless">
            <div class="card-body row no-gutters align-items-center">
              <div class="col-auto">
                <i class="fa fa-search h4 text-body"></i>
              </div>

              <div class="col">
                <input
                  onChange={find}
                  class="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search By Service Name"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-3">
          {" "}
          <button
            onClick={() => SingleService("/Seller/AddServices")}
            style={{
              backgroundImage: "linear-gradient(to right, #FBDFCF , white)",
            }}
            class={`btn  ${classes[`login-btn`]}`}
          >
            Add Services<i class="fa fa-plus  ps-2"></i>
          </button>
        </div>
      </div>
      {!loading ? (
        <div className="row">
          <div className="col-md-12">
            {currentItems.map((val, index) => (
              <div className="row my-3">
                <div
                  className={`col-md-10 ${classes.sectionset} shadow-lg rounded`}
                >
                  <div className="row gy-2">
                    <div className="col-1 fw-bold">{index}</div>
                    <div className="col-8 fw-bold">{val.name}</div>
                    <div className="col-3">
                      <button
                        onClick={() => SingleService("/SingleService", val)}
                        class={`btn btn-primary ${classes[`login-btn`]}`}
                      >
                        View Services<i class="fa fa-arrow-right ps-2"></i>
                      </button>
                    </div>
                    <div className="col-1 fw-bold"></div>
                    <div className="col-md-8">
                      <Rating
                        style={{ fontSize: "10px", color: "#FFCC00" }}
                        initialRating={4}
                        readonly
                        stop={5}
                        emptySymbol={[
                          "fa fa-star-o fa-2x low",
                          "fa fa-star-o fa-2x low",
                          "fa fa-star-o fa-2x medium",
                          "fa fa-star-o fa-2x medium",
                          "fa fa-star-o fa-2x high",
                          "fa fa-star-o fa-2x high",
                        ]}
                        fullSymbol={[
                          "fa fa-star fa-2x low",
                          "fa fa-star fa-2x low",
                          "fa fa-star fa-2x medium",
                          "fa fa-star fa-2x medium",
                          "fa fa-star fa-2x high",
                          "fa fa-star fa-2x high",
                        ]}
                      />
                      <span className="mx-2">0.0</span>
                      <span className="mx-2">0 Ratings</span>
                    </div>
                    <div
                      className="col-3 text-center"
                      style={{ fontSize: "24px" }}
                    >
                      <i
                        class="fas fa-edit mx-2 hov"
                        onClick={() =>
                          SingleService("/Seller/AddServices", val)
                        }
                      ></i>
                      <i
                        class="fa-solid fa-trash hov"
                        onClick={() => remove(val._id)}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex my-md-0 my-4  ">
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
          </div>
        </div>
      ) : (
        <div
          class="spinner-border text-primary text-center centers"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default ServiceListS;
