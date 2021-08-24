import React, { Component } from "react";

import Link from "next/link";
export class FormDocument extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
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
                        type="file"
                        onChange={handleChange("doc1")}
                        defaultValue={values.doc1}
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
                        type="file"
                        onChange={handleChange("doc2")}
                        defaultValue={values.doc2}
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
                        type="file"
                        onChange={handleChange("doc3")}
                        defaultValue={values.doc3}
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
                      onClick={this.back}
                      className="btn btn-default"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={this.continue}
                      className="btn btn_p"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="rightbarContent">
                <div className="imagewrapper text-center">
                  <img
                    src="images/joinbenchmark.png"
                    style={{ maxHeight: "300px" }}
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

export default FormDocument;
