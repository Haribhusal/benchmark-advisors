import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
const imageFooter = process.env.NEXT_PUBLIC_BASE_URL;

// "https://benchmark.promotingnepal.com/api/setting"

const Footer = () => {
  console.log('ig',imageFooter);
  
  const [siteSettings, setSiteSettings]= useState({});
  console.log("responseSettings", siteSettings.logo)
  
  useEffect(() => {
    
    axios.get('https://benchmark.promotingnepal.com/api/setting')
    .then(res=> {
      console.log('response', res);
      setSiteSettings(res?.data[0]);
    
    }).catch(error=>{
      console.log(error)
    })
   
  }, [])
  return (
    <footer
      className="py-5 page"
      style={{
        backgroundImage: `url("/background/bg.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backdropFilter: "20px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="leftwrapper">
              <div className="logowrapper">
              <img src={siteSettings.logo} className="img-fluid" style={{height: '90px'}}/>
                <h6 className="title"> 
                {siteSettings?.site_title}
                </h6>
                <h2></h2>
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
                          {siteSettings.address}
                          </li>
                        <li className="text-muted f14">
                          {siteSettings.email}
                          </li>
                        <li className="text-muted f14">

                          {siteSettings.mobile_no}, {siteSettings.phone_no}
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
                      <ul>
                        <li className="text-muted f14">
                          <Link href="">
                            <a target="_blank" className="link text_t">
                              Facebook
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href="">
                            <a target="_blank" className="link text_t">
                              Instagram
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href="">
                            <a target="_blank" className="link text_t">
                              Twitter
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="sponsor">
                    <div className="titlewrapper">
                      <h6 className="title font_p f18 fw500">Tech Partner</h6>
                    </div>
                    <div className="techpartner d-flex gap flex-column align-items-start">
                      <Image
                        src="/images/tcs.svg"
                        height={70}
                        width={100}
                        priority
                      />
                      <strong className="textwrapper">
                        Techcare Softwares
                      </strong>
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
                  &copy; Benchmark Adventures Pvt. Ltd. 2021, All Rights
                  Reserved
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
