import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import StepBar from "../../components/StepBar";
import { useRouter } from "next/router";

const requestForProposal = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("router", slug);
  const [activeForm, setActiveForm] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
        className="py-4 investor_profile"
      >
        <section className="content py-5 ">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title font_bold">
                  Submit Request for Proposal
                </div>
              </div>
            </div>
            <StepBar />
            <form className="rfpform" onSubmit={handleSubmit(onSubmit)}>
              {activeForm == 1 && (
                <div className="stepform">
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
                                other KPMG member firms and transferred and/or
                                stored across borders
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
                              <div className="input">
                                <input type="checkbox" id="check" />
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
                            <button
                              className="btn btn_p"
                              onClick={() => setActiveForm(2)}
                            >
                              Next Step
                              <i className="las la-arrow-right ml-2"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeForm == 2 && (
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
                          {...register("fname", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Enter your Last Name"
                          {...register("lname", { required: true })}
                        />
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
                          {...register("email", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="pnum">Phone Number</label>
                        <input
                          type="tel"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Enter your Contact Number"
                          {...register("phone", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="oname">Company / Organization</label>
                        <input
                          type="email"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Enter your Company / Organization name"
                          {...register("company_name", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="lastname">Role</label>
                        <input
                          type="tel"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Enter your Role"
                          {...register("role", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">Select Industry Sector</label>
                        <select
                          className="form-control"
                          {...register("company_category_id", {
                            required: true,
                          })}
                        >
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">Select Country</label>
                        <select
                          className="form-control"
                          {...register("country", { required: true })}
                        >
                          <option value="1">Nepal</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">State</label>
                        <select
                          className="form-control"
                          {...register("state_id", { required: true })}
                        >
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">District</label>
                        <select
                          className="form-control"
                          {...register("district_id", { required: true })}
                        >
                          <option value="1">Nepal</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">Municipality</label>
                        <select
                          className="form-control"
                          {...register("municipality_id", { required: true })}
                        >
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">District</label>
                        <select
                          className="form-control"
                          {...register("district_id", { required: true })}
                        >
                          <option value="1">Nepal</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                          <option value="1">Value 1</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group mb-3">
                        <label htmlFor="isector">Description</label>
                        <textarea
                          className="form-control not_rounded_full"
                          name=""
                          id=""
                          cols=""
                          rows="4"
                          {...register("description", { required: true })}
                        ></textarea>
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
                          {...register("is_client", { required: true })}
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
                        <button
                          className="btn btn_p"
                          onClick={() => setActiveForm(3)}
                        >
                          Next Step <i className="las la-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeForm == 3 && (
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
                        <input type="file" className="form-control" />
                        <input
                          type="file"
                          className="btn btn_p_dim rounded_big f14 text_p file_input"
                          value="Browse Files"
                        />
                      </div>
                      <div className="form-group d-flex gap align-items-center">
                        <input type="file" className="form-control" />
                        <button
                          type="button"
                          className="btn btn_p_dim rounded_big f14 text_p file_input"
                        >
                          Browse File
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="buttonwrapper">
                        <button
                          className="btn btn_p"
                          onClick={() => setActiveForm(4)}
                        >
                          Next Step <i className="las la-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeForm == 4 && (
                <div className="requestdetails">
                  <div className="row">
                    <div className="col-sm-12">
                      <h5 className="title font_bold">Review RFP</h5>
                      <p className="text-muted f14 mb-3">
                        Please read the information before moving to the next
                        step
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="box bg_white px-4 py-3 reviewbox">
                        Hey
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="buttonwrapper">
                        <button type="submit" className="btn btn_p">
                          Confirm and Submit{" "}
                          <i className="las la-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default requestForProposal;
