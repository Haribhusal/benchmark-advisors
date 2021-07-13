import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Highlights = () => {
    return (
        <section className="howitworks py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-sm-6">
                        <div className="titlewrapper">
                            <h3 className="title font_p">
                                Highlights &amp; <br />
                                Announcements
                            </h3>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end align-items-end">
                        <div className="textwrapper ">
                            <button className="btn btn_p_dim rounded_big  text_p py-2 px-3">View all</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="videowrapper bg_white rounded_medium my-3">

                            <div className="thumbnail">
                                <div className="overlay"></div>
                                <Image src="/images/videobg.png" height={200} width={400} layout={'responsive'} priority />
                            </div>
                            <div className="textwrapper bg_white p-4 rounded_medium">
                                <div className="subtitle fw300 f14 text_p">
                                    HIGHLIGHTS
                                </div>
                                <Link href="#">
                                    <a>
                                        <h3 className="title text_t f20 font_p">
                                            Accelerating Asia Demo Day
                                        </h3>
                                    </a>
                                </Link>
                                <p className="text-muted f14">
                                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                                </p>
                                <div className="buttonwrapper d-flex justify-content-start">
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
                    <div className="col-sm-6">
                        <div className="factswrapper pl-3 my-3">
                            <div className="row">
                                <div className="col-sm-12 ">
                                    <div className="bg_white rounded_medium mb-4">
                                        <div className="row ">
                                            <div className="col-sm-4 rounded_medium object_cover" style={{ backgroundImage: "url('https://via.placeholder.com/100x100')" }}></div>
                                            <div className="col-sm-8">
                                                <div className=" p-3">
                                                    <div className="subtitle fw300 f14 text_p">
                                                        HIGHLIGHTS
                                                    </div>
                                                    <Link href="#">
                                                        <a>
                                                            <h3 className="title text_t f18 font_p">
                                                                Enterprise Singapore at the
                                                                appoints 14 new metor
                                                            </h3>
                                                        </a>
                                                    </Link>
                                                    <p className="text-muted f14">
                                                        June 21, General
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg_white rounded_medium mb-4">
                                        <div className="row ">
                                            <div className="col-sm-4 rounded_medium object_cover" style={{ backgroundImage: "url('https://via.placeholder.com/100x100')" }}></div>
                                            <div className="col-sm-8">
                                                <div className=" p-3">
                                                    <div className="subtitle fw300 f14 text_p">
                                                        HIGHLIGHTS
                                                    </div>
                                                    <Link href="#">
                                                        <a>
                                                            <h3 className="title text_t f18 font_p">
                                                                Collated Resources and
                                                                Support for Startups
                                                            </h3>
                                                        </a>
                                                    </Link>
                                                    <p className="text-muted f14">
                                                        June 21, General
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg_white rounded_medium mb-4">
                                        <div className="row ">
                                            <div className="col-sm-4 rounded_medium object_cover" style={{ backgroundImage: "url('https://via.placeholder.com/100x100')" }}></div>
                                            <div className="col-sm-8">
                                                <div className=" p-3">
                                                    <div className="subtitle fw300 f14 text_p">
                                                        HIGHLIGHTS
                                                    </div>
                                                    <Link href="#">
                                                        <a>
                                                            <h3 className="title text_t f18 font_p">
                                                                Our Domain name is now
                                                                benchmark advisors
                                                            </h3>
                                                        </a>
                                                    </Link>
                                                    <p className="text-muted f14">
                                                        June 21, General
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Highlights
