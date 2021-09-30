import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import SubServices from "../../components/SubServices";
import axios from "axios";
import { isEmpty } from "lodash";
import Image from "next/image";

import Skeleton from "react-loading-skeleton";

export default function SingleService() {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState();
  useEffect(() => {
    axios
      .get("https://benchmark.promotingnepal.com/api/services")
      .then((res) => {
        const data = res.data;
        const singleServiceData = data?.filter((a) => a.slug === slug);
        setService(singleServiceData[0]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [slug]);
  return (
    <>
      <Meta
        title={`${service?.title} - Benchmark Advisors`}
        description={service?.description}
      />
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {!isEmpty(service) ? (
          <section className="iconImage singleService">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 offset-sm-3">
                  <div className="imagewrapper heroImage text-center">
                    <Image
                      src={service?.imagepath}
                      height={200}
                      width={300}
                      layout="responsive"
                    />
                    {/* <img src={service?.imagepath} className="img-fluid" /> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="textwrapper">
                    <div className="subtitle f14 text-muted">On Boarding</div>
                    <h3 className="title font_p text_big mb-5">
                      {service?.title}
                    </h3>
                    <p className="text f14 my-3">{service?.description}</p>
                  </div>
                </div>
              </div>
              <SubServices slug={slug} />
            </div>
          </section>
        ) : (
          <div className="loader py-5">
            <div className="container">
              <div className="row py-4">
                <div className="col-sm-6 offset-sm-3 d-flex justify-content-center">
                  <Skeleton circle={true} height={150} width={150} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <Skeleton count={10} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
