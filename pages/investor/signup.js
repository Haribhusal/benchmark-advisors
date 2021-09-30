import React from "react";
import ReactDOM from "react-dom";

function Signup() {
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
      >
        <section
          className="py-5 d-flex align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="title">Registering Investors Coming Soon...</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Signup;
