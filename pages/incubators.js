import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import OurStory from "../components/OurStory";

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
        className="py-5"
      >
        <section className="iconImage py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 d-flex align-items-center">
                <div className="textwrapper">
                  <div className="subtitle f14 text-muted">Incubators</div>
                  <h3 className="title font_p text_big mb-5">
                    Incubators and Accelerators
                  </h3>
                  <p className="text f14 my-3">
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="imagewrapper text-center">
                  <Image
                    src="/images/investment-banker.png"
                    height={400}
                    width={350}
                    priority
                  ></Image>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <h3 className="title">
                  Incubators and Accelerators Revealing soon...
                </h3>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-sm-12">
                <div className="textwrapper">
                  <div className="font_p f19 ">115 Total Investors</div>
                </div>
              </div>
            </div> */}

            {/* <div className="row">
              <div className="col-sm-12">
                <div className="textwrapper my-3">
                  <div className="subtitle f14 fw100 text-muted">
                    Top Investors
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="row">
              <div className="col-sm-4">
                <div className="bankerwrapper bg_white rounded_medium">
                  <div className="invested">Rs. 20,00,000</div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/500X300"
                      className="img-fluid rounded_medium"
                      alt=""
                    />
                  </div>
                  <div className="details p-4">
                    <div className="shortdetail">
                      <div className="name">
                        <h3 className="title font_p f18 mb-2">
                          Hritesh Kishor
                        </h3>
                      </div>
                      <div className="designation">
                        <p className="text-muted mb-0 f14">
                          CEO at Tesla Pvt. Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="row">
              <div className="col-sm-12">
                <div className="textwrapper my-3">
                  <div className="subtitle f14 fw100 text-muted">
                    Other Investors
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="otherInvestors">
              <div className="row ">
                <div className="col-sm-3">
                  <div className="investorwrapper bg_white rounded_medium">
                    <div className="invested">Rs. 20,00,000</div>
                    <div className="image">
                      <img
                        src="https://via.placeholder.com/500X300"
                        className="img-fluid rounded_medium"
                        alt=""
                      />
                    </div>
                    <div className="details p-4">
                      <div className="shortdetail">
                        <div className="name">
                          <Link href="#">
                            <a className="link text_t">
                              <h3 className="title font_p f18 mb-2">
                                Hritesh Kishor
                              </h3>
                            </a>
                          </Link>
                        </div>
                        <div className="designation">
                          <p className="text-muted mb-0 f14">
                            CEO at Tesla Pvt. Ltd.
                          </p>
                        </div>
                      </div>
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
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
