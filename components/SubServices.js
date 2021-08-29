import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";

const SubServices = ({ slug }) => {
  console.log(slug);
  // sub

  const subservices = async () => {
    const response = await fetch(
      `https://benchmark.promotingnepal.com/api/sub-service/${slug}`
    );
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("subServicesData", subservices);
  if (error) return "An error occured";
  if (!data) return "";
  const subServicesData = data.data;

  return (
    <div className="row py-3">
      {subServicesData.map((item) => (
        <div className="col-sm-4 mb-3">
          <Link href={`/services/${item.slug}`} passHref>
            <a>
              <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                <div className="icon">
                  <img src="/icons/right-arrow.svg" alt="" className="" />
                </div>
                <div className="text font_p f15">{item.title}</div>
                <div className=" arrow">
                  <img src="/icons/right-arrow.svg" alt="" className="" />
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubServices;
