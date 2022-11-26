import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center my-24">
      <h1 className="text-head_white text-base small:text-3xl sm:text-7xl">
        <span className="block">Ooops! Page Not Found</span> Are You Lost
      </h1>
      <div>
        <Link className="text-grey_p text-lg" href="/" passHref>
            <a>Go Home</a>
         
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
