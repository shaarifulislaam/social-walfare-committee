import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand fw-bolder ms-4" href="#">Social Walfare Committee</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item  mx-1">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item  mx-1">
          <a class="nav-link active" href="#">Persons</a>
        </li> 
        <li class="nav-item  mx-1">
          <a class="nav-link active" href="#">Overview</a>
        </li> 
        <li class="nav-item  mx-1">
          <a class="nav-link active" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-custom" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<h1 className="bg-light-custom fw-bolder p-2 text-center">Total Budget: $120 Million</h1>
     </div>
    );
};

export default Header;