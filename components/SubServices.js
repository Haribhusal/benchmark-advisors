import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleSubService from "./SingleSubService";
import { useRouter } from "next/router";

const SubServices = ({ slug }) => {
  const [subServicesData, setSubServiceData] = useState();

  useEffect(() => {
    axios
      .get(`https://benchmark.promotingnepal.com/api/sub-service/${slug}`)
      .then((response) => {
        const allServices = response.data.data;
        setSubServiceData(allServices);
      });
  }, []);

  return (
    <div className="row py-3">
      {subServicesData?.map((item) => (
        <SingleSubService
          id={item.id}
          slug={item.slug}
          title={item.title}
          key={item.id}
          howWorks={item.how_works}
        />
      ))}
    </div>
  );
};

export default SubServices;
