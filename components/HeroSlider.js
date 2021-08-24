import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const HeroSlider = () => {
  const ArrowLeft = ({ onClick }) => {
    return (
      <div className="heroSliderIcons left" onClick={onClick}>
        <i className="las la-arrow-left"></i>
      </div>
    );
  };
  const ArrowRight = ({ onClick }) => {
    return (
      <div className="heroSliderIcons right" onClick={onClick}>
        <i className="las la-arrow-right"></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  return (
    <section className="hero d-flex align-items-center">
      <div className="container w-100">
        <div className="row">
          <div className="col-sm-12">
            <Slider {...settings}>
              <div className="sliderItem">
                <div className="row slider_mobile">
                  <div className="col-sm-7 d-flex align-items-center">
                    <div className="slider-left w-100">
                      <div className="iconwrapper">
                        <Image
                          src="/images/celebration.png"
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="subtitle my-3 f12 text-muted text-uppercase">
                        For Investors and Startups
                      </div>
                      <div className="title_black">
                        <h2 className="title font_p text_big">
                          Investing On Great Companies With Deserving Founders
                        </h2>
                      </div>
                      <div className="buttonwrapper mt-5">
                        <Link href="#">
                          <a>
                            <button className="btn btn_p rounded_big font_p text_w btn_big btn_text_p">
                              Get Started
                              <Image
                                src="/icons/right-arow.svg"
                                height={15}
                                width={15}
                              />
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="imagewrapper w-100">
                      <Image
                        height={100}
                        width=""
                        src="/images/Hands.png"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sliderItem">
                <div className="row slider_mobile">
                  <div className="col-sm-7 d-flex align-items-center">
                    <div className="slider-left w-100">
                      <div className="iconwrapper">
                        <Image
                          src="/images/celebration.png"
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="subtitle my-3 f12 text-muted text-uppercase">
                        For Investors and Startups
                      </div>
                      <div className="title_black">
                        <h2 className="title font_p text_big">
                          Investing On Great Companies With Deserving Founders
                        </h2>
                      </div>
                      <div className="buttonwrapper mt-5">
                        <Link href="#">
                          <a>
                            <button className="btn btn_p rounded_big font_p text_w btn_big btn_text_p">
                              Get Started
                              <Image
                                src="/icons/right-arow.svg"
                                height={15}
                                width={15}
                              />
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="imagewrapper w-100">
                      <Image
                        height={100}
                        width=""
                        src="/images/Hands.png"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sliderItem">
                <div className="row slider_mobile">
                  <div className="col-sm-7 d-flex align-items-center">
                    <div className="slider-left w-100">
                      <div className="iconwrapper">
                        <Image
                          src="/images/celebration.png"
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="subtitle my-3 f12 text-muted text-uppercase">
                        For Investors and Startups
                      </div>
                      <div className="title_black">
                        <h2 className="title font_p text_big">
                          Investing On Great Companies With Deserving Founders
                        </h2>
                      </div>
                      <div className="buttonwrapper mt-5">
                        <Link href="#">
                          <a>
                            <button className="btn btn_p rounded_big font_p text_w btn_big btn_text_p">
                              Get Started
                              <Image
                                src="/icons/right-arow.svg"
                                height={15}
                                width={15}
                              />
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="imagewrapper w-100">
                      <Image
                        height={100}
                        width=""
                        src="/images/Hands.png"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sliderItem">
                <div className="row slider_mobile">
                  <div className="col-sm-7 d-flex align-items-center">
                    <div className="slider-left w-100">
                      <div className="iconwrapper">
                        <Image
                          src="/images/celebration.png"
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="subtitle my-3 f12 text-muted text-uppercase">
                        For Investors and Startups
                      </div>
                      <div className="title_black">
                        <h2 className="title font_p text_big">
                          Investing On Great Companies With Deserving Founders
                        </h2>
                      </div>
                      <div className="buttonwrapper mt-5">
                        <Link href="#">
                          <a>
                            <button className="btn btn_p rounded_big font_p text_w btn_big btn_text_p">
                              Get Started
                              <Image
                                src="/icons/right-arow.svg"
                                height={15}
                                width={15}
                              />
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="imagewrapper w-100">
                      <Image
                        height={100}
                        width=""
                        src="/images/Hands.png"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
