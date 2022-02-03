import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1>About text analyzer</h1>
      <ul className="list-group list-group-flush text-start fs-4">
        <li className="list-item m-3">
          With the help of text analyzer you can alter your text to capital-case, small-case or to Title-case
        </li>
        <li className="list-item m-3">
        You can remove the excess space between the text
        </li>
        <li className="list-item m-3">
          Also you can copy and clear the text 
        </li>
        
        
      </ul>
    </div>
  );
};

export default About;
