import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import SubServices from "../../components/SubServices";
import axios from "axios";

export default function SingleSubService() {



  
  // const subServicesFetcher = async () => {
  //   const response = await fetch(
  //     `https://benchmark.promotingnepal.com/api/team/featurelist/${slug}`
  //   );
  //   const data = await response.json();
  //   console.log("daas", data);
  //   return data;
  // };

  // const { data, error } = useSWR("subService", subServicesFetcher);
  // if (error) return null;
  // if (!data) return "";
  // console.log("ss", data);

  const router = useRouter();
  const { slug } = router.query
  const [subService, setSubService] = useState()
  const [features, setFeatures] = useState()
  const[teammember,setTeamMember] = useState()

  useEffect(() => {
    axios.get(`https://benchmark.promotingnepal.com/api/team/featurelist/${slug}`)
    .then(response => {
      console.log("response", response.data)
      const features = response.data.featureList;
      const teams = response.data.teamList;
      console.log('features', features)
      console.log('teams', teams)
      setFeatures(features);
      setTeamMember(teams)
    }).catch(error => {
      
      console.log(error)
    })
  
  }, [slug])


  return (
    <>
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="py-5 investor_profile"
      >
        <section className="iconImage py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="imagewrapper mt-5 mb-3">
                  <img src="/icons/fdi.svg" className="" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 d-flex align-items-center">
                <div className="textwrapper">
                  <h3 className="title font_p text_big mb-0">
                    Financial Analysis
                  </h3>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <button className="btn btn_p rounded_big font_p text_w px-5 py-3">
                    Request For Proposal{" "}
                    <span>
                      <img
                        src="/icons/right-arrow.svg"
                        alt=""
                        className="ml-2"
                      />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="serviceDetails">
              <div className="row">
                <div className="col-sm-9">
                  <p className="text f14 text-muted my-3">
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>

            <div className="serviceDetails">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="title my-4 font_p">How it Works?</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p className="text f14 text-muted my-3">
                    Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                    do eiusmod tempor incididunt consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit,
                    sed do eiusmod tempor incididunt consectetur adipiscing elit
                    lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    ipsum dolo dipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>

            <div className="features">
              <div className="row">
                <div className="col-sm-12">
                  <div className="titlewrapper text-center">
                    <h3 className="title my-4 font_p">Features</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {features?.map((feature) => (
                  <div className="col-sm-4">
                    <div className="servicefeatures text-center">
                      <div className="img text-center">
                        <img
                          src={feature.imagepath}
                          style={{ height: "150px" }}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="titlewrapper">
                        <h4 className="title mb-3 font_p">{feature.title}</h4>
                        <p className="text-muted f14">{feature.description}</p>
                      </div>
                    </div>
                  </div>
               ))}  
              </div>
            </div>

            <div className="keycontacts">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="title my-4 font_p">Key Contacts</h3>
                </div>
              </div>
              <div className="row">
                {teammember?.map((member) => (
                  <div className="col-sm-6" >
                    <div className="contactWrapper mb-4 bg_white d-flex">
                      <div className="image">
                        <img src={member.imagepath} alt="" />
                      </div>
                      <div className="d-flex align-items-center p-4">
                        <div className="">
                          <h5 className="name title font_p">{member.name}</h5>
                          <p className="text-muted mb-3 f14">
                            {member.designation}
                          </p>
                          <div className="contacts">
                            <div className="item text-muted f14">
                              <i className="las la-phone f16 mr-2"></i>
                              {member.phone}
                            </div>
                            <div className="item text-muted f14">
                              <i className="las la-envelope f16 mr-2"></i>
                              {member.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))} 
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
