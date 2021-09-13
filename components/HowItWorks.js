import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="howitworks py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="titlewrapper">
              <h3 className="title font_p">How it works</h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="textwrapper">
              <p className="text-muted f14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                magni ex suscipit numquam perferendis excepturi ullam libero
                cumque molestiae voluptatibus.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="videowrapper my-3">
              <div className="overlay"></div>
              <div className="thumbnail">
                <Image
                  src="/images/videobg.png"
                  height={350}
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
          <div className="col-sm-4">
            <div className="factswrapper my-3">
              <div className="row">
                <div className="col-sm-6">
                  <div className="fact p-3 mb-4">
                    <div className="counter">
                      <h3 className="title font_p">50 +</h3>
                    </div>
                    <div className="subtitle">
                      <div className="f14">Investors</div>
                    </div>
                    <div className="textwrapper mt-3">
                      <div className="f12 text-muted">From the Beginning</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="fact p-3 mb-4">
                    <div className="counter">
                      <h3 className="title font_p">50 +</h3>
                    </div>
                    <div className="subtitle">
                      <div className="f14">Investors</div>
                    </div>
                    <div className="textwrapper mt-3">
                      <div className="f12 text-muted">From the Beginning</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="fact p-3 mb-4">
                    <div className="counter">
                      <h3 className="title font_p">50 +</h3>
                    </div>
                    <div className="subtitle">
                      <div className="f14">Investors</div>
                    </div>
                    <div className="textwrapper mt-3">
                      <div className="f12 text-muted">From the Beginning</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="fact p-3 mb-4">
                    <div className="counter">
                      <h3 className="title font_p">50 +</h3>
                    </div>
                    <div className="subtitle">
                      <div className="f14">Investors</div>
                    </div>
                    <div className="textwrapper mt-3">
                      <div className="f12 text-muted">From the Beginning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
