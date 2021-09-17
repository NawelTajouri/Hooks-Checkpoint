import React from "react";
import "./Header.css";
import MyImage from "./artificial.png";
import ListIcon from "@material-ui/icons/List";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Avatar from "@material-ui/core/Avatar";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import im from "./cv.jpg";

function Header() {
  return (
    <div className="Navigation">
      <div>
      <div className="Avattar">
        <Avatar alt="Remy Sharp" src={im} variant="rounded" />
        
      </div>
    <div className="App-logo">
    <div className="Logo">
        <img src={MyImage} className="Image" />
        <h2>MovieStore</h2>
      </div>
    </div>
      

      <div className="Choice-button">
        <div className="Choice">
          <h5>
            <WhatshotIcon />
            Trend
          </h5>
          </div>
          <div className="Choice">
          <h5>
            <FiberNewIcon />
            New Movies
          </h5>
          </div>
          <div className="Choice">
          <h5>
            {" "}
            <ListIcon /> My List
          </h5>
          </div>
        </div>
        {/* <div className="Download">
          <h4 >
              {" "}
              <CloudDownloadIcon /> Download Movie
            </h4>
          </div> */}
      
      </div>
     
    </div>
  );
}

export default Header;
