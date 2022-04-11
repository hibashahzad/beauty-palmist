import classes from "./PCategory.module.css";
const PCategory = () => {
  return (
    <div className={`py-5 ${classes.maincategory}`}>
      <div className={`card ${classes.topcard}`}>
        <div className={classes.toptitle}>
          <h1>Palmist Categories</h1>
        </div>
      </div>
      <div className="col">
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
                  <h1>Salons</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <button
                    className={`btn ${classes.dropdownbutton}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSalonCard"
                  >
                    <i className="fa-regular fa-circle-chevron-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse" id="collapseSalonCard">
          <div className={`card ${classes.collapcard}`}>
            <div className="col">
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Beauty</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Skin Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Hair Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${classes.categorycard}`}>
          <div className="card-body">
            <div className="row cardrow">
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <i className="fa fa-syringe"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <h1>Aesthetics</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <button
                    className={`btn ${classes.dropdownbutton}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseAestheticCard"
                  >
                    <i className="fa-regular fa-circle-chevron-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse" id="collapseAestheticCard">
          <div className={`card ${classes.collapcard}`}>
            <div className="col">
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Beauty</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Skin Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Hair Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${classes.categorycard}`}>
          <div className="card-body">
            <div className="row cardrow">
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <i className="fa fa-watch-fitness"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <h1>Fitness</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <button
                    className={`btn ${classes.dropdownbutton}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFitnessCard"
                  >
                    <i className="fa-regular fa-circle-chevron-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse" id="collapseFitnessCard">
          <div className={`card ${classes.collapcard}`}>
            <div className="col">
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Beauty</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Skin Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Hair Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${classes.categorycard}`}>
          <div className="card-body">
            <div className="row cardrow">
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <i className="fa fa-camera"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <h1>Photography</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className={classes.centeringdiv}>
                  <button
                    className={`btn ${classes.dropdownbutton}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsePhotographyCard"
                  >
                    <i className="fa-regular fa-circle-chevron-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse" id="collapsePhotographyCard">
          <div className={`card ${classes.collapcard}`}>
            <div className="col">
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Beauty</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Skin Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className={` row ${classes.collapeRow} `}>
                <div className="col-md-6">
                  <h3>Hair Treatments</h3>
                </div>
                <div className="col-md-6">
                  <button type="button" className={` btn ${classes.quizbtn} `}>
                    Take Quiz <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCategory;
