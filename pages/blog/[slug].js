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
  const [blog, setBlog] = useState();
  console.log("blog", blog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://benchmark.promotingnepal.com/api/blog").then((res) => {
      const allblogs = res.data;
      console.log("all", allblogs);
      const singleblogData = allblogs.find((a) => a.slug === slug);
      setBlog(singleblogData);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Meta
        title={`${blog?.title} - Benchmark Advisors`}
        description={blog?.description}
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
        {!isEmpty(blog) ? (
          <section className="blogDetails py-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2">
                  <div className="single">
                    <Link href="/">
                      <a className=" font_bold f14">
                        <i className="las la-arrow-left"></i> Back to Home
                      </a>
                    </Link>
                    <h3 className="title my-4 font_p">{blog?.title}</h3>
                    <div className="metas my-3">
                      <div className="meta bg_p_dim">
                        <i class="lar la-calendar"></i> {blog?.published_date}
                      </div>
                    </div>
                    <div className="imagewrapper ">
                      <img
                        className="img-fluid "
                        src={blog?.imagepath}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="textwrapper bg_white p-4 ">
                      <p className="text-muted my-3 f14">{blog?.description}</p>
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
