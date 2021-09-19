import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import { isEmpty } from "lodash";

import Image from "next/image";
import axios from "axios";
import { Spinner } from "react-bootstrap";
export default function SingleProduct() {
  const router = useRouter();
  const { slug } = router.query;
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://benchmark.promotingnepal.com/api/events").then((res) => {
      const allEvents = res.data;
      console.log("all", allEvents);
      const singleEventData = allEvents.find((a) => a.slug === slug);
      setEvent(singleEventData);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Meta
        title={`${event?.title} - Benchmark Advisors`}
        description={event?.description}
      />
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {!isEmpty(event) ? (
          <section className="eventDetails py-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2">
                  <div className="single">
                    <Link href="/">
                      <a className=" font_bold f14">
                        <i className="las la-arrow-left"></i> Back to Home
                      </a>
                    </Link>
                    <h3 className="title my-4 font_p">{event?.title}</h3>
                    <div className="metas my-3">
                      <div className="meta bg_p_dim">
                        <i class="lar la-calendar"></i> {event?.event_date}
                      </div>
                    </div>
                    <div className="imagewrapper ">
                      <img
                        className="img-fluid "
                        src={event?.imagepath}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="textwrapper bg_white p-4 ">
                      <div className="">
                        <strong>Event Description</strong>
                      </div>
                      <p className="text-muted my-3 f14">
                        {event?.description}
                      </p>

                      <div className="metas my-3">
                        <div className="meta bg_p f14 text-white">
                          Event effecthappening at {event?.event_date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="d-flex justify-content-center py-5 ">
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        )}
      </main>
    </>
  );
}
