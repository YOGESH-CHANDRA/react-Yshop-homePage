import {Link} from "react-router-dom"

import "./Footer.css";

function Footer() {
  return (
    // Footer section
    <div className="footer">
      <div className="row text-center">
        <div className="col-md-3 col-sm-12 mb-2 ">
          <Link  to="#" className="d-block">
            <h3>Women</h3>
          </Link>
          <Link  to="#" className="d-block">
            Dresses
          </Link>
          <Link  to="#" className="d-block">
            Pants
          </Link>
          <Link  to="#" className="d-block">
            Skirts
          </Link>
        </div>
        <div className="col-md-3 col-sm-12 mb-2">
          <Link  to="#" className="d-block">
            <h3>Men</h3>
          </Link>
          <Link  to="#" className="d-block">
            Shirts
          </Link>
          <Link  to="#" className="d-block">
            Pants
          </Link>
          <Link  to="#" className="d-block">
            Hoodies
          </Link>
        </div>
        <div className="col-md-3 col-sm-12 mb-2">
          <Link  to="#" className="d-block">
            <h3>Kids</h3>
          </Link>
        </div>
        <div className="col-md-3 col-sm-12 mb-2">
          <Link  to="#" className="d-block">
            <h3>Links</h3>
          </Link>
          <Link  to="#" className="d-block">
            Home
          </Link>
          <Link  to="#" className="d-block">
            Login
          </Link>
          <Link  to="#" className="d-block">
            Contact
          </Link>
        </div>

        <hr />
        <h6 className="text-center">Copyright &copy;Yshop 2022-23 </h6>
      </div>
    </div>
  );
}

export default Footer;
