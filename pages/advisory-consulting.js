import Image from "next/image";
import Footer from "../components/Footer";
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
        <section className="iconImage">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="imagewrapper text-center">
                  <Image
                    src="/images/advisory.png"
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
                    Advisory and Consulting
                  </h3>
                  <p className="text f14 my-3">
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet,
                  </p>
                </div>
              </div>
              <div className="col-sm-4 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                    Request for proposal{" "}
                    <span>
                      <i className="las la-arrow-right"></i>
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="featurewrapper align-items-center px-4 py-3 d-flex gap">
                  <div className="icon">
                    <i className="las la-arrow-right"></i>
                  </div>
                  <div className="text font_p f15">Financial Analysis</div>
                  <div className=" arrow">
                    <i className="las la-arrow-right"></i>
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
