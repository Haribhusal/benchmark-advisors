import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Confirmation = ({ prevStep, nextStep, values, slug }) => {
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState();

  const {
    fname,
    lname,
    email,
    phone,
    company_name,
    role,
    state_id,
    district_id,
    municipality_id,
    description,
    is_client,
    files,
  } = values;

  values.name = fname + lname;
  values.sub_service_id = slug;

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios({
      method: "POST",
      url: "https://benchmark.promotingnepal.com/api/proposal/request",
      data: values,
    })
      .then(function (response) {
        setMessage(response.data.message);
        setLoading(true);
      })
      .catch(function (error) {
        setErrors(error.response.data.errors);
        console.log(error.response.data);
      });
  };
  return (
    <div className="contactInfo confirmData">
      <div className="row">
        <div className="col-sm-12">
          <div className="titlewrapper mb-3">
            <h5 className="title font_p">Review RFP</h5>
            <p className="text-muted mb-0 f14">
              Please read the information below before moving to the next step
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="bg_white p-3">
            <div className="row">
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Name</div>
                  <div className="value text-muted mb-0">
                    {fname} {lname}
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Email</div>
                  <div className="value text-muted mb-0">{email}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Phone</div>
                  <div className="value text-muted mb-0">{phone}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Company Name</div>
                  <div className="value text-muted mb-0">{company_name}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Your Role</div>
                  <div className="value text-muted mb-0">{role}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">State</div>
                  <div className="value text-muted mb-0">{state_id}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">District</div>
                  <div className="value text-muted mb-0">{district_id}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Muncipality</div>
                  <div className="value text-muted mb-0">{municipality_id}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">Description</div>
                  <div className="value text-muted mb-0">{description}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="data d-flex gap">
                  <div className="title labeltitle">is_client</div>
                  <div className="value text-muted mb-0">{is_client}</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="datawrapper">
                  <div className="data d-flex gap">
                    <div className="title labeltitle">files</div>
                    <div className="value text-muted mb-0">{files}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-sm-12">
          <div className="buttonwrapper d-flex gap">
            <button className="btn btn_p btn_p_dim" onClick={Previous}>
              <i className="las la-arrow-left ml-2"></i> Back
            </button>
            <button className="btn btn_p" type="submit">
              Confirm and Submit <i className="las la-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
