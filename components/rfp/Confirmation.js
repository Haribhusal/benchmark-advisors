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
    sub_service_id,
    company_category_id,
    state_id,
    district_id,
    municipality_id,
    description,
    is_client,
    files,
  } = values;

  values.name = fname + lname;
  values.sub_service_id = 1;

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
        console.log(response);
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
              <div className="col-sm-6">
                <div className="datawrapper">
                  <div className="data d-flex gap">
                    <div className="title">Name</div>
                    <div className="value text-muted mb-0">
                      {fname} {lname}
                      <span className="text-danger f12">{error?.name[0]}</span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">Email</div>
                    <div className="value text-muted mb-0">
                      {email}

                      <span className="text-danger f12">{error?.email[0]}</span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">Phone</div>
                    <div className="value text-muted mb-0">
                      {phone}

                      <span className="text-danger f12">{error?.phone[0]}</span>
                    </div>
                  </div>

                  <div className="data d-flex gap">
                    <div className="title">company_name</div>
                    <div className="value text-muted mb-0">
                      {company_name}

                      <span className="text-danger f12">
                        {error?.company_name[0]}
                      </span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">role</div>
                    <div className="value text-muted mb-0">
                      {role}
                      <span className="text-danger f12">{error?.role[0]}</span>
                    </div>
                  </div>

                  <div className="data d-flex gap">
                    <div className="title">state_id</div>
                    <div className="value text-muted mb-0">
                      {state_id}

                      <span className="text-danger f12">
                        {error?.state_id[0]}
                      </span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">district_id</div>
                    <div className="value text-muted mb-0">
                      {district_id}

                      <span className="text-danger f12">
                        {error?.district_id[0]}
                      </span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">municipality_id</div>
                    <div className="value text-muted mb-0">
                      {municipality_id}

                      <span className="text-danger f12">
                        {error?.municipality_id[0]}
                      </span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">description</div>
                    <div className="value text-muted mb-0">
                      {description}

                      <span className="text-danger f12">
                        {error?.description[0]}
                      </span>
                    </div>
                  </div>
                  <div className="data d-flex gap">
                    <div className="title">is_client</div>
                    <div className="value text-muted mb-0">{is_client}</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="datawrapper">
                  <div className="data d-flex gap">
                    <div className="title">files</div>
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
          <button className="btn btn-secondary" onClick={Previous}>
            Back
          </button>
          <button className="btn btn_p" onClick={submitForm}>
            Confirm and Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
