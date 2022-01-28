import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Overlay,Button,Tooltip,OverlayTrigger} from 'react-bootstrap';

const Navbar = (props) => {
  const [theemMode, setTheemMode] = useState("Enable dark mode");
  const mode = () => {
    var element = document.body;
    var textInput = document.getElementById("myText");
    element.classList.toggle("dark");
    textInput.classList.toggle("dark");
    if (theemMode == "Enable dark mode") {
      setTheemMode("Enable light mode");
      var navbarmode = "dark";
    } else if (theemMode == "Enable light mode") {
      setTheemMode("Enable dark mode");
      var navbarmode = "light";
    }
  };
  /////////
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {theemMode}
    </Tooltip>
  );
  
 
  

  //////////
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-{navbarmode} bg-{navbarmode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./logo.svg" />
        </Link>

        <Link className="nav-link nav-item" to="/">
          Home
        </Link>
        <Link className="nav-link nav-item" to="/about">
          About
        </Link>
      </div>

      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="checkbox" onClick={mode}>
      
        <div className="form-check form-switch ">
        <input
            className="form-check-input btn-lg"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            />
            </div>
        </Button>
    </OverlayTrigger>
    </nav>
  );
};
export default Navbar;
