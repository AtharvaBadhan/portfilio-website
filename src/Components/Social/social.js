import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const social = () => {
  return (
    <div fluid className="social-media-strip">
      <div className="justify-content-center align-items-center d-flex">
        <div md={1} className="text-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
        </div>   
        <div md={1} className="text-center">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div md={1} className="text-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </a>
        </div>
        <div md={1} className="text-center">
          <a href="mailto:example@example.com">
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default social;
