import React, { useState } from "react";

const TermsCheck = ({ nextStep }) => {
  const [enabled, setEnabled] = useState(false);
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="stepform">
      <div className="row">
        <div className="col-sm-12">
          <div className="textwrapper">
            <h3 className="title font_p">Overview</h3>
            <p className="text-muted">
              Please read the information below before moving to the next step
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12  ">
          <div className="bg_white infobar mb-3">
            <div className="row  px-4 py-3">
              <div className="col-sm-9 d-flex align-items-center">
                <div className="textwrapper">
                  <h5 className="title font_p">RFP Overview</h5>
                  <p className="text-muted f14 mb-0">
                    To respond to your request, this form (including any
                    personal information) may be shared with other Benchmark
                    Advisors member firms and transferred and/or stored across
                    borders
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="imagewrapper">
                  <img src="/images/proposal.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg_white infobar mb-3">
            <div className="row  px-4 py-3">
              <div className="col-sm-9 d-flex align-items-center">
                <div className="textwrapper">
                  <h5 className="title font_p">Processing Time </h5>
                  <p className="text-muted f14 mb-0">
                    A member of our team will be reviewing your request
                    immediately and will respond within five business days.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="imagewrapper">
                  <img
                    src="/images/contracts.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg_white infobar mb-3">
            <div className="row  px-4 py-3">
              <div className="col-sm-12 d-flex align-items-center">
                <div className="textwrapper">
                  <h5 className="title font_p">Terms and Conditions</h5>
                  <div className="input d-flex gap align-items-center">
                    <input
                      type="checkbox"
                      id="check"
                      onChange={() => setEnabled(!enabled)}
                    />
                    <label htmlFor="check" className="text-muted f14 mb-0">
                      I acknowledge that I have read and understood the terms
                      stated in the KPMG online privacy statement
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="buttonwrapper">
                {enabled ? (
                  <button className="btn btn_p" onClick={Continue}>
                    Next Step
                    <i className="las la-arrow-right ml-2"></i>
                  </button>
                ) : (
                  <button disabled className="btn btn_p" onClick={Continue}>
                    Next Step
                    <i className="las la-arrow-right ml-2"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCheck;
