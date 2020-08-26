import React from "react";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <a className="navbar-brand" href="/">
      Zoom Clone
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Join meeting
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Host meeting
          </a>
        </li>
      </ul>
      <span className="navbar-text">
      <a className="nav-link" href="/">
            Sign up
          </a>
      </span>
    </div>
  </nav>
);

export default Navbar;