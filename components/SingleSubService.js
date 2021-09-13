import React from "react";
import Link from "next/link";

const SingleSubService = ({ slug, title }) => {
  return (
    <div className="col-sm-4 mb-3">
      <Link href={`/services/${slug}`} passHref>
        <a key={slug}>
          <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
            <div className="icon">
              <i className="las la-arrow-right"></i>
            </div>
            <div className="text font_p f15">{title}</div>
            <div className=" arrow">
              <i className="las la-arrow-right"></i>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SingleSubService;
