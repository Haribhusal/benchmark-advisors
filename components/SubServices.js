import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import SingleSubService from "./SingleSubService";

const SubServices = ({ slug, subServiceSlug }) => {
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
  console.log(subServicesData);

  return (
    <div className="row py-3">
      {subServicesData.map((item) => (
        <SingleSubService slug={item.slug} title={item.title} />
      ))}
    </div>
  );
};

export default SubServices;
