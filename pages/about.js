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
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                    consectetur adipiscing elit lorem ipsum dolor sit amet,Lorem
                    ipsum dolor sit amet, ipsum dolo dipiscing elit, sed do
                    eiusmod tempor incididunt consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, ipsum dolo dipiscing elit, sed do
                    eiusmod tempor incididunt consectetur adipiscing elit lorem
                    ipsum dolor sit amet,Lorem ipsum dolor sit amet, ipsum dolo
                    dipiscing elit, sed do eiusmod tempor incididunt consectetur
                    adipiscing elit.Lorem ipsum dolor
                  </p>
                  <p className="text f14 my-3">
                    {" "}
                    sit amet, ipsum dolo dipiscing elit, sed do eiusmod tempor
                    incididunt consectetur adipiscing elit lorem ipsum dolor sit
                    amet,Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet,
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
