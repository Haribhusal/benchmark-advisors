import { Tab } from "react-bootstrap";
import Image from "next/image";
import { Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";
import Link from "next/link";

export default function TechStartups() {
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

                  <h3 className="title font_p mb-0">Tech Startups</h3>
                  <p className="text f14 text-muted my-3">
                    lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet,
                  </p>
                  <div className="buttonwrapper">
                    <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                      Join Now{" "}
                      <span>
                        <i className="las la-arrow-right"></i>
                      </span>{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center justify-content-end">
                <div className="imagewrapper">
                  <img
                    src="/images/techstartups.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <h3 className="title font_p mb-5">51 Total Startups</h3>
              </div>
            </div>

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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>
                    <div className="datadetails portfolioData">
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">Investors</div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">$200K</div>
                        <div className="label text-muted f14">Fund Raised</div>
                      </div>
                      <div className="dataitem d-flex align-items-center justify-content-between">
                        <div className="data font_p f18">50+</div>
                        <div className="label text-muted f14">
                          Valuation Cap
                        </div>
                      </div>
                    </div>
                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="portfoliowrapper mb-4 bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/250X200"
                      style={{ height: "240px" }}
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
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">Clay Global</h3>
                      </div>
                      <div className="info text-muted f14">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, eum. Enim eius totam. Commodi, ab.
                      </div>
                    </div>

                    <div className="info text-muted f14">
                      New Baneshwor, Kathmandu
                    </div>

                    <ul className="tags">
                      <li className="tag">Communication</li>{" "}
                      <li className="tag">Design & Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-sm-4 offset-sm-4 d-flex align-items-center justify-content-center">
                <div className="loadingwrapper d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="label text_p font_p">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
