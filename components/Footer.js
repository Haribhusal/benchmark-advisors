import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import FooterSocialLink from "./FooterSocialLink";
const Footer = () => {
  const [siteSettings, setSiteSettings] = useState();

  useEffect(async () => {
    await axios
      .get("https://benchmark.promotingnepal.com/api/setting")
      .then((res) => {
        setSiteSettings(res?.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <footer
      className="py-5 page"
      style={{
        backgroundImage: "url('/background/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="leftwrapper">
              <div className="titlewrapper">
                <h6 className="title mb-3 font_p fw800">
                  {" "}
                  {siteSettings?.site_title}
                </h6>
              </div>
              <div className="textwrapper">
                <p className="text-muted small">
                  {siteSettings?.about_text?.slice(0, 250)}...
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="rightwrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="menuwrapper">
                    <div className="titlewrapper">
                      <h6 className="title mb-3 font_p fw800">Contact Us</h6>
                    </div>
                    <div className="menu">
                      <ul>
                        <li className="text-muted f14">
                          <i className="las la-map me-2"></i>
                          {siteSettings?.address}
                        </li>
                        <li className="text-muted f14">
                          <i className="las la-envelope me-2"></i>

                          {siteSettings?.email}
                        </li>
                        <li className="text-muted f14">
                          <i className="las la-phone me-2"></i>
                          {siteSettings?.mobile_no}, {siteSettings?.phone_no}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="menuwrapper">
                    <div className="titlewrapper">
                      <h6 className="title mb-3 font_p fw800">
                        Social Account
                      </h6>
                    </div>
                    <div className="menu">
                      <ul className="d-flex socialLinks">
                        <li>
                          <a
                            target="_blank"
                            className="f14 text-muted"
                            href={siteSettings?.facebook_url}
                          >
                            <i className="lab la-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            className="f14 text-muted"
                            href={siteSettings?.twitter_url}
                          >
                            <i className="lab la-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            className="f14 text-muted"
                            href={siteSettings?.instagram_url}
                          >
                            <i className="lab la-instagram"></i>
                          </a>
                        </li>

                        {/* <FooterSocialLink link={siteSettings?.facebook_url} title="Facebook"/>  */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="sponsor">
                    <div className="titlewrapper">
                      <h6 className="title font_p f18 fw500">Tech Partner</h6>
                    </div>
                    <div className="techpartner d-flex  flex-row align-items-center">
                      <Image
                        src="/images/tcs.svg"
                        height={70}
                        width={100}
                        priority
                      />
                      <span className="textwrapper">Techcare Softwares</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-sm-6">
            <div className="leftwrapper">
              <div className="textwrapper">
                <p className="text-muted f12 mb-0">
                  {setSiteSettings?.site_title} &copy; 2021, All Rights Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <div className="rightwrapper">
              <div className="linkswrapper d-flex">
                <div className="link">
                  <Link href="/faq">
                    <a className="link f12 text_t px-3">Faq</a>
                  </Link>
                </div>
                <div className="link">
                  <Link href="/policy">
                    <a className="link f12 text_t px-3">Privacy Policy</a>
                  </Link>
                </div>
                <div className="link">
                  <Link href="/terms">
                    <a className="link f12 text_t px-3">
                      Terms &amp; Conditions
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
