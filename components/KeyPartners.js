import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { isEmpty } from "lodash";
import { Spinner } from "react-bootstrap";

const KeyPartners = () => {
  const [loadMore, setLoadMore] = useState(true);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get("https://benchmark.promotingnepal.com/api/partner")
      .then((res) => {
        const allPartners = res.data;
        setPartners(allPartners);
      });
  }, []);

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
        {!isEmpty(partners) ? (
          <div className="row">
            {loadMore
              ? partners.slice(0, 4).map((partner) => (
                  <div className="col-sm-3" key={partner.id}>
                    <div href={partner.url}>
                      <a className="">
                        <div className="partnerwrapper mb-4  rounded_medium p-3 text-center bg_white">
                          <div className="image">
                            <Image
                              src={partner.imagepath}
                              height={100}
                              width={100}
                              objectFit="contain"
                              priority
                            />
                          </div>
                          <div className="title">
                            <strong className="f14 text_t">
                              {partner.title}
                            </strong>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))
              : partners.map((partner) => (
                  <div className="col-sm-3" key={partner.id}>
                    <div>
                      <a className="">
                        <div className="partnerwrapper mb-4  rounded_medium p-3 text-center bg_white">
                          <div className="image">
                            <Image
                              src={partner.imagepath}
                              height={100}
                              width={100}
                              objectFit="contain"
                              priority
                            />
                          </div>
                          <div className="title">
                            <strong className="f14 text_t">
                              {partner.title}
                            </strong>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
          </div>
        ) : (
          <div className="loader py-5 d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        )}
        <div className="row">
          <div className="col-sm-12">
            <div className="buttonwrapper text-center my-5">
              {loadMore ? (
                <button
                  className="btn btn_p_dim rounded_big text_p f14 py-2 px-3"
                  onClick={() => setLoadMore(false)}
                >
                  View More
                </button>
              ) : (
                <button
                  className="btn btn_p_dim rounded_big text_p f14 py-2 px-3"
                  onClick={() => setLoadMore(true)}
                >
                  View Less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeyPartners;
