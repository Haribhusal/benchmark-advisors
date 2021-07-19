import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OurStory = () => {
    return (
        <section className="onboarding py-3 pt-5">
            <div className="container">

                <div className="row">
                    <div className="col-sm-6">
                        <div className="titlewrapper">
                            <h3 className="title font_p">
                                Our Story
                            </h3>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-start">
                        <div className="textwrapper ">
                            <strong className="f18 font_p  fw500">Have any questions?</strong> <span className="text-muted"> Go to our
                                <Link href="#" className="text-underline">
                                    <a className="f18 font_p  fw500 text-underline text_t px-2">
                                        FAQ
                                    </a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory