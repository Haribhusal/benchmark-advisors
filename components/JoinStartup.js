import React from "react";
import Image from "next/image";
import Link from "next/link";

const JoinStartup = () => {
  return (
    <section className="join">
      <div className="container">
        <div className="sliderItem">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center">
              <div className="imagewrapper w-100">
                <Image
                  height={100}
                  width=""
                  src="/images/joinbenchmark.png"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-sm-6 d-flex align-items-center">
              <div className="slider-left w-100">
                <div className="subtitle my-3 f12 text-muted text-uppercase">
                  ARE YOU AN STARTUP?
                </div>
                <div className="title_black">
                  <h2 className="title font_p text_big">
                    Join Benchmark as an Startup and Boost Your Business
                  </h2>
                </div>
                <div className="buttonwrapper mt-5">
                  <Link href="/join-startup">
                    <a>
                      <button className="btn btn_p rounded_big font_p text_w btn_big btn_text_p">
                        Get Started
                        <i className="las la-arrow-right"></i>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinStartup;
