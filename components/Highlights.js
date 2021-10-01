import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { isEmpty } from "lodash";
import { Spinner } from "react-bootstrap";

const Highlights = () => {
  const [highlights, setHighlights] = useState();
  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/announcements")
      .then((res) => {
        setHighlights(res.data);
      });
  }, []);
  return (
    <section className="howitworks py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-6">
            <div className="titlewrapper">
              <h3 className="title font_p">
                News &amp; <br />
                Highlights
              </h3>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-end align-items-end">
            <div className="textwrapper ">
              <button className="btn btn_p_dim rounded_big  text_p py-2 px-3">
                View all
              </button>
            </div>
          </div>
        </div>
        {!isEmpty(highlights) ? (
          <div className="row">
            {highlights && (
              <div className="col-sm-6">
                <div className="videowrapper bg_white rounded_medium my-3">
                  <div className="thumbnail">
                    <div className="overlay"></div>
                    <Image
                      src={highlights[0]?.imagepath}
                      height={200}
                      width={400}
                      layout={"responsive"}
                      priority
                    />
                  </div>
                  <div className="textwrapper bg_white p-4 rounded_medium">
                    <div className="titlewrapper d-flex justify-content-between align-items-center">
                      <div className="subtitle fw300 f14 text_p">
                        HIGHLIGHTS
                      </div>
                      <div className="date text-muted bg_p_dim text_p small">
                        <i className="las la-calendar"></i>
                        <span className="pl-1">
                          {highlights[0]?.published_date}
                        </span>
                      </div>
                    </div>

                    <h3 className="title text_t f20 font_p">
                      {highlights[0]?.title}
                    </h3>

                    <p className="text-muted f14">
                      {highlights[0]?.description.slice(0, 200)}...
                    </p>
                    <div className="buttonwrapper d-flex justify-content-start">
                      <button className="btn_hovered">
                        <div className="label font_p">Explore</div>
                        <div className="icon">
                          <i className="las la-arrow-right"></i>
                        </div>
                        <div className="spacing"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="col-sm-6">
              <div className="factswrapper pl-3 my-3">
                <div className="row">
                  <div className="col-sm-12 ">
                    {highlights?.slice(1).map((highlight) => (
                      <div
                        className="bg_white rounded_medium mb-4"
                        key={highlight?.title}
                      >
                        <div className="row ">
                          <div
                            className="col-sm-4 rounded_medium object_cover"
                            style={{
                              backgroundImage: `url(${highlight?.imagepath})`,
                            }}
                          ></div>
                          <div className="col-sm-8">
                            <div className=" p-3">
                              <div className="subtitle fw300 f14 text_p">
                                HIGHLIGHTS
                              </div>

                              <h3 className="title text_t f18 font_p">
                                {highlight?.title}
                              </h3>

                              <p className="text-muted f14">
                                <i className="las la-calendar"></i>
                                {highlight?.published_date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loader py-5 d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        )}
      </div>
    </section>
  );
};

export default Highlights;
