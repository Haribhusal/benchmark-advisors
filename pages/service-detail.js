import { Tab } from "react-bootstrap";
import Image from "next/image";
import { Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="py-5 investor_profile"
      >
        <section className="iconImage py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="imagewrapper mt-5 mb-3">
                  <img src="/icons/fdi.svg" className="" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 d-flex align-items-center">
                <div className="textwrapper">
                  <h3 className="title font_p text_big mb-0">
                    Financial Analysis
                  </h3>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                    Request For Proposal{" "}
                    <span>
                      <i className="las la-arrow-right"></i>
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="serviceDetails">
              <div className="row">
                <div className="col-sm-9">
                  <p className="text f14 text-muted my-3">
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>

            <div className="serviceDetails">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="title my-4 font_p">How it Works?</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p className="text f14 text-muted my-3">
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>

            <div className="features">
              <div className="row">
                <div className="col-sm-12">
                  <div className="titlewrapper text-center">
                    <h3 className="title my-4 font_p">Features</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="servicefeatures text-center">
                    <div className="img text-center">
                      <img
                        src="/images/startup.png"
                        style={{ height: "150px" }}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="titlewrapper">
                      <h4 className="title mb-3 font_p">Feature 1</h4>
                      <p className="text-muted f14">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Totam nulla ducimus libero sit sapiente voluptate
                        ipsa molestiae? Explicabo, modi maxime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="servicefeatures text-center">
                    <div className="img text-center">
                      <img
                        src="/images/advisory.png"
                        style={{ height: "150px" }}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="titlewrapper">
                      <h4 className="title mb-3 font_p">Feature 1</h4>
                      <p className="text-muted f14">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Totam nulla ducimus libero sit sapiente voluptate
                        ipsa molestiae? Explicabo, modi maxime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="servicefeatures text-center">
                    <div className="img text-center">
                      <img
                        src="/images/consulting.png"
                        style={{ height: "150px" }}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="titlewrapper">
                      <h4 className="title mb-3 font_p">Feature 1</h4>
                      <p className="text-muted f14">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Totam nulla ducimus libero sit sapiente voluptate
                        ipsa molestiae? Explicabo, modi maxime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="keycontacts">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="title my-4 font_p">Key Contacts</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="contactWrapper bg_white d-flex">
                    <div className="image">
                      <img src="https://via.placeholder.com/200x200" alt="" />
                    </div>
                    <div className="d-flex align-items-center p-4">
                      <div className="">
                        <h5 className="name title font_p">Dr. Shyam Basnet</h5>
                        <p className="text-muted mb-3 f14">
                          Assistant at Benchmark
                        </p>
                        <div className="contacts">
                          <div className="item text-muted f14">
                            <img
                              src="/icons/risk.svg"
                              className="icon mr-2"
                              alt=""
                            />{" "}
                            01- 4112093, 4112546
                          </div>
                          <div className="item text-muted f14">
                            <img
                              src="/icons/risk.svg"
                              className="icon mr-2"
                              alt=""
                            />{" "}
                            info@techcaresoft.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="contactWrapper bg_white d-flex">
                    <div className="image">
                      <img src="https://via.placeholder.com/200x200" alt="" />
                    </div>
                    <div className="d-flex align-items-center p-4">
                      <div className="">
                        <h5 className="name title font_p">Dr. Shyam Basnet</h5>
                        <p className="text-muted mb-3 f14">
                          Assistant at Benchmark
                        </p>
                        <div className="contacts">
                          <div className="item text-muted f14">
                            <img
                              src="/icons/risk.svg"
                              className="icon mr-2"
                              alt=""
                            />{" "}
                            01- 4112093, 4112546
                          </div>
                          <div className="item text-muted f14">
                            <img
                              src="/icons/risk.svg"
                              className="icon mr-2"
                              alt=""
                            />{" "}
                            info@techcaresoft.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
