import React from "react";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
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
                <div className="subtitle f14 text-muted">404 Error</div>
                <h3 className="title font_p text_big mb-5">Page Not Found</h3>
                <p className="text f14 my-3">
                  The page you are looking for might have been removed and had
                  it's name changed or is temporarily unavailable
                </p>
                <div className="buttonwrapper">
                  <Link href="/">
                    <a>
                      <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                        Go to Homepage
                        <span className="ms-3">
                          <i className="las la-arrow-right"></i>
                        </span>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="imagewrapper text-center">
                <Image
                  src="/images/404.svg"
                  height={400}
                  width={350}
                  priority
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
