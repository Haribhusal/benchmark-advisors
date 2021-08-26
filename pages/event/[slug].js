import React from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

const eventsFetcher = async () => {
  const response = await fetch(
    "https://benchmark.promotingnepal.com/api/events"
  );
  // const response = await fetch(`${process.env.BASE_URL}setting`)
  const data = await response.json();
  return data;
};

export default function SingleProduct() {
  const { data, error } = useSWR("events", eventsFetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const events = data;

  const router = useRouter();
  const { slug } = router.query;
  const event = events.find((a) => a.slug === slug);
  if (!event) {
    return <div>Event Not Found</div>;
  }
  return (
    <>
      <Meta
        title={`${event.title} - Benchmark Advisors`}
        description={event.description}
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
                  <h3 className="title my-4 font_p">{event.title}</h3>
                  <div className="metas my-3">
                    <div className="meta bg_p_dim">
                      <i class="lar la-calendar"></i> {event.event_date}
                    </div>
                  </div>
                  <div className="imagewrapper ">
                    <Image
                      className="img-fluid "
                      src={event.imagepath}
                      height={300}
                      width={500}
                      layout="responsive"
                    />
                  </div>
                  <div className="textwrapper bg_white p-4 ">
                    <div className="">
                      <strong>Event Description</strong>
                    </div>
                    <p className="text-muted my-3 f14">{event.description}</p>

                    <div className="metas my-3">
                      <div className="meta bg_p f14 text-white">
                        Event happening at {event.event_date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
