import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const InvestNow = () => {
    return (
        <section className="howitworks py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-sm-6">
                        <div className="titlewrapper">
                            <h3 className="title font_p">
                                Invest Now
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
                        <div className="investwrapper  videowrapper bg_white rounded_medium my-3">
                            <div className="thumbnail">
                                <div className="overlay"></div>
                                <Image src="/images/videobg.png" height={200} width={700} layout={'responsive'} priority />
                            </div>
                            <div className="profile">
                                <img src="https://via.placeholder.com/100" className="img-fluid rounded_medium shadow" alt="" />

                            </div>
                            <div className="textwrapper bg_white p-4 rounded_medium">
                                <Link href="#">
                                    <a>
                                        <h3 className="title text_t f20 font_p">
                                            Techcare Softwares
                                        </h3>
                                    </a>
                                </Link>
                                <p className="text-muted f14">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi numquam nobis perspiciatis reiciendis, autem repellendus magnam? Iste, quas.
                                </p>
                                <div className="facts d-flex gap my-3">
                                    <div className="fact shadow p-3 rounded_medium">
                                        <div className="titlewrapper">
                                            <h3 className="title fw900">50 +</h3>
                                        </div>
                                        <div className="detailwrapper">
                                            <p className="text-muted f14 mb-0">
                                                Investors
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fact shadow p-3 rounded_medium">
                                        <div className="titlewrapper">
                                            <h3 className="title fw900">$200k</h3>
                                        </div>
                                        <div className="detailwrapper">
                                            <p className="text-muted f14 mb-0">
                                                Raised
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fact shadow p-3 rounded_medium">
                                        <div className="titlewrapper">
                                            <h3 className="title fw900">$1M</h3>
                                        </div>
                                        <div className="detailwrapper">
                                            <p className="text-muted f14 mb-0">
                                                Valuation Cap
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted f14">
                                    New Baneshwor 10, Kathmandu, Nepal
                                </p>
                                <div className="tagswrapper flex-wrap d-flex gap">
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Design and Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Communication                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className="col-sm-6">
                        <div className="investwrapper  videowrapper bg_white rounded_medium my-3">
                            <div className="thumbnail">
                                <div className="overlay"></div>
                                <Image src="/images/videobg.png" height={350} width={700} layout={'responsive'} priority />
                            </div>
                            <div className="profile">
                                <img src="https://via.placeholder.com/100" className="img-fluid rounded_medium shadow" alt="" />

                            </div>
                            <div className="textwrapper bg_white p-4 rounded_medium">
                                <Link href="#">
                                    <a>
                                        <h3 className="title text_t f20 font_p">
                                            Techcare Softwares
                                        </h3>
                                    </a>
                                </Link>
                                <p className="text-muted f14">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi numquam nobis perspiciatis reiciendis, autem repellendus magnam? Iste, quas.
                                </p>
                                <p className="text-muted f14">
                                    New Baneshwor 10, Kathmandu, Nepal
                                </p>
                                <div className="tagswrapper flex-wrap d-flex gap">
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Design and Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Communication                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="investwrapper  videowrapper bg_white rounded_medium my-3">
                            <div className="thumbnail">
                                <div className="overlay"></div>
                                <Image src="/images/videobg.png" height={350} width={700} layout={'responsive'} priority />
                            </div>
                            <div className="profile">
                                <img src="https://via.placeholder.com/100" className="img-fluid rounded_medium shadow" alt="" />

                            </div>
                            <div className="textwrapper bg_white p-4 rounded_medium">
                                <Link href="#">
                                    <a>
                                        <h3 className="title text_t f20 font_p">
                                            Techcare Softwares
                                        </h3>
                                    </a>
                                </Link>
                                <p className="text-muted f14">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi numquam nobis perspiciatis reiciendis, autem repellendus magnam? Iste, quas.
                                </p>
                                <p className="text-muted f14">
                                    New Baneshwor 10, Kathmandu, Nepal
                                </p>
                                <div className="tagswrapper flex-wrap d-flex gap">
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Design and Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Communication                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="col-sm-6">
                        <div className="investwrapper  videowrapper bg_white rounded_medium my-3">
                            <div className="thumbnail">
                                <div className="overlay"></div>
                                <Image src="/images/videobg.png" height={350} width={700} layout={'responsive'} priority />
                            </div>
                            <div className="profile">
                                <img src="https://via.placeholder.com/100" className="img-fluid rounded_medium shadow" alt="" />

                            </div>
                            <div className="textwrapper bg_white p-4 rounded_medium">
                                <Link href="#">
                                    <a>
                                        <h3 className="title text_t f20 font_p">
                                            Techcare Softwares
                                        </h3>
                                    </a>
                                </Link>
                                <p className="text-muted f14">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi numquam nobis perspiciatis reiciendis, autem repellendus magnam? Iste, quas.
                                </p>
                                <p className="text-muted f14">
                                    New Baneshwor 10, Kathmandu, Nepal
                                </p>
                                <div className="tagswrapper flex-wrap d-flex gap">
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Design and Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Development
                                    </div>
                                    <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
                                        Communication                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default InvestNow
