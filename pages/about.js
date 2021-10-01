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
          </div>
        </section>
      </main>
    </>
  );
}
