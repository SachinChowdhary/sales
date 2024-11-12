// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import Font from "../Font";

const Footer = () => {
    return (
        <div className="m-4 grid gap-3 sm:justify-center sm:items-center md:justify-center md:items-center lg:flex lg:justify-between lg:m-3">
            <div className="h-10 text-white md:grid">
                <p className="text-[#67748e] font-sans text-center">
                    © 2024, made with <span className="text-[20px] font-sans">{`\u2665`}</span> by 
                    <Link to="/" className="hover:text-[#5e72e4] font-sans"> Creative Tim </Link> 
                    for a <span className="text-[#67748e] font-sans">better web.</span>
                </p>
            </div>

            <div className="grid grid-cols-2 items-center gap-4 sm:flex sm:gap-4 sm:justify-end md:grid-cols-4">
                <Font className="text-[#67748e] text-center sm:text-left">Creative Tim</Font>
                <Font className="text-[#67748e] text-center sm:text-left">About Us</Font>
                <Font className="text-[#67748e] text-center sm:text-left">Blog</Font>
                <Font className="text-[#67748e] text-center sm:text-left">License</Font>
            </div>
        </div>
    );
}

export default Footer;
