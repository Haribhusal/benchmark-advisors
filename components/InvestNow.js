import React from "react";
import Image from "next/image";
import Link from "next/link";
import Startup from "../components/Startup";

const InvestNow = () => {
  return (
    <section className="howitworks py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-6">
            <div className="titlewrapper">
              <h3 className="title font_p">Invest Now</h3>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-end align-items-end">
            <div className="textwrapper ">
              <button className="btn btn_p_dim rounded_big  text_p py-2 px-3">
                View all
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="startupGrid">
              <Startup />
              <Startup />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestNow;
