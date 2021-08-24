import React from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    "https://benchmark.promotingnepal.com/api/partner"
  );
  // const response = await fetch(`${process.env.BASE_URL}setting`)
  const data = await response.json();
  return data;
};

const KeyPartners = () => {
  const { data, error } = useSWR("partners", fetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const partners = data;

  return (
    <section className="keypartners py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlewrapper mb-5 text-center">
              <h3 className="title font_p">Key Partners</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {partners.map((partner) => (
            <div className="col-sm-3" key={partner.id}>
              <Link href={partner.url}>
                <a className="">
                  <div className="partnerwrapper mb-3 shadow rounded_medium p-3 text-center bg_white">
                    <div className="image">
                      <Image
                        src={partner.imagepath}
                        style={{ height: "80px" }}
                        height={98}
                        width={128}
                        priority
                      />
                    </div>
                    <div className="title">
                      <strong className="f14 text_t">{partner.title}</strong>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="buttonwrapper text-center my-5">
              <button className="btn btn_p_dim rounded_big text_p f14 py-2 px-3">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPartners;
