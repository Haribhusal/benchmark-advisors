import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { isEmpty } from "lodash";
import { Spinner } from "react-bootstrap";

const ContactInformation = ({ nextStep, handleChange, values }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [companyCategory, setCompanyCategory] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [mun, setMun] = useState();
  const [updateDistricts, setUpdateDistricts] = useState();
  // for continue event listener

  // const filterdDistrict = () => {
  //   const fd = district.filter((item) => {
  //     item.state_id;
  //   });
  //   console.log("selectedDis", fd);
  // };

  // useEffect(() => {
  //   const updateDistricts = (state_id) => {
  //     const fdistrict = district?.filter(
  //       (districtItem) => districtItem.state_id == state_id
  //     );
  //     updateDistricts(state_id);

  //     // setFilteredDistrict(fdistrict);
  //   };
  // }, []);

  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/company-category/list")
      .then((res) => {
        setCompanyCategory(res.data.data);
        console.log("categories", res.data.data);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/state/list")
      .then((res) => {
        setState(res.data.data);
        console.log("state", res.data.data);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/district/list")
      .then((res) => {
        setDistrict(res.data.data);
        console.log("dis", res.data.data);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/municipality/list")
      .then((res) => {
        setMun(res.data.data);
        console.log("min", res.data.data);
      });
  }, []);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
    console.log("hey");
  };

  return (
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
                onChange={handleChange("fname")}
                defaultValue={values.fname}
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
                onChange={handleChange("lname")}
                defaultValue={values.lname}
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
                onChange={handleChange("email")}
                defaultValue={values.email}
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
                onChange={handleChange("phone")}
                defaultValue={values.phone}
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
                onChange={handleChange("company_name")}
                defaultValue={values.company_name}
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
                onChange={handleChange("role")}
                defaultValue={values.role}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group mb-3">
              <label htmlFor="isector">Select Industry Sector</label>
              <select
                className="form-control"
                onChange={handleChange("company_category_id")}
                defaultValue={values?.company_category_id}
              >
                {companyCategory?.map((item) => (
                  <option value={item?.title} key={item?.id}>
                    {item?.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-sm-4">
            {!isEmpty(state) ? (
              <div className="form-group mb-3">
                <label htmlFor="isector">State</label>
                <select
                  className="form-control"
                  onChange={handleChange("state_id")}
                  defaultValue={values.state_id}
                >
                  {state?.map((item) => (
                    <option value={item?.province_name} key={item?.id}>
                      {item?.province_name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="d-flex justify-content-center py-5 ">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden"></span>
                </Spinner>
              </div>
            )}
          </div>
        </div>

        <div className="row">
          {!isEmpty(district) ? (
            <div className="col-sm-4">
              <div className="form-group mb-3">
                <label htmlFor="isector">District</label>
                <select
                  className="form-control"
                  onChange={handleChange("district_id")}
                  defaultValue={values.district_id}
                >
                  {district?.map((item) => (
                    <option value={item?.district_name} key={item?.id}>
                      {item?.district_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center py-5 ">
              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
            </div>
          )}
          <div className="col-sm-4">
            {!isEmpty(mun) ? (
              <div className="form-group mb-3">
                <label htmlFor="isector">Municipality</label>
                <select
                  className="form-control"
                  onChange={handleChange("municipality_id")}
                  defaultValue={values.municipality_id}
                >
                  {mun?.map((item) => (
                    <option value={item?.municipality_name} key={item?.id}>
                      {item?.municipality_name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="d-flex justify-content-center py-5 ">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden"></span>
                </Spinner>
              </div>
            )}
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
                onChange={handleChange("description")}
                defaultValue={values.description}
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
                onChange={handleChange("is_client")}
                defaultValue={values.is_client}
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
                Next Step <i className="las la-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
