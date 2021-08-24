import React, { Component, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

const JoinStartup = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("hey");

  const [activeForm, setActiveForm] = useState(1);
  const {
    startupName,
    startupCategory,
    startupSubcategory,
    provience,
    district,
    municipality,
    location,
    contactNumber,
    startupEmail,
    terms,
    personFirstName,
    personLastName,
    personContact,
    personEmail,
    personAddress,
    doc1,
    doc2,
    doc3,
  } = props;
  return (
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
      <section className="py-5 joinstartup">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1 */}

                {activeForm == 1 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Startup Details</h3>
                          <p className="text-muted small">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt repudiandae quo.
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="step step1">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup's Name
                            </label>
                            <input
                              {...register("startupName", {
                                required: true,
                              })}
                              type="text"
                              className="form-control"
                              placeholder="Startup Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup Category
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              {...register("startupCategory", {
                                required: true,
                              })}
                            >
                              <option value="1">Category 1</option>
                              <option value="2">Category 2</option>
                              <option value="3">Category 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup Subcategory
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              {...register("startupSubcategory", {
                                required: true,
                              })}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter Provience
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              {...register("provience", {
                                required: true,
                              })}
                            >
                              <option value="1">Provience 1</option>
                              <option value="2">Provience 2</option>
                              <option value="3">Provience 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter District
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              {...register("district", {
                                required: true,
                              })}
                            >
                              <option value="1">District 1</option>
                              <option value="2">District 2</option>
                              <option value="3">District 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter Municipality
                            </label>
                            <select
                              name=""
                              id=""
                              className="form-control"
                              {...register("municipality", {
                                required: true,
                              })}
                            >
                              <option value="1">Municipality 1</option>
                              <option value="2">Municipality 2</option>
                              <option value="3">Municipality 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup's Location
                            </label>
                            <input
                              {...register("location", {
                                required: true,
                              })}
                              type="text"
                              className="form-control"
                              placeholder="Startup Location"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup's Contact Number
                            </label>
                            <input
                              {...register("contactNumber", {
                                required: true,
                              })}
                              type="text"
                              className="form-control"
                              placeholder="Startup Contact Number"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup's Email
                            </label>
                            <input
                              {...register("startupEmail", {
                                required: true,
                              })}
                              type="text"
                              className="form-control"
                              placeholder="Startup Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn_p"
                          onClick={() => setActiveForm(2)}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* step 2 */}

                {activeForm == 2 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Personal Details</h3>
                          <p className="text-muted small">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt repudiandae quo.
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Your First Name
                          </label>
                          <input
                            {...register("personFirstName", {
                              required: true,
                            })}
                            type="text"
                            className="form-control"
                            placeholder="Your First Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Your Last Name
                          </label>
                          <input
                            {...register("personLastName", {
                              required: true,
                            })}
                            type="text"
                            className="form-control"
                            placeholder="Your Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Contact Number
                          </label>
                          <input
                            {...register("personContact", {
                              required: true,
                            })}
                            type="tel"
                            className="form-control"
                            placeholder="Your Contact Number"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Your Email Address
                          </label>
                          <input
                            {...register("personEmail", {
                              required: true,
                            })}
                            type="email"
                            className="form-control"
                            placeholder="Your Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Your Address
                          </label>
                          <input
                            {...register("personAddress", {
                              required: true,
                            })}
                            type="tel"
                            className="form-control"
                            placeholder="Your Address"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={() => setActiveForm(1)}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="btn btn_p"
                          onClick={() => setActiveForm(3)}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* step 3 */}
                {activeForm == 3 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title  font_p">Startup Documents</h3>
                          <p className="text-muted small">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt repudiandae quo.
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Choose Document 1
                          </label>
                          <input
                            {...register("doc1", {
                              required: true,
                            })}
                            type="file"
                            className="form-control"
                            placeholder="Document 1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Choose Document 2
                          </label>
                          <input
                            {...register("doc2", {
                              required: true,
                            })}
                            type="file"
                            className="form-control"
                            placeholder="Document 2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Choose Document 3
                          </label>
                          <input
                            {...register("doc3", {
                              required: true,
                            })}
                            type="file"
                            className="form-control"
                            placeholder="Document 3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={() => setActiveForm(2)}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="btn btn_p"
                          onClick={() => setActiveForm(4)}
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeForm == 4 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Confirm Informations</h3>
                          <p className="text-muted small">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt repudiandae quo.
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="text-muted small">Startup Name</td>
                              <td>{startupName} Hey</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Category
                              </td>
                              <td>{startupCategory}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Subcategory
                              </td>
                              <td>{startupSubcategory}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">Provience</td>
                              <td>{provience}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">District</td>
                              <td>{district}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">Municipality</td>
                              <td>{municipality}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Location
                              </td>
                              <td>{location}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Contact Number
                              </td>
                              <td>{contactNumber}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Email Address
                              </td>
                              <td>{startupEmail}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-12">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="text-muted small">
                                Person First Name
                              </td>
                              <td>{personFirstName}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Last Name
                              </td>
                              <td>{personLastName}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Contact Number
                              </td>
                              <td>{personContact}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Email Address
                              </td>
                              <td>{personEmail}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Address
                              </td>
                              <td>{personAddress}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="col-sm-12">
                        <table className="table overflow-hidden">
                          <tbody>
                            <tr>
                              <td className="text-muted small">
                                Startup Document 1
                              </td>
                              <td>{doc1}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Document 2
                              </td>
                              <td>{doc2}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Document 3
                              </td>
                              <td className="overflow-hidden">{doc3}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group d-flex align-items-start">
                          <input
                            type="checkbox"
                            id="agreed"
                            className="m-0 mr-2"
                            placeholder="Startup Location"
                          />
                          <label htmlFor="agreed" className="small text-muted">
                            I accept to the
                            <Link href="#">
                              <a>Terms and Condition</a>
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between">
                        <button
                          type="button"
                          onClick={() => setActiveForm(3)}
                          className="btn btn-default"
                        >
                          Back
                        </button>
                        <input
                          type="Submit"
                          value="Confirm and Submit"
                          className="btn btn_p"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="col-sm-5 d-flex align-items-center">
              <div className="rightbarContent">
                <div className="imagewrapper">
                  <img
                    src="images/joinbenchmark.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="textwrapper text-center">
                  <h3 className="title font_p mb-3">Get Investments</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni quae temporibus tenetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinStartup;
