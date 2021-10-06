import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { signup } from "../actions/auth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  getCompanyCategory,
  getDocumentCategory,
  getStates,
  getDistricts,
  getMunicipalities,
} from "../actions/common";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  startup_name: yup.string().required("Startup Name is Required"),
  contact_number: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid"),
  email: yup
    .string()
    .email("Must be Valid Email")
    .max(255)
    .required("Startup Email is Required"),
  pan_number: yup.number().positive().integer().required(),
  personal_name: yup.string().required(),
  personal_contact_number: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid"),
  personal_email: yup
    .string()
    .email("Must be Valid Email")
    .max(255)
    .required("Personal Email is Required"),
  personal_address: yup.string().required(),
  pan_status: yup.string().required(),
  company_since: yup.date().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must contain at least one uppercase letter, number and special character"
    ),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const JoinStartup = () => {
  const [successMessage, setSuccessMessage] = useState("You are done!");
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();

  const [activeForm, setActiveForm] = useState(1);

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

  const handleNext = () => {
    setActiveForm(2);
  };
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

  const { isLoading, message, signupsuccess } = useSelector(
    (state) => state.auth
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

  const handleOptionChange = (selectedOption) => {
    let array = [];
    selectedOption.map((item) => {
      array.push(item.value);
    });
    setValue("document_category_id", array);
  };

  const onSubmit = (e) => {
    dispatch(signup(e));
  };

  useEffect(() => {
    signupsuccess ? setActiveForm(4) : null;
    message !== null ? setSuccessMessage(message) : null;
    dispatch(getCompanyCategory());
    dispatch(getDocumentCategory());
    dispatch(getStates());
    dispatch(getDistricts());
    dispatch(getMunicipalities());
  }, [dispatch, signupsuccess, message]);

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
                            Provide us your startup details
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
                            {
                              <span className="text-danger">
                                {errors.startup_name?.message}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-3">
                            <label htmlFor="isector">
                              Select Industry Sector
                            </label>
                            <Controller
                              name="company_category_id"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Select
                                  placeholder="Select Industry Sector"
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
                            <label htmlFor="isector">State/ Provience</label>
                            <Controller
                              name="province_id"
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
                            <label htmlFor="isector">District</label>
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
                            <label htmlFor="isector">Municipality</label>
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
                            {
                              <span className="text-danger">
                                {errors.contact_number?.message}
                              </span>
                            }
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
                            {
                              <span className="text-danger">
                                {errors.email?.message}
                              </span>
                            }
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Do your startup has PAN/VAT Number?
                            </label>
                            <select
                              id=""
                              className="form-control"
                              name="pan_status"
                              {...register("pan_status")}
                            >
                              <option disabled>Select Pan Status</option>
                              <option value="1">Yes, We have PAN Number</option>
                              <option value="0">
                                No, We haven't PAN Number
                              </option>
                            </select>
                            {
                              <span className="text-danger">
                                {errors.pan_status?.message}
                              </span>
                            }
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Enter PAN/VAT Number
                            </label>
                            <input
                              {...register("pan_number")}
                              name="pan_number"
                              type="number"
                              className="form-control"
                              placeholder="Enter Pan Number"
                            />
                            {
                              <span className="text-danger">
                                {errors.pan_number?.message}
                              </span>
                            }
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Startup Established at
                            </label>

                            {/* <DatePicker
                              {...register("company_since")}
                              value={startDate}
                              onChange={(date) => setStartDate(date)}
                              // dateFormat="MMMM d, yyyy h:mm aa"
                            /> */}

                            <input
                              type="date"
                              {...register("company_since")}
                              className="form-control"
                              placeholder="Company Since"
                            />
                            {
                              <span className="text-danger">
                                {errors.company_since?.message}
                              </span>
                            }
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="" className="small text-muted">
                              Number of Employees
                            </label>

                            <input
                              {...register("number_of_emplyee")}
                              name="number_of_emplyee"
                              type="number"
                              className="form-control"
                              placeholder="Number of Employees"
                            />
                            {
                              <span className="text-danger">
                                {errors.number_of_emplyees?.message}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between">
                        <button
                          type="submit"
                          className="btn btn_p"
                          onClick={() => handleNext()}
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
                            Provide us your information
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
                          {
                            <span className="text-danger">
                              {errors.personal_name?.message}
                            </span>
                          }
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
                          {
                            <span className="text-danger">
                              {errors.personal_contact_number?.message}
                            </span>
                          }
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
                          {
                            <span className="text-danger">
                              {errors.personal_email?.message}
                            </span>
                          }
                        </div>
                      </div>
                      {/* <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Enter Your Address
                          </label>
                          <input
                            {...register("personal_address")}
                            type="text"
                            className="form-control"
                            placeholder="Your Address"
                          />
                          {
                            <span className="text-danger">
                              {errors.personal_address?.message}
                            </span>
                          }
                        </div>
                      </div> */}
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Password
                          </label>

                          <input
                            {...register("password")}
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                          {
                            <span className="text-danger">
                              {errors.password?.message}
                            </span>
                          }
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="" className="small text-muted">
                            Confirm password
                          </label>

                          <input
                            {...register("password_confirmation")}
                            name="password_confirmation"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                          {
                            <span className="text-danger">
                              {errors.password_confirmation?.message}
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                    <hr />
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

                {/* {activeForm == 3 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Files</h3>
                          <p className="text-muted small">
                            Provide us your startup files/documents
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3">
                          <label htmlFor="isector" className="text-muted small">
                            Select Document/File Type
                          </label>
                          <Controller
                            name="document_category_id"
                            control={control}
                            render={({ field: { value } }) => (
                              <Select
                                options={documentOptions}
                                value={documentOptions?.find(
                                  (c) => c.value === value
                                )}
                                onChange={(v) => handleOptionChange(v)}
                                isMulti
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
                            Upload
                          </label>
                          <input
                            {...register("files")}
                            type="file"
                            className="form-control"
                            placeholder="Your Name"
                            multiple
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
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}

                {activeForm == 3 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Confirm Informations</h3>
                          <p className="text-muted small">
                            Please make sure you've inserted the correct
                            information. You can change the information by
                            clicking the "Back" button below.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="text-muted small">Startup Name</td>
                              <td>{getValues("startup_name")}</td>
                            </tr>
                            {/* <tr>
                              <td className="text-muted small">
                                Startup Category
                              </td>
                              <td>{getValues("company_category_id")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">Provience</td>
                              <td>{getValues("province_id")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">District</td>
                              <td>{getValues("district_id")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">Municipality</td>
                              <td>{getValues("municipality_id")}</td>
                            </tr> */}
                            <tr>
                              <td className="text-muted small">
                                Startup Location
                              </td>
                              <td>{getValues("startup_name")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Contact Number
                              </td>
                              <td>{getValues("contact_number")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Startup Email Address
                              </td>
                              <td>{getValues("email")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person First Name
                              </td>
                              <td>{getValues("personal_name")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Last Name
                              </td>
                              <td>{getValues("startup_name")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Contact Number
                              </td>
                              <td>{getValues("personal_contact_number")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Email Address
                              </td>
                              <td>{getValues("personal_email")}</td>
                            </tr>
                            <tr>
                              <td className="text-muted small">
                                Person Address
                              </td>
                              <td>{getValues("personal_address")}</td>
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
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between">
                        <button
                          type="button"
                          onClick={() => setActiveForm(2)}
                          className="btn btn-default"
                        >
                          Back
                        </button>
                        <input
                          // onClick={setActiveForm(5)}
                          type="Submit"
                          defaultValue="Confirm and Submit"
                          className="btn btn_p"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeForm == 4 && (
                  <div className="formwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="titlewrapper">
                          <h3 className="title font_p">Thank you!</h3>
                          <p className="text-muted small">{successMessage}</p>
                          <a
                            onClick={() => {
                              setActiveForm(1);
                              router.push("/");
                            }}
                          >
                            <button className="btn btn_p">
                              {" "}
                              <i className="las la-home"></i> Go to Homepage
                            </button>
                          </a>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                )}

                {activeForm == 5 && (
                  <>
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
                          Thank you. Your Signup Request has been submitted
                          successfully.
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
                                <i className="las la-home"></i> Go to Homepage
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
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
