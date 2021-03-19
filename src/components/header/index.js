import React from "react";
import "./index.scss"
import logo from '@assets/svg/logo.svg'
export default function Headers() {
    return (
        <div className="header" >
            <img src={logo} className="logo" alt="logo" />
        </div>
    );
}