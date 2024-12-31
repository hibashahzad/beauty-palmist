import React from "react";
import classes from "./SubCat.module.css";
import { useNavigate } from "react-router-dom";
import SubCategory from "./../../Services/services/subCategorybyCategory";
import { useParams } from "react-router-dom";
import { error } from "./../../utilties/Messagehandler";
import { urlImage } from "./../../Services/url";
import SubCate from "./../../Components/SubCategory/SubCategory";
const SubCat = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [subCat, setSubCat] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, [id]);
  const getcate = async () => {
    try {
      setloading(true);
      let result = await SubCategory.getSubCategoryByCategory(id);
      console.log("🚀 ~ result----------- line 23", result);

      setSubCat(result.subcategory);
      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };

  let view = (name) => {
    navigate(name);
  };
  return (
    <div className={classes.main}>
      <div class="container">
        <div className={classes.header}>
          <div>
            <h1 className={`${classes.headbg}   fadeLeft `} data-t-show="0">
              {subCat.length > 0
                ? subCat[0].categoryId.name + " Categories"
                : "Categories"}
            </h1>
          </div>
        </div>
        {!loading ? (
          <div class="row" id="Services">
            {subCat.length > 0 ? (
              subCat.map((val) => <SubCate val={val} />)
            ) : (
              <div className="text-center">Not SubCategories Available</div>
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
    </div>
  );
};

export default SubCat;
