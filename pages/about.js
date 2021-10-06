import Image from "next/image";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";

export default function About() {
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
              <div className="col-sm-4">
                <div className="imagewrapper text-center">
                  <Image
                    src="/images/advisory.png"
                    height={500}
                    width={600}
                  ></Image>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="textwrapper">
                  <div className="subtitle f14 text-muted">About us</div>
                  <h3 className="title font_p text_big mb-5">
                    We Are Benchmark Advisors
                  </h3>
                  <p className="text f14 my-3">
                    Benchmark Advisors (BMA) is an ambitious innovative company
                    with a proven track record of tackling the business
                    challenges and deliver solutions as required. With
                    experienced Chartered Accountants as Founders, Benchmark has
                    established itself as the prominent Business Consulting
                    &amp; Advisory Company through solid client service, proven
                    competitive strategies, and a group of people that bring
                    dynamic energy to the clients and to the company. We are
                    passionate about helping the entrepreneurs build their
                    startup by helping them develop relevant strategies and
                    Budgets.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="titlewrapper">
                  <h3 className="title font_p">Our Team</h3>
                </div>
                <div className="text">
                  <p className="text-muted">
                    We have a strong team of around 30 professionals (including
                    Chartered Accountants and MBA graduates) with rich
                    experience of Advisory &amp; Consulting of Financial
                    Institutions, Manufacturing industry, Real Estate, Trading
                    Industry, Government Sector, Development Sector, Startup
                    Sector, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="titlewrapper">
                  <h5 className="title my-3 font_p">
                    BRIEF PROFILE OF OUR CO-FOUNDERS
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="teamwrapper">
                  <div className="content">
                    <figure>
                      <img
                        src="/images/member1.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="infobox">
                      <h4 className="name font_p">Dipesh Shah</h4>
                      <h6 className="text-muted font_p">
                        Chartered Accountant
                      </h6>
                      <div className="textingo">
                        Mr. Shah is a member of Institute of Chartered
                        Accountants of Nepal. He has more than 10 years of
                        working experience in India and Nepal. He has worked
                        with corporates viz. Bharti Airtel Limited, Gurgaon and
                        First Data Corporation, Mumbai. He has good working
                        experience with startups in India viz. Flipkart and
                        Udaan and several startups in Nepal. He currently
                        supervises the Startup &amp; Investment Consulting and
                        Development Sector Consulting.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="teamwrapper">
                  <div className="content">
                    <figure>
                      <img
                        src="/images/member2.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="infobox">
                      <h4 className="name font_p">Mr. Bidur Luitel</h4>
                      <h6 className="text-muted font_p">
                        Chartered Accountant
                      </h6>
                      <div className="textingo">
                        Mr. Bidur is a member of Institute of Chartered
                        Accountants of Nepal. He has more than 11 years of
                        working experience in Nepal. He has worked as a
                        consultant and auditors of several Government
                        Corporations, Financial Institutions and corporate
                        houses of Nepal. He is the Business Advisory and
                        Government Consulting Head of our company.
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
