import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const KeyPartners = () => {
    return (
        <section className="keypartners py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="titlewrapper mb-5 text-center">
                            <h3 className="title font_p">
                                Key Partners
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="partnerwrapper shadow rounded_medium p-3 text-center bg_white">
                            <div className="image">
                                <Image src='/images/logo.png' style={{ height: '80px' }} height={98} width={128} priority />
                            </div>
                            <div className="title">
                                <Link href="#">
                                    <a>
                                        <strong className="f14 text_t">Techcare Softwares</strong>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="partnerwrapper shadow rounded_medium p-3 text-center bg_white">
                            <div className="image">
                                <Image src='/images/logo.png' style={{ height: '80px' }} height={98} width={128} priority />
                            </div>
                            <div className="title">
                                <Link href="#">
                                    <a>
                                        <strong className="f14 text_t">Techcare Softwares</strong>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="partnerwrapper shadow rounded_medium p-3 text-center bg_white">
                            <div className="image">
                                <Image src='/images/logo.png' style={{ height: '80px' }} height={98} width={128} priority />
                            </div>
                            <div className="title">
                                <Link href="#">
                                    <a>
                                        <strong className="f14 text_t">Techcare Softwares</strong>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="partnerwrapper shadow rounded_medium p-3 text-center bg_white">
                            <div className="image">
                                <Image src='/images/logo.png' style={{ height: '80px' }} height={98} width={128} priority />
                            </div>
                            <div className="title">
                                <Link href="#">
                                    <a>
                                        <strong className="f14 text_t">Techcare Softwares</strong>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="buttonwrapper text-center my-5">
                            <button className="btn btn_p_dim rounded_big text_p f14 py-2 px-3">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyPartners