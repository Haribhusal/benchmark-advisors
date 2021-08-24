import React from "react";
import Image from "next/image";
import useSWR from "swr";

const servicesFetcher = async () => {
  const response = await fetch(
    "https://benchmark.promotingnepal.com/api/services"
  );
  // const response = await fetch(`${process.env.BASE_URL}setting`)
  const data = await response.json();
  return data;
};

const OnBoarding = () => {
  const { data, error } = useSWR("services", servicesFetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const services = data;
  return (
    <section className="onboarding py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlewrapper">
              <div className="subtitle text-uppercase f12 text-muted text-center">
                ON BOARDINg
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-sm-4" key={service.id}>
              <div className="actionwrapper text-center px-3 py-2">
                <div className="imagewrapper">
                  <Image
                    src={service.imagepath}
                    height={200}
                    width={250}
                    priority
                    alt="startup icon"
                  />
                </div>
                <div className="titlewrapper my-3">
                  <h3 className="title font_p f18">{service.title}</h3>
                </div>
                <div className="detailwrapper">
                  <p className="detail text-muted f14">
                    {service.description.slice(0, 130)}{" "}
                  </p>
                </div>
                <div className="buttonwrapper d-flex justify-content-center">
                  <button className="btn_hovered">
                    <div className="label font_p">Explore</div>
                    <div className="icon">
                      <img src="/icons/right-arrow.svg" alt="" />
                    </div>
                    <div className="spacing"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnBoarding;
