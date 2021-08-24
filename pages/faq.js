import React, { useEffect } from 'react'
import { Accordion, Card } from 'react-bootstrap';
import useSWR from 'swr'




const fetcher = async () => {
    const response = await fetch('https://benchmark.promotingnepal.com/api/faq')
    // const response = await fetch(`${process.env.BASE_URL}setting`)
    const data = await response.json();
    return data
}


const FaqComponent = () => {

    const { data, error } = useSWR('faqs', fetcher);
    if (error) return 'An error occured';
    const faqs = data;
    if (!data) return '';

    console.log(faqs);

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
                            <Accordion defaultActiveKey="2">

                                {faqs.map((faq) => (
                                    <Card key={faq.id}>
                                        <Accordion.Toggle as={Card.Header} eventKey={faq.id} className="font_p" style={{ 'cursor': 'pointer' }}>
                                            {faq.title}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={faq.id}>
                                            <Card.Body className="text-muted">
                                                {faq.description}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqComponent
