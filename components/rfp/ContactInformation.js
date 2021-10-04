import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useRouter } from "next/router";
import {
  getCompanyCategory,
  getStates,
  getDistricts,
  getMunicipalities,
} from "../../actions/common";

const ContactInformation = ({ nextStep, handleChange, values }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  const [mystate, setMystate] = useState("");
  const [mydistrict, setMydistrict] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const {
    companyCategory,
    states,
    districts,
    municipalities,
  } = useSelector((state) => state.common);

  const categoryOptions = companyCategory?.map((d) => ({
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

  useEffect(() => {
    dispatch(getCompanyCategory());
    dispatch(getStates());
    dispatch(getDistricts());
    dispatch(getMunicipalities());
  }, [dispatch]);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
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
                className="form-control"
                placeholder="Enter your Last Name"
                defaultValue={values.lname}
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
                defaultValue={values.email}
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
                defaultValue={values.phone}
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
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder="Enter your Company / Organization name"
                defaultValue={values.company_name}
                {...register("company_name", { required: true })}
              />
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
                defaultValue={values.role}
                {...register("role", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
              <div className="loadingdata">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group mb-3">
                      <label htmlFor="isector">Select Industry Sector</label>
                      <Controller
                              name="company_category_id"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Select
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
                      <label htmlFor="isector">State</label>
                      <Controller
                              name="province_id"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Select
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
                defaultValue={values.description}
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
