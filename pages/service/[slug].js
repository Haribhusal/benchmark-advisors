import React from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import SubServices from "../../components/SubServices";

export default function SingleService() {
  const servicesFetcher = async () => {
    const response = await fetch(
      `https://benchmark.promotingnepal.com/api/services`
    );
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("services", servicesFetcher);
  if (error) return null;
  if (!data) return "";
  const services = data;

  const router = useRouter();
  const { slug } = router.query;
  const service = services.find((a) => a.slug === slug);
  if (!service) {
    return <div>Service Not Found</div>;
  }

  return (
    <>
      <Meta
        title={`${service.title} - Benchmark Advisors`}
        description={service.description}
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
        <section className="iconImage">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="imagewrapper text-center">
                  <Image
                    src={service.imagepath}
                    height={500}
                    width={600}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div className="textwrapper">
                  <div className="subtitle f14 text-muted">On Boarding</div>
                  <h3 className="title font_p text_big mb-5">
                    {service.title}
                  </h3>
                  <p className="text f14 my-3">{service.description}</p>
                </div>
              </div>
              <div className="col-sm-4 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                    Request for proposal{" "}
                    <span>
                      <img
                        src="/icons/right-arrow.svg"
                        alt=""
                        className="ml-2"
                      />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <SubServices slug={slug} />
          </div>
        </section>
      </main>
    </>
  );
}
