import React from 'react'

const StepBar = () => {
    return (
        <div className="row rfp ">
        <div className="col-sm-12">
            <div className="btn_p_dim py-3 px-3 stepBar my-3">
                <div className="step">
                    <div className="count">
                        1
                    </div>
                    <div className="Label">
                        Overview
                    </div>
                </div>
                <div className="step active">
                    <div className="count">
                        2
                    </div>
                    <div className="Label">
                        Contact Information
                    </div>
                </div>
                <div className="step">
                    <div className="count">
                        3
                    </div>
                    <div className="Label">
                        Request Details
                    </div>
                </div>
                <div className="step">
                    <div className="count">
                        4
                    </div>
                    <div className="Label">
                        Review RFP
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StepBar
