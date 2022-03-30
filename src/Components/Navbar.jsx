import React from "react";
import { NavLink } from "react-router-dom";
 import "../index.css";
export default function Navbar() {
  return (
    <>
      {/* <header className="bg-gray-800 md:sticky top-0 z-10"> */}
      <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-12 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light navbar-sticky-top">
     <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Question Bank</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>   
</div>
</div>
</div>
      {/* </header> */}

      {/* <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-12 mx-auto">
    <nav class="navbar navbar-expand-lg navbar-light navbar-sticky-top">
     <div class="container-fluid">
    <NavLink class="navbar-brand" to="#">Question Bank</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>   
</div>
</div>
</div>  */}
      {/* <div class=" container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand">Question Bank</a>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </>
  );
}
