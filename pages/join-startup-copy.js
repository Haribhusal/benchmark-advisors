import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signup } from "../actions/auth";

const JoinStartup = () => {
  const [document, setDocument] = useState();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.auth?.data);
  console.log(data);

  useEffect(async () => {
    dispatch(signup("user"));
    const response = await fetch(
      "https://benchmark.promotingnepal.com/api/document/list"
    );

    const data = await response.json();
    const documentNeeded = data.data;
    setDocument(documentNeeded);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [activeForm, setActiveForm] = useState(1);
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
                              {...register("startup_name")}
                              name="startup_name"
                              type="text"
                              className="form-control"
                              placeholder="Startup Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter your Startup Category
                            </label>
                            <select
                              name="company_category_id"
                              id=""
                              className="form-control"
                              {...register("company_category_id")}
                            >
                              <option value="1">Category 1</option>
                              <option value="2">Category 2</option>
                              <option value="3">Category 3</option>
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
                              name="province_id"
                              id=""
                              className="form-control"
                              {...register("province_id")}
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
                              {...register("district_id")}
                              name="district_id"
                              id=""
                              className="form-control"
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
                              {...register("municipality_id")}
                              name="municipality_id"
                              id=""
                              className="form-control"
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
                              type="text"
                              {...register("personal_address")}
                              name="personal_address"
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
                              {...register("contact_number")}
                              name="contact_number"
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
                              {...register("email")}
                              name="email"
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
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Your Name
                          </label>
                          <input
                            {...register("personal_name")}
                            name="personal_name"
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
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
                            {...register("personal_contact_number")}
                            name="personal_contact_number"
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
                            {...register("personal_email")}
                            name="personal_email"
                            type="email"
                            className="form-control"
                            placeholder="Your Email Address"
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
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            pan_status
                          </label>
                          <input
                            {...register("pan_status")}
                            name="personal_email"
                            type="email"
                            className="form-control"
                            placeholder="Your Email Address"
                          />
                        </div>
                      </div>
                    </div>

                    {document?.map((doc) => (
                      <div className="row" key={doc.id}>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Choose Document for {doc.title}
                            </label>
                            <input
                              {...register("files[]")}
                              name="files[]"
                              type="file"
                              className="form-control"
                              placeholder="Document 1"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

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
                          <h3 className="title font_p">Hey</h3>
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
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Category
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Subcategory
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">Provience</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">District</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">Municipality</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Location
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Contact Number
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Email Address
                              </td>
                              <td></td>
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
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Last Name
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Contact Number
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Email Address
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Address
                              </td>
                              <td></td>
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
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Document 2
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Document 3
                              </td>
                              <td className="overflow-hidden"></td>
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

                {activeForm == 5 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Thank you!</h3>
                          <p className="text-muted small">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt repudiandae quo.
                          </p>
                        </div>
                        <hr />
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

//  {
//   "startup_name": "Techcare",
//   "company_category_id": "1",
//   "startupSubcategory": "1",
//   "provience": "1",
//   "district": "1",
//   "municipality": "1",
//   "location": "test",
//   "contactNumber": "test",
//   "startupEmail": "bhusalhari89@gmail.com",
//   "terms": "1",
//   "personFirstName": "Hari",
//   "personLastName": "Bhusal",
//   "personContact": "9847458523",
//   "personEmail": "bhusalhari89@gmail.com",
//   "personAddress": "shankhamul",
//   "doc1": "",
//   "doc2": "",
//   "doc3": ""
// }
