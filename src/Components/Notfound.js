import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1 className="text-primary m-3">Oops!</h1> <br/>
      <h2>Error: 404 page not found <br /> You weren't supposed to see this</h2> <br/>
      <p>The page you're looking for no longer exists <br/> 
       Return to <Link to="/">home page</Link></p>
    </div>
  );
};

export default Notfound;
