import React, { useEffect } from 'react'


import { Accordion } from 'react-bootstrap';
import useSWR from 'swr'



const fetcher = async () => {
    const response = await fetch('https://benchmark.promotingnepal.com/api/faq')
    const data = await response.json();
    return data
}
class Faq extends React.Component {

    render() {

        const { data, error } = useSWR('settings', fetcher);
        if (error) return 'An error occured';
        console.log(data)


        return (
            <section className="py-5 faqsection">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="title font_p">
                                FAQ

                            </h3>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="faqitems">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )


    }





}

export default Faq;