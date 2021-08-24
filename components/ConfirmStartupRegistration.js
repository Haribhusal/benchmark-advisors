import React, { Component } from "react";

import Link from "next/link";
export class ConfirmStartupRegistration extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  onSubmit = (e) => {
    e.preventDefault();
    alert("hey");
  };

  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
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
                    <div className="col-sm-4">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="text-muted small">Startup Name</td>
                            <td>{startupName}</td>
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
                    <div className="col-sm-4">
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
                            <td className="text-muted small">Person Address</td>
                            <td>{personAddress}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-sm-4">
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
                        onSubmit={this.onSubmit}
                      >
                        Confirm and Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default ConfirmStartupRegistration;
