import React from "react";
import Javascript from "../../Images/Javascript.png";
import React2 from "../../Images/React.png";
import HTML5 from "../../Images/HTML5.png";
import CSS3 from "../../Images/CSS3.png";
import WIX from "../../Images/WIX.png";
import Bootstrap from "../../Images/Bootstrap.png";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    
    <div className="" style={{ marginTop: "150px" }} md="1">
        <div className="">
            <h1> Skills </h1>
        </div>
      <div
        className="d-flex justify-content-evenly align-items-center color-black"
        style={{ marginTop: "40px", backgroundColor: "rgb(223 227 230)", height: "200px"}}
      >
        <div className="col-md-1">
          <img
            variant="top"
            src={Javascript}
            alt="Skill 1"
            className="img-fluid w-50 h-auto"
          />
        </div>
        <div className="col-md-1">
          <img
            variant="top"
            src={React2}
            alt="Skill 2"
            className="img-fluid w-50 h-auto"
          />
        </div>
        <div className="col-md-1">
          <img
            variant="top"
            src={HTML5}
            alt="Skill 3"
            className="img-fluid w-50 h-auto"
          />
        </div>
        <div className="col-md-1">
          <img
            variant="top"
            src={CSS3}
            alt="Skill 4"
            className="img-fluid w-50 h-auto"
          />
        </div>
        <div className="col-md-1">
          <img
            variant="top"
            src={Bootstrap}
            alt="Skill 5"
            className="img-fluid w-50 h-auto"
          />
        </div>
        <div className="col-md-1">
        <img
          variant="top"
          src={WIX}
          alt="Skill 6"
          className="img-fluid w-50 h-auto "
        />
        </div>
      </div>
    </div>
  
  );
};

export default Skills;
