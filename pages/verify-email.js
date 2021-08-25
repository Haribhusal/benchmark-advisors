import Image from "next/image";
import Link from "next/link";

export default function verifyEmail() {
  return (
    <>
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
        className="py-5 d-flex align-items-center"
      >
        <section className="iconImage w-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="imagewrapper text-center">
                  <Image
                    src="/images/verify-email.png"
                    height={500}
                    width={600}
                  ></Image>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-center">
                <div className="textwrapper">
                  <h3 className="title font_p text_big mb-5">
                    Verify Your Email Address
                  </h3>
                  <p className="text f14 my-3">
                    Please click on verify link on the mail that we’ve sent to
                    your email address
                  </p>

                  <p>
                    Didn't receive email?
                    <span className="text_t  ml-3">
                      <Link href="#">
                        <a
                          className="text_t font_p"
                          style={{ textDecoration: "underline" }}
                        >
                          Resend Verification Mail
                        </a>
                      </Link>
                    </span>
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
