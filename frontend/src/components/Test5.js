import React, { useState } from 'react';
import "../styles/Admin.css";


import PaymentDetails from './PaymentDetails';




export default function Test5() {
    return (
        <div>
            <div className=" display-table mt-5 ">
                <div className="row display-table-row mt-5">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">


                        </div>
                        <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
                        <div className="navi">
                            <ul>
                                <li ><a href="/addemployee"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Employee Management</span></a></li>
                                <li><a href="/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Fuel Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Order Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Inventory Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Fuel queue Management</span></a></li>
                                <li><a href="/payment"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Payment Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Supplier Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Vehicle Management</span></a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">

                        <div className="row mb-4">
                            <header>
                                <div className="col-md-7">
                                    <nav className="navbar-default pull-left">
                                        <div className="navbar-header">
                                            <div className="header">

                                                {/*---- Include the above in your HEAD tag --------*/}

                                                {/* Navigation */}
                                                <div className="fixed-top">

                                                    <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear w-100 p-4">
                                                        <div className="container">
                                                            <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>Admin Panel
                                                            </a>
                                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                                                <span className="navbar-toggler-icon" />
                                                            </button>
                                                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                                                <ul className="navbar-nav ml-auto">
                                                                    <li className="nav-item active" style={{ marginLeft: "900px" }}>
                                                                        <a className="nav-link" href="/">Home</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" href="/login">Signin</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" href="/register">About Us</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>

                                </div>
                                <div className="col-md-5">
                                    <div className="header-rightside">

                                    </div>
                                </div>
                            </header>


                        </div>
                        <PaymentDetails/>
                    </div>
                </div>

            </div>

       </div>

    )
}