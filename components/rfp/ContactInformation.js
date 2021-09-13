import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const ContactInformation = ({ nextStep, handleChange, values }) => {
  // for continue event listener
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
                defaultValue={values.company_category_id}
              >
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mb-3">
              <label htmlFor="isector">Select Country</label>
              <select
                className="form-control"
                onChange={handleChange("country")}
                defaultValue={values.country}
              >
                <option value="1">Nepal</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mb-3">
              <label htmlFor="isector">State</label>
              <select
                className="form-control"
                onChange={handleChange("state_id")}
                defaultValue={values.state_id}
              >
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="form-group mb-3">
              <label htmlFor="isector">District</label>
              <select
                className="form-control"
                onChange={handleChange("district_id")}
                defaultValue={values.district_id}
              >
                <option value="1">Nepal</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
                <option value="1">Value 1</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mb-3">
              <label htmlFor="isector">Municipality</label>
              <select
                className="form-control"
                onChange={handleChange("municipality_id")}
                defaultValue={values.municipality_id}
              >
                <option value="1">Value 1</option>
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
