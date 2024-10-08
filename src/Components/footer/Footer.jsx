import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="grid grid-cols-2" >
            <div className="h-10 text-white col-span-1">
            <p className="text-[#67748e]">
  © 2024, made with <span className="text-[20px]">{`\u2665`}</span> by <Link to='/' className="hover:text-[#5e72e4]">Creative Tim</Link> for a better web.
           </p>
            </div>
            <div className="col-span-1">ds</div>
      </div>
    );
}

export default Footer;
