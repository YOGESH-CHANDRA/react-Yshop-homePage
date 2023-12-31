import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../Images/Logo/logo.png";
import "./Header.css";
import { useState } from "react";

function Header() {

const [search, setSearch]=useState("")

  function handleSubmit(e) {
    e.preventDefault();

    setSearch("");
  }
  return (
    <div className="header">
      {/* <!-- Header first section --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary px-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-light " to="">
            <img src={logo} alt="logo" srcset="" className="logo" />
            <span className="brand-name">
              <b>
                <i>
                  <span className="bname">Y</span>shop
                </i>
              </b>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="m-auto d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Product name, Category name, etc"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className="btn btn-outline-light search" type="submit">
                Search
              </button>
            </form>
            <div className="text-center my-2">
              <Link to="" className="btn text-center btn-outline-light login">
                Login
              </Link>
              <Link to="">
                <FontAwesomeIcon className="cart" icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Header second section --> */}
      <ul className="nav justify-content-center bg-warning-subtle border border-1">
        <li className="nav-item">
          <Link className="nav-link active" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            All Product
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Women
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="">
                All products
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="">
                Dresses
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="">
                Pants
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="">
                Skirts
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Men
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="">
                All Products
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="">
                Shirts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="">
                Pants
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="">
                Hoodies
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            Kids
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
