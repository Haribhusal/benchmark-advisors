import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { isEmpty } from "lodash";
import { Spinner } from "react-bootstrap";

const OnBoarding = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://benchmark.promotingnepal.com/api/services")
      .then((res) => {
        setServices(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="onboarding py-5 my-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlewrapper">
              <div className="subtitle text-uppercase f12 text-muted text-center">
                ON BOARDING
              </div>
            </div>
          </div>
        </div>
        {!isEmpty(services) ? (
          <div className="row">
            {services?.map((service) => (
              <div className="col-sm-4" key={service?.id}>
                <Link href={`service/${service?.slug}`} passHref>
                  <a>
                    <div className="actionwrapper text-center px-3 py-2">
                      <div className="imagewrapper">
                        <Image
                          src={service?.imagepath}
                          height={200}
                          width={250}
                          priority
                          alt="startup icon"
                        />
                      </div>
                      <div className="titlewrapper my-3">
                        <h3 className="title font_p f18">{service?.title}</h3>
                      </div>
                      <div className="detailwrapper">
                        <p className="detail text-muted f14">
                          {service?.description.slice(0, 130)}...
                        </p>
                      </div>
                      <div className="buttonwrapper d-flex justify-content-center">
                        <button className="btn_hovered">
                          <div className="label font_p">Explore</div>
                          <div className="icon">
                            <i className="las la-arrow-right"></i>
                          </div>
                          <div className="spacing"></div>
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="loader py-5 d-flex align-items-center justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        )}
      </div>
    </section>
  );
};

export default OnBoarding;
