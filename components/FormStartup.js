import React, { Component, useState } from "react";
import Link from "next/link";

export class FormStartup extends Component {
  constructor(props) {
    super(props);
    this.handleTermsClick = this.handleTermsClick.bind(this);
    this.state = { checkTerms: false };
  }
  handleTermsClick() {
    this.setState({ checkTerms: !this.state.checkTerms });
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
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
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="" className="small text-muted">
                        Enter your Startup's Name
                      </label>
                      <input
                        type="text"
                        onChange={handleChange("startupName")}
                        defaultValue={values.startupName}
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
                        onChange={handleChange("startupCategory")}
                        defaultValue={values.startupCategory}
                        className="form-control"
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
                        onChange={handleChange("startupSubcategory")}
                        defaultValue={values.startupSubcategory}
                        className="form-control"
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
                        onChange={handleChange("provience")}
                        defaultValue={values.provience}
                        className="form-control"
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
                        onChange={handleChange("district")}
                        defaultValue={values.district}
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
                        name=""
                        id=""
                        onChange={handleChange("municipality")}
                        defaultValue={values.municipality}
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
                        onChange={handleChange("location")}
                        defaultValue={values.location}
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
                        type="text"
                        onChange={handleChange("contactNumber")}
                        defaultValue={values.contactNumber}
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
                        type="text"
                        onChange={handleChange("startupEmail")}
                        defaultValue={values.startupEmail}
                        className="form-control"
                        placeholder="Startup Email"
                      />
                    </div>
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
                      <label
                        htmlFor="agreed"
                        onClick={this.handleTermsClick}
                        className="small text-muted"
                      >
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
                    {this.state.checkTerms ? (
                      <button
                        type="button"
                        onClick={this.continue}
                        className="btn btn_p"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={this.continue}
                        className="btn btn_p"
                        disabled
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
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
    );
  }
}

export default FormStartup;
