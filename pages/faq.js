import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
const FaqComponent = () => {
  const [open, setOpen] = useState(false);
  const [faqs, setFaqs] = useState();
  useEffect(() => {
    axios.get("https://benchmark.promotingnepal.com/api/faq").then((res) => {
      setFaqs(res.data);
    });
  }, []);
  return (
    <main
      className="page"
      style={{
        backgroundImage: "url('/background/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="py-5"
    >
      <section className="py-5 faqsection">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="title font_p">FAQ</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="faqitems">
                <Accordion defaultActiveKey="0">
                  {faqs?.map((faq) => (
                    <Card key={faq?.id}>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey={faq?.id}
                        className="font_p"
                        style={{ cursor: "pointer" }}
                      >
                        {faq?.title}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={faq.id}>
                        <Card.Body className="text-muted">
                          {faq?.description}
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
    </main>
  );
};

export default FaqComponent;
