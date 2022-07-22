import React from "react";
import daiict from "../image/daiict.png";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div>
                        <Link to="/" className="logo">
                            <img src={daiict} alt="" />
                        </Link>
                    </div>
                    <div className="collapse">
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="nav-item dropdown-submenu">
                                <a>
                                    Why MnC at DAIICT?
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content">
                                        <Link to="/info">MnC Info</Link>
                                    </div>
                                    <div className="dropdown-content">
                                        <Link to="/course">Course Curricdivum</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-item">
                                <Link to="/amc">AMC</Link>
                            </div>
                            <div className="nav-item dropdown-submenu">
                                <a>
                                    Students
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content">
                                        <Link to="/students">Current Student</Link>
                                    </div>
                                    <div className="dropdown-content">
                                        <Link to="/alumni">Alumni</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-item">
                                <a href="#">Admin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ padding: 60 }}></div>
        </>
    );
};

export default NavBar;
