import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    <div className="landing">
          <div className="home-wrap">
            <div className="home-inner">
              <div className="home-bg"></div>
            </div>
          </div>
        </div>
        <div className="caption text-center" style={{ textAlign: "center" }}>
          <h1>
            Welcome to  <br />
            web-based attendance management system
          </h1>
          <Link
            className="btn btn-outline-light btn-lg get_started bg-transparent p-4 rounded-xl transition-all "
            to="/login"
          >
            Get Started
          </Link>
        </div>
      
    </>
  )
}

export default Home