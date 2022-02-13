import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

const Navbar = () => {
  const [theemMode, setTheemMode] = useState("Enable dark mode");
  const mode = () => {
    var element = document.body;
    var textInput = document.getElementById("myText");
    element.classList.toggle("dark");
    textInput.classList.toggle("dark");

    if (theemMode === "Enable dark mode") {
      setTheemMode("Enable light mode");
    } else if (theemMode === "Enable light mode") {
      setTheemMode("Enable dark mode");
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {theemMode}
    </Tooltip>
  );

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between ">
        <div>
        <Link className="navbar-brand d-inline" to="/">
          <img src="./logo.svg" alt="logo" />
        </Link>

        <Link className="nav-link nav-item d-inline" to="/">
          Home
        </Link>
        <Link className="nav-link nav-item d-inline" to="/about ">
          About
        </Link>
        </div>
        <div className="d-flex justify-content-start">
          <OverlayTrigger placement="bottom" 
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
        <Button variant="checkbox" onClick={mode}>
          <div className="form-check form-switch">
            <input
              className="form-check-input btn-lg m-0"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" />
                </div>
              </Button>
            </OverlayTrigger>
            <span id="myText" className="m-0 pt-1">{theemMode}</span>
      </div>
      
      </div>
    </nav>
  );
};
export default Navbar;
