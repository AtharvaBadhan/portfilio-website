import React from "react";
import { Container} from "react-bootstrap";
import Skitti from '../../Images/Skitti.png';


const Selected = () => {
   
const projects = [
    {
      id: 1,
      title: "Project 1",
      image: Skitti,
      description: "Description of Project 1",
    },
  ];
  
 

  return (
    <Container style={{marginTop :'100px'}}>
      <h1>Selected Project</h1>
      <div className="d-flex justify-content-between align-items-center m-5">
      <div className="d-flex align-items-center m-5 custom-bg"> 
      <div className="">
        <h1 className="fs-3"> Skitti Dashboard</h1>
      <h1 className="fs-5 text-start p-4" style={{width: '90%'}}> The Skitti Admin Panel is a robust and user-friendly web-based control center designed to empower administrators with powerful tools and capabilities to efficiently manage various aspects of the Skitti project or application. 
        Tailored to meet the specific needs of Skitti, 
        this admin panel is your gateway to streamlined operations and data management.
        The Skitti Admin Panel boasts an intuitive and user-friendly interface, making it accessible to both technical and non-technical administrators. 
        Navigating through the features and functionalities is a breeze, allowing you to focus on your administrative tasks without any hassle. 
        </h1>
        </div>
      <img src={Skitti} alt='Project1'  className="col-3 rounded-2"/>
        
      </div>

        <div className="d-flex flex-wrap justify-content-center flex-column">
      <h2 className="fs-5">Other Projects</h2>
      <img src={Skitti} alt='Project1'  className="col-12 mb-4"/>
      <img src={Skitti} alt='Project1'  className="col-12 "/>
      </div>
      </div>
    </Container>
  );
};

export default Selected;
