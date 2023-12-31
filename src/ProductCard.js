import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// / product component
function ProductCard({ product }) {
  const { Image, Name, Price, Description } = product;

  return (
    <div className="productCard">
      <img src={Image} className="productCard-img-top" alt="..." />
      <div className="productCard-body">
        <h5 className="productCard-title">{Name}</h5>
        <h4 className="productCard-title">{Price}</h4>
        <p className="productCard-text">{Description}</p>
        <Link to="#" className="btn btn-primary">
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
          <span> Add to cart</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
