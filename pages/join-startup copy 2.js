import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { getCompanyCategory } from "../components/api/Api";

const JoinStartup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [activeForm, setActiveForm] = useState(1);

  const [companyCategory, setCompanyCategory] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [mun, setMun] = useState();
  const [fiterState, setFilterState] = useState();
  const [updateMun, setUpdateMun] = useState();

  const [setisCalled] = useState(true);

  const onSubmit = async (data) => {
    await axios
      .post(`https://benchmark.promotingnepal.com/api/startup/signup`, data)
      .then((res) => {})
      .catch((err) => {});

    // Signup(data);
  };

  // district
  const districtfilter = district
    ?.filter((item) => item.state_id === Number(fiterState))
    .map((item) => {
      return item;
    });
  //mun
  const munfilter = mun
    ?.filter((item) => item.id === Number(updateMun))
    .map((item) => {
      return item;
    });
  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/company-category/list")
      .then((res) => {
        setCompanyCategory(res.data.data);
      });
  }, []);

  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/state/list")
      .then((res) => {
        setState(res.data.data);
      });
  }, []);

  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/district/list")
      .then((res) => {
        setDistrict(res.data.data);
      });
  }, []);

  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/municipality/list")
      .then((res) => {
        setMun(res.data.data);
      });
  }, []);

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
                        <div className="col-sm-6">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">
                              Select Industry Sector
                            </label>

                            {/*  */}
                            <select
                              className="form-control"
                              {...register("company_category_id")}
                            >
                              {companyCategory?.map((item) => (
                                <option value={item?.title} key={item?.id}>
                                  {item?.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">State</label>
                            <select
                              className="form-control"
                              onChange={(e) => setFilterState(e.target.value)}
                              defaultValue="hey"
                            >
                              {state?.map((item) => (
                                <option value={item?.id} key={item?.id}>
                                  {item?.province_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">District</label>
                            <select
                              className="form-control"
                              onChange={(e) => setUpdateMun(e.target.value)}
                            >
                              {districtfilter?.map((item) => (
                                <option value={item.id}>
                                  {item.district_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">Municipality</label>
                            <select className="form-control">
                              {munfilter?.map((item) => (
                                <option value={item.municipality_name}>
                                  {item.municipality_name}
                                </option>
                              ))}
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

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              pan_status
                            </label>
                            <select
                              id=""
                              className="form-control"
                              name="pan_status"
                              {...register("pan_status")}
                            >
                              <option value="1">yes</option>
                              <option value="0">no</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              pan_number
                            </label>

                            <input
                              {...register("pan_number")}
                              name="pan_number"
                              type="number"
                              className="form-control"
                              placeholder="Enter Pan Number"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              company_since
                            </label>

                            <input
                              {...register("company_since")}
                              name="company_since"
                              type="date"
                              className="form-control"
                              placeholder="Company Since"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              number_of_emplyee
                            </label>

                            <input
                              {...register("number_of_emplyee")}
                              name="number_of_emplyee"
                              type="number"
                              className="form-control"
                              placeholder="Number of Employees"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              password
                            </label>

                            <input
                              {...register("password")}
                              name="password"
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              password
                            </label>

                            <input
                              {...register("password_confirmation")}
                              name="password_confirmation"
                              type="password"
                              className="form-control"
                              placeholder="Password"
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

                {activeForm == 3 && (
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
                              <td>{startup_name}</td>
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
