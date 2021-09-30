import { Tab } from "react-bootstrap";
import Image from "next/image";
import { Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";
import Link from "next/link";

export default function AdvisoryAndConsulting() {
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
            <div className="row mb-4">
              <div className="col-sm-7 d-flex align-items-center">
                <div className="textwrapper mt-5">
                  <div className="subtitle text-muted fw100 f14 text-uppercase">
                    STARTUPS
                  </div>

                  <h3 className="title font_p mb-0"> Startups</h3>
                  <p className="text f14 text-muted my-3">
                    lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet,
                  </p>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <Link href="join-startup">
                    <a>
                      <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                        Join Now
                        <span>
                          <i className="las la-arrow-right"></i>
                        </span>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* 
            <div className="row">
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300X150"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="profile">
                    <img
                      src="https://via.placeholder.com/100/100"
                      className="profile"
                      alt=""
                    />
                  </div>
                  <div className="details datawrapper p-4">
                    <div
                      className="shortdetail item"
                      style={{ borderBottom: "none" }}
                    >
                      <div className="name data-blurred">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">2018</div>
                        <div className="label text-muted f14">
                          Year of Incorporation
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">Yes</div>
                        <div className="label text-muted f14">
                          PAN/VAT Status
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Total Employees
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">No</div>
                        <div className="label text-muted f14">
                          Pending Legal Cases
                        </div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">N/A</div>
                        <div className="label text-muted f14">
                          Brand Name Registered
                        </div>
                      </div>
                      <div className="buttonwrapper mt-3">
                        <button className="btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big">
                          View Details
                          <i className="las la-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
           */}
          </div>
        </section>
      </main>
    </>
  );
}
