import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { isEmpty } from "lodash";
import { Spinner } from "react-bootstrap";
const Blog = () => {
  const [blog, setBlogs] = useState();
  useEffect(() => {
    axios.get("https://benchmark.promotingnepal.com/api/blog").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <>
      <section className="howitworks py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-6">
              <div className="titlewrapper">
                <h3 className="title font_p">From The Blog</h3>
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

          {!isEmpty(blog) ? (
            <div className="row">
              <div className="col-sm-12">
                <div className="factswrapper pl-3 my-3">
                  <div className="row">
                    <div className="col-sm-12 ">
                      <div className=" eventMainWrap rounded_medium mb-4">
                        {blog?.map((blogItem) => (
                          <div className="eventswrapper" key={blogItem?.id}>
                            <div className="row mb-3">
                              <div
                                className="col-sm-4 rounded_medium object_cover"
                                style={{
                                  backgroundImage: `url(${blogItem?.imagepath})`,
                                }}
                              ></div>
                              <div className="col-sm-8 d-flex align-items-center">
                                <div className="rightwrapper">
                                  <div className=" p-3">
                                    <div className="subtitle fw300 f14 text_p"></div>
                                    <Link href={`/blog/${blogItem?.slug}`}>
                                      <a>
                                        <h3 className="title text_t f18 font_p my-3">
                                          {blogItem?.title}
                                        </h3>
                                      </a>
                                    </Link>
                                    <p className="text-muted f14 bg_white_dim btn_white_dim">
                                      <i className="lar la-calendar mr-2 f18 text_p"></i>
                                      {blogItem?.published_date}
                                    </p>
                                  </div>
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
    </>
  );
};

export default Blog;
