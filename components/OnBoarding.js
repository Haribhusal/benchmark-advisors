import React from 'react'
import Image from 'next/image'

const OnBoarding = () => {
    return (
        <section className="onboarding py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="titlewrapper">
                            <div className="subtitle text-uppercase f12 text-muted text-center">
                                ON BOARDINg
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="actionwrapper text-center px-3 py-2">
                            <div className="imagewrapper">
                                <Image src="/images/startup.png" height={200} width={250} priority alt="startup icon" />
                            </div>
                            <div className="titlewrapper my-3">
                                <h3 className="title font_p f18">Start-up</h3>
                            </div>
                            <div className="detailwrapper">
                                <p className="detail text-muted f14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                            <div className="buttonwrapper d-flex justify-content-center">
                                <button className="btn_hovered">
                                    <div className="label font_p">Explore</div>
                                    <div className="icon">
                                        <img src="/icons/right-arrow.svg" alt="" />
                                    </div>
                                    <div className="spacing"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="actionwrapper text-center px-3 py-2">
                            <div className="imagewrapper">
                                <Image src="/images/advisory.png" height={200} width={250} priority alt="startup icon" />
                            </div>
                            <div className="titlewrapper my-3">
                                <h3 className="title font_p f18">Advisory &amp; Consulting</h3>
                            </div>
                            <div className="detailwrapper">
                                <p className="detail text-muted f14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas excepturi quas nostrum eveniet! Nam dicta ab dolor.</p>
                            </div>
                            <div className="buttonwrapper d-flex justify-content-center">
                                <button className="btn_hovered">
                                    <div className="label font_p">Explore</div>
                                    <div className="icon">
                                        <img src="/icons/right-arrow.svg" alt="" />
                                    </div>
                                    <div className="spacing"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="actionwrapper text-center px-3 py-2">
                            <div className="titlewrapper my-3">
                                <Image src="/images/consulting.png" height={170} width={250} priority alt="startup icon" />
                            </div>
                            <div className="titlewrapper my-3">
                                <h3 className="title font_p f18">Social, Public sector &amp;
                                    Government Consulting</h3>
                            </div>
                            <div className="detailwrapper">
                                <p className="detail text-muted f14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas excepturi quas nostrum eveniet! Nam dicta ab dolor.</p>
                            </div>
                            <div className="buttonwrapper d-flex justify-content-center">
                                <button className="btn_hovered">
                                    <div className="label font_p">Explore</div>
                                    <div className="icon">
                                        <img src="/icons/right-arrow.svg" alt="" />
                                    </div>
                                    <div className="spacing"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OnBoarding