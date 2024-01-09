import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="ms-auto">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="logo"
                        />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse rightConner" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            {/*   <li className="nav-item">
                                <Link className="nav-link" to={'/rooms'}>Room</Link>
                            </li>*/}

                          {/*  <li className="nav-item">
                                <Link className="nav-link" to={"/searchPage"}>
                                    Search for properties
                                </Link>
                            </li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to={"/resultPage"}>
                                    Result
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/ContactPage"}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
