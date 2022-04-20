import React from 'react';
import { urlImage } from './../../Services/url';
import classes from "../../Pages/SubCat/SubCat.module.css"
import { useNavigate } from 'react-router-dom';



const  SubCate=({val})=> {
    const [toogle,setToogle]=React.useState(false);
    let navigate = useNavigate();
    let view = (name) => {
        navigate(name);
      };
    return <div class="col-md-4  text-center flipY  ">
<div
  class={`card shadow p-3 mb-5 bg-white rounded ${classes.bordersset}`}
  data-t-show="1"
>
  <div class="card-body">
    <div class="card-img-top">
      <img
        className="adjustImage"
        src={urlImage + val.image}
        alt=""
      />
    </div>

    <h2 class={`card-title ${classes.head1}`}>{val.name}</h2>
    <p class="card-text text-muted py-2 fst-italic">
      {toogle?val.detail:val.detail.substring(0, 40)}
      <span className="team-tex4 " style={{cursor:"pointer",color:"pink"}} onClick={() => setToogle(!toogle)}>{toogle?` Show less`:` Show more...`}</span>
    </p>
    <button
      onClick={() => view("/List")}
      type="submit"
      class={`btn btn-primary ${classes[`login-btn`]}`}
    >
      View <i class="fa fa-arrow-right ps-2"></i>
    </button>
  </div>
</div>
</div>
}
export default SubCate;