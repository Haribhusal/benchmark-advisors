import React, { Component } from 'react'

import Link from 'next/link'
export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
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
                                            <h3 className="title font_p">
                                                Personal Details
                                            </h3>
                                            <p className="text-muted small">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti incidunt repudiandae quo.
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="small text-muted">Enter Your First Name</label>
                                            <input type="text" onChange={handleChange('personFirstName')} defaultValue={values.personFirstName} className="form-control" placeholder="Your First Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="small text-muted">Enter Your Last Name</label>
                                            <input type="text" onChange={handleChange('personLastName')} defaultValue={values.personLastName} className="form-control" placeholder="Your Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="small text-muted">Enter Contact Number</label>
                                            <input type="tel" onChange={handleChange('personContact')} defaultValue={values.personContact} className="form-control" placeholder="Your Contact Number" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="small text-muted">Enter Your Email Address</label>
                                            <input type="email" onChange={handleChange('personEmail')} defaultValue={values.personEmail} className="form-control" placeholder="Your Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="" className="small text-muted">Enter Your Address</label>
                                            <input type="tel" onChange={handleChange('personAddress')} defaultValue={values.personAddress} className="form-control" placeholder="Your Address" />
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-between">
                                        <button type="button" onClick={this.back} className="btn btn-default">Back</button>
                                        <button type="button" onClick={this.continue} className="btn btn_p">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="rightbarContent">

                                <div className="imagewrapper text-center">
                                    <img src="images/joinbenchmark.png" style={{ maxHeight: '300px' }} className="img-fluid" alt="" />
                                </div>
                                <div className="textwrapper text-center">
                                    <h3 className="title font_p mb-3">
                                        Getting Investment process even easier than ever
                                    </h3>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae temporibus tenetur.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default FormUserDetails
