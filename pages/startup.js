import { Tab } from "react-bootstrap";
import Image from "next/image";
import { Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";
import React, { useEffect, useState } from "react";

export default function AdvisoryAndConsulting() {
  const [showTooltip, setShowTooltip] = useState(false);
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
        className="py-5"
      >
        <section className="iconImage py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 d-flex align-items-center">
                <div className="textwrapper mt-5">
                  <div className="subtitle f14 text-muted">STARTUPS</div>
                  <h3 className="title font_p text_big mb-0">Clay Global</h3>
                  <p className="text f14 text-muted my-3">
                    Please login as an investor to view the service details
                  </p>
                </div>
              </div>
              <div className="col-sm-4 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                    Invest Now{" "}
                    <span>
                      <i className="las la-arrow-right"></i>
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-sm-8 ">
                <div className="videowrapper">
                  <div className="overlay"></div>
                  <div className="thumbnail">
                    <Image
                      src="/images/videobg.png"
                      height={380}
                      width={800}
                      layout={"responsive"}
                      priority
                    />
                  </div>
                  <div className="playIcon">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="datawrapper bg_white p-4 bg_white rounded_medium shadow">
                  <ul className="">
                    <li className="item d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">
                        Year of Incorporation
                      </div>
                      <div className="info font_p f14">2018</div>
                    </li>
                    <li className="item  d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">
                        PAN/VAT Status
                      </div>
                      <div className="info font_p f14">YES</div>
                    </li>
                    <li className="item d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">
                        Total Imployees
                      </div>
                      <div className="info font_p f14">50+</div>
                    </li>
                    <li className="item d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">
                        Pending Legal Cases
                      </div>
                      <div className="info font_p f14">No</div>
                    </li>
                    <li className="item d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">
                        Brand Name Registered
                      </div>
                      <div className="info font_p f14">N/A</div>
                    </li>
                    <li className="item d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">
                        Nature of Business
                      </div>
                      <div className="info font_p f14 data-blurred">
                        Some Blurred Value
                      </div>
                    </li>
                    <li className="item d-flex align-items-center justify-content-between">
                      <div className="label fw700 text-muted f12">Industry</div>
                      <div className="info font_p f14">Design Agency</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row datawrapper datawrapper_single">
              <div className="col-sm-3 mt-4">
                <div className="factswrapper shadow rounded_medium bg_white p-4">
                  <div className="item">
                    <div className="label fw700 text-muted f12">Industry</div>
                    <div className="info font_p f14">Design Agency</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 mt-4">
                <div className="factswrapper shadow rounded_medium bg_white p-4">
                  <div className="item ">
                    <div className="label fw700 text-muted f12">
                      Nature of Business
                    </div>
                    <div className="info font_p f14 data-blurred">
                      Some Blurred Value
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 mt-4">
                <div className="factswrapper shadow rounded_medium bg_white p-4">
                  <div className="item">
                    <div className="label fw700 text-muted f12">Industry</div>
                    <div className="info font_p f14">Design Agency</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 mt-4">
                <div className="factswrapper shadow rounded_medium bg_white p-4">
                  <div className="item">
                    <div className="label fw700 text-muted f12">Industry</div>
                    <div className="info font_p f14">Design Agency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="tabwrapper py-4">
                  <Tabs
                    defaultActiveKey="product"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab
                      eventKey="product"
                      className=""
                      title="Product / Services & Market"
                    >
                      <div className="info text-muted f14">
                        Please log in as an investor to view the service details
                      </div>
                      <div className="row datawrapper datawrapper_single">
                        <div className="col-sm-4 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="servicewrapper">
                              <div className="titlewrapper d-flex align-items-center justify-content-between">
                                <div className="data-blurred">Some Data</div>
                                <div
                                  className="infoicon"
                                  onMouseEnter={() => setShowTooltip(true)}
                                  onMouseLeave={() => setShowTooltip(false)}
                                >
                                  <div className="icon">i</div>
                                  {showTooltip && (
                                    <div className="infodata">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Dicta illo consequatur
                                      quaerat?
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="factInfo mb-3 f14 text-muted">
                              Targeted Market:{" "}
                              <span className="fw600">Age Between 18-40</span>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">
                              <div className="info font_p f20">75%</div>
                              <div className="label fw700 text-muted f12">
                                Current Market Size
                              </div>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">
                              <div className="info font_p f20">95%</div>
                              <div className="label fw700 text-muted f12">
                                Potential Market Size
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="servicewrapper">
                              <div className="titlewrapper d-flex align-items-center justify-content-between">
                                <div className="data-blurred">Some Data</div>
                                <div
                                  className="infoicon"
                                  onMouseEnter={() => setShowTooltip(true)}
                                  onMouseLeave={() => setShowTooltip(false)}
                                >
                                  <div className="icon">i</div>
                                  {showTooltip && (
                                    <div className="infodata">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Dicta illo consequatur
                                      quaerat?
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="factInfo mb-3 f14 text-muted">
                              Targeted Market:{" "}
                              <span className="fw600">Age Between 18-40</span>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">
                              <div className="info font_p f20">75%</div>
                              <div className="label fw700 text-muted f12">
                                Current Market Size
                              </div>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">
                              <div className="info font_p f20">95%</div>
                              <div className="label fw700 text-muted f12">
                                Potential Market Size
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="servicewrapper">
                              <div className="titlewrapper d-flex align-items-center justify-content-between">
                                <div className="data-blurred">Some Data</div>
                                <div
                                  className="infoicon"
                                  onMouseEnter={() => setShowTooltip(true)}
                                  onMouseLeave={() => setShowTooltip(false)}
                                >
                                  <div className="icon">i</div>
                                  {showTooltip && (
                                    <div className="infodata">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Dicta illo consequatur
                                      quaerat?
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="factInfo mb-3 f14 text-muted">
                              Targeted Market:{" "}
                              <span className="fw600">Age Between 18-40</span>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">
                              <div className="info font_p f20">75%</div>
                              <div className="label fw700 text-muted f12">
                                Current Market Size
                              </div>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">
                              <div className="info font_p f20">95%</div>
                              <div className="label fw700 text-muted f12">
                                Potential Market Size
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="finfo" title="Financial Informations">
                      <div className="row datawrapper datawrapper_single">
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Total Capital Expenditure till date
                              </div>
                              <div className="info font_p f14">$900k</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item ">
                              <div className="label fw700 text-muted f12">
                                Looking for Fund
                              </div>
                              <div className="info font_p f14 data-blurred">
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Fund Raised till date
                              </div>
                              <div className="info font_p f14">$500k</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Fund Required
                              </div>
                              <div className="info font_p f14">$1,000,000</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Fund Injection Modality
                              </div>
                              <div className="info font_p f14">Pref Shares</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                ROE
                              </div>
                              <div className="info font_p f14">87%</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Payback Period
                              </div>
                              <div className="info font_p f14">5 Yrs</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Funding Round
                              </div>
                              <div className="info font_p f14">Series</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="laws"
                      title="Applicable Laws and Regulations"
                    >
                      <div className="row datawrapper datawrapper_single">
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Income Tax Act and Regulations
                              </div>
                              <div className="info font_p f14">N/A</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item ">
                              <div className="label fw700 text-muted f12">
                                VAT Act and Regulations
                              </div>
                              <div className="info font_p f14 data-blurred">
                                Yes
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Labor ACT and Regulations
                              </div>
                              <div className="info font_p f14">No</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                          <div className="factswrapper shadow rounded_medium bg_white p-4">
                            <div className="item">
                              <div className="label fw700 text-muted f12">
                                Companies ACT and Regulations
                              </div>
                              <div className="info font_p f14">Yes</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
