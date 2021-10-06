import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import Link from "next/link";

import {
  getCompanyCategory,
  getDocumentCategory,
  getStates,
  getDistricts,
  getMunicipalities,
} from "../../actions/common";

import { proposalRequest } from "../../actions/proposal";

const schema = yup.object().shape({
  fname: yup.string().required("First Name is required"),
  lname: yup.string().required("Last Name is Required"),
  phone: yup
    .number()
    .positive()
    .integer()
    .required("Mobile Number is Required")
    .max(9999999999, "Mobile number must be 10 or less than 10 digits"),
  email: yup.string().email().required("Email is Required"),
  company_name: yup.string().required("Name of Company is Required"),
  role: yup.string().required("Role is Required"),
  description: yup.string().required("Startup Description is Required"),
});

const Main = () => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const Continue = () => {
    setActiveForm(activeForm + 1);
  };
  const handleChange = (e) => {
    e.target.checked ? setValue("is_client", 1) : setValue("is_client", 0);
  };
  const Previous = () => {
    setActiveForm(activeForm - 1);
  };

  const [activeForm, setActiveForm] = useState(1);
  const [successMessage, setSuccessMessage] = useState("You are done!");

  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const router = useRouter();
  const { slug } = router.query;

  const [mystate, setMystate] = useState("");
  const [mydistrict, setMydistrict] = useState("");
  const dispatch = useDispatch();

  const {
    companyCategory,
    documentCategory,
    states,
    districts,
    municipalities,
  } = useSelector((state) => state.common);

  const { isLoading, message, submitted } = useSelector(
    (state) => state.proposal
  );

  const categoryOptions = companyCategory?.map((d) => ({
    value: d.id,
    label: d.title,
  }));
  const documentOptions = documentCategory?.map((d) => ({
    value: d.id,
    label: d.title,
  }));
  const stateOptions = states?.map((d) => ({
    value: d.id,
    label: d.province_name,
  }));
  const districtOptions = districts
    ?.filter((f) => f.state_id === mystate)
    ?.map((d) => ({ value: d.id, label: d.district_name }));
  const municipalityOptions = municipalities
    ?.filter((f) => f.district_id === mydistrict)
    ?.map((d) => ({ value: d.id, label: d.municipality_name }));

  const onSubmit = (e) => {
    dispatch(proposalRequest(e, slug));
    setLoading(isLoading);
  };

  useEffect(() => {
    submitted ? setActiveForm(5) : null;
    message !== null ? setSuccessMessage(message) : null;
    dispatch(getCompanyCategory());
    dispatch(getDocumentCategory());
    dispatch(getStates());
    dispatch(getDistricts());
    dispatch(getMunicipalities());
    setLoading(false);
  }, [dispatch, submitted, message]);

  return (
    <section className="py-5 joinstartup">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form action="">
              {/* Step 1 */}
              {activeForm == 1 && (
                <div className="stepform">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="textwrapper">
                        <h3 className="title font_p">Overview</h3>
                        <p className="text-muted">
                          Please read the information below before moving to the
                          next step
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
                                To respond to your request, this form (including
                                any personal information) may be shared with
                                other Benchmark Advisors member firms and
                                transferred and/or stored across borders
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
                                A member of our team will be reviewing your
                                request immediately and will respond within five
                                business days.
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
                              <h5 className="title font_p">
                                Terms and Conditions
                              </h5>
                              <div className="input d-flex gap align-items-center">
                                <input
                                  type="checkbox"
                                  id="check"
                                  onChange={() => setEnabled(!enabled)}
                                />
                                <label
                                  htmlFor="check"
                                  className="text-muted f14 mb-0"
                                >
                                  I acknowledge that I have read and understood
                                  the terms stated in the KPMG online privacy
                                  statement
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
                              <button
                                disabled
                                className="btn btn_p"
                                onClick={Continue}
                              >
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
              )}

              {/* step 2 */}

              {activeForm == 2 && (
                <>
                  <div className="contactInfo">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper mb-3">
                          <h5 className="title font_p">Contact Information</h5>
                          <p className="text-muted mb-0 f14">
                            Please fill up the following form
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter your First Name"
                            {...register("fname")}
                          />
                          {
                            <span className="text-danger">
                              {errors.fname?.message}
                            </span>
                          }
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="lastname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Last Name"
                            {...register("lname")}
                          />
                          {
                            <span className="text-danger">
                              {errors.lname?.message}
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="eaddress">Email Address</label>
                          <input
                            type="email"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter your Email Address"
                            {...register("email")}
                          />
                          {
                            <span className="text-danger">
                              {errors.email?.message}
                            </span>
                          }
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="pnum">Phone Number</label>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter your Contact Number"
                            {...register("phone")}
                          />
                          {
                            <span className="text-danger">
                              {errors.phone?.message}
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="oname">Company / Organization</label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter your Company / Organization name"
                            {...register("company_name")}
                          />
                          {
                            <span className="text-danger">
                              {errors.company_name?.message}
                            </span>
                          }
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="lastname">Role</label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter your Role"
                            {...register("role")}
                          />
                          {
                            <span className="text-danger">
                              {errors.role?.message}
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="loadingdata">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group mb-3">
                                <label htmlFor="isector">
                                  Startup Industry Sector
                                </label>
                                <Controller
                                  name="company_category_id"
                                  control={control}
                                  render={({ field: { onChange, value } }) => (
                                    <Select
                                      placeholder="Select Industry"
                                      options={categoryOptions}
                                      value={categoryOptions?.find(
                                        (c) => c.value === value
                                      )}
                                      onChange={(v) => {
                                        onChange(v.value);
                                      }}
                                    />
                                  )}
                                />
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="form-group mb-3">
                                <label htmlFor="isector">
                                  Startup Address - State
                                </label>
                                <Controller
                                  name="state_id"
                                  control={control}
                                  render={({ field: { onChange, value } }) => (
                                    <Select
                                      placeholder="Select Province"
                                      options={stateOptions}
                                      value={stateOptions?.find(
                                        (c) => c.value === value
                                      )}
                                      onChange={(v) => {
                                        onChange(v.value);
                                        setMystate(v.value);
                                      }}
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group mb-3">
                                <label htmlFor="isector">
                                  Startup Address - District
                                </label>
                                <Controller
                                  name="district_id"
                                  control={control}
                                  render={({ field: { onChange, value } }) => (
                                    <Select
                                      placeholder="Select District"
                                      options={districtOptions}
                                      value={districtOptions?.find(
                                        (v) => v.value === value
                                      )}
                                      onChange={(c) => {
                                        onChange(c.value);
                                        setMydistrict(c.value);
                                      }}
                                    />
                                  )}
                                />
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="form-group mb-3">
                                <label htmlFor="isector">
                                  Startup Address - Municipality
                                </label>
                                <Controller
                                  name="municipality_id"
                                  control={control}
                                  render={({ field: { onChange, value } }) => (
                                    <Select
                                      placeholder="Select Municipality"
                                      options={municipalityOptions}
                                      value={municipalityOptions?.find(
                                        (v) => v.value === value
                                      )}
                                      onChange={(c) => {
                                        onChange(c.value);
                                      }}
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="isector">Description</label>
                          <textarea
                            className="form-control not_rounded_full"
                            rows="5"
                            {...register("description")}
                          ></textarea>
                          {
                            <span className="text-danger">
                              {errors.description?.message}
                            </span>
                          }
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group my-3 mb-3">
                          <input
                            type="checkbox"
                            name="client"
                            id="client"
                            onChange={handleChange}
                          />
                          <label htmlFor="client" className="f16 font_p pl-2">
                            I am Benchmark Client
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="buttonwrapper">
                          <button className="btn btn_p" onClick={Continue}>
                            Next Step{" "}
                            <i className="las la-arrow-right ml-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeForm == 3 && (
                <div className="contactInfo confirmData">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="titlewrapper mb-3">
                        <h5 className="title font_p">Review RFP</h5>
                        <p className="text-muted mb-0 f14">
                          Please read the information below before moving to the
                          next step
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
                                {getValues("fname")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">Email</div>
                              <div className="value text-muted mb-0">
                                {getValues("email")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">Phone</div>
                              <div className="value text-muted mb-0">
                                {getValues("phone")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">
                                Company Name
                              </div>
                              <div className="value text-muted mb-0">
                                {getValues("company_name")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">Your Role</div>
                              <div className="value text-muted mb-0">
                                {getValues("role")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">State</div>
                              <div className="value text-muted mb-0">
                                {getValues("state_id")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">District</div>
                              <div className="value text-muted mb-0">
                                {getValues("district_id")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">
                                Muncipality
                              </div>
                              <div className="value text-muted mb-0">
                                {getValues("municipality_id")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">
                                Description
                              </div>
                              <div className="value text-muted mb-0">
                                {getValues("description")}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="data d-flex gap">
                              <div className="title labeltitle">is_client</div>
                              <div className="value text-muted mb-0">
                                {getValues("is_client") == 1 ? "Yes" : "No"}
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
                        <button
                          className="btn btn_p btn_p_dim"
                          onClick={Previous}
                        >
                          <i className="las la-arrow-left ml-2"></i> Back
                        </button>
                        <button
                          className="btn btn_p btn_p"
                          onClick={handleSubmit(onSubmit)}
                        >
                          {!loading ? (
                            "Submit"
                          ) : (
                            <div className="loadingspinner d-flex gap align-items-center">
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden"></span>
                              </Spinner>
                              <div className="label">Submitting</div>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeForm == 5 && (
                <div>
                  <div className="messateTitle d-flex gap align-items-center mb-4">
                    <div className="img">
                      <img src="/images/celebration.png" alt="" />
                    </div>
                    <div className="label">
                      <h3 className="title font_p">{successMessage}</h3>
                    </div>
                  </div>
                  <div className="body">
                    <p className="text-muted">
                      Thank you. Your RFP submission has been received.
                    </p>
                    <div className="ref">
                      <div className="text-muted">
                        {/* Your Reference RFP ID is{" "} */}
                        <span className="font_p"></span>
                      </div>
                    </div>
                    <div className="buttonwwrapper mt-4">
                      <Link href="#">
                        <a>
                          <button className="btn btn_p">
                            {" "}
                            <i className="las la-home"></i> Go to Homepage
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
