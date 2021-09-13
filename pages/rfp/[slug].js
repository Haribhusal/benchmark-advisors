import React from "react";
import Main from "../../components/rfp/Main";
import { useRouter } from "next/router";

const RFPForm = () => {
  const router = useRouter();
  const { slug } = router.query;
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
        <section className="formdata">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form className="rfpform">
                  <Main slug={slug} />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RFPForm;
