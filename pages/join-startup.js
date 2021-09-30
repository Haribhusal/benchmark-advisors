import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Link from "next/link";
import { getCompanyCategory, getStates, getDistricts, getMunicipalities } from "../actions/common";

const JoinStartup = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const [activeForm, setActiveForm] = useState(1);
  const [mystate, setMystate] = useState("");
  const [mydistrict, setMydistrict] = useState("");
  const dispatch = useDispatch();

  const { companyCategory, states, districts, municipalities } = useSelector(state => state.common);

  const stateOptions = states?.map(d => ({ value: d.id, label: d.province_name }))
  const districtOptions = districts?.filter(f => f.state_id === mystate)?.map(d => ({ value: d.id, label: d.district_name }))
  const municipalityOptions = municipalities?.filter(f => f.district_id === mydistrict)?.map(d => ({ value: d.id, label: d.municipality_name }))

  const onSubmit = e => console.log(e);

  useEffect(() => {
    dispatch(getCompanyCategory());
    dispatch(getStates());
    dispatch(getDistricts());
    dispatch(getMunicipalities());
  }, [dispatch]);

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
                            <Controller
                              name="state"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Select
                                  options={stateOptions}
                                  value={stateOptions?.find(c => c.value === value)}
                                  onChange={v => { onChange(v.value); setMystate(v.value) }}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">District</label>
                            <Controller
                              name="district"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Select
                                  options={districtOptions}
                                  value={districtOptions?.find(v => v.value === value)}
                                  onChange={c => { onChange(c.value); setMydistrict(c.value) }}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">Municipality</label>
                            <Controller
                              name="municipality"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Select
                                  options={municipalityOptions}
                                  value={municipalityOptions?.find(v => v.value === value)}
                                  onChange={c => { onChange(c.value)}}
                                />
                              )}
                            />
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
