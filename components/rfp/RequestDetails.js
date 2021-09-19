import React from "react";

const RequestDetails = ({ prevStep, handleChange, nextStep, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="requestdetails">
      <div className="row">
        <div className="col-sm-12">
          <h5 className="title font_bold">Request Details</h5>
          <p className="text-muted f14 mb-3">
            Let us know how can we assist you
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group d-flex gap align-items-center">
            <input
              type="file"
              className="form-control"
              onChange={handleChange("files")}
              defaultValue={values.files}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="buttonwrapper gap d-flex">
            <button className="btn btn_p btn_p_dim" onClick={Previous}>
              <i className="las la-arrow-left ml-2"></i> Previous
            </button>
            <button className="btn btn_p" onClick={Continue}>
              Next Step <i className="las la-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
