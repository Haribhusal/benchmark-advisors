import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function SingleSubService() {
  const { register, handleSubmit } = useForm();
  const [hideForm, setHideForm] = useState(true);
  const [btnDisable, setBtnDisable] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();
  const { slug } = router.query;
  const [features, setFeatures] = useState();
  const [team, setTeam] = useState();
  const [description, setDescription] = useState();
  const [howworks, setHowWorks] = useState();
  const [title, setTitle] = useState();
  const [serviceId, setServiceId] = useState();

  useEffect(() => {
    axios
      .get(`https://benchmark.promotingnepal.com/api/team/featurelist/${slug}`)
      .then((response) => {
        const features = response.data.featureList;
        const teams = response.data.teamList;
        setFeatures(features);
        setTeam(teams);
        setDescription(response.data.sub_service_description);
        setHowWorks(response.data.sub_service_how_works);
        setTitle(response.data.sub_service_title);
        setServiceId(response.data.sub_service_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  const onSubmit = async (data, e) => {
    console.log("from data", props.id);
    e.preventDefault();
    setLoadingBtn(true);
    setBtnDisable(true);
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      file_id: props.id,
    };

    axios
      .post(
        "https://benchmark.promotingnepal.com/api/brochure-download",
        formData
      )
      .then((res) => {
        setSuccessMessage(res.data.message);
        setLoadingBtn(false);
        setHideForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  <h3 className="title font_p text_big mb-0">{title}</h3>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center justify-content-end">
                <div className="buttonwrapper">
                  <Link href={`/rfp/${slug}`}>
                    <button className="btn btn_p rounded_big font_p text_w px-5 py-3 d-flex align-items-center">
                      Request For Proposal
                      <i className="las la-arrow-right ml-2 f20"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="serviceDetails">
              <div className="row">
                <div className="col-sm-9">
                  <p className="text f14 text-muted my-3">{description}</p>
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
                  <p className="text f14 text-muted my-3">{howworks}</p>
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
                  <div className="col-sm-4" key={feature?.id}>
                    <div className="servicefeatures text-center">
                      <div className="img text-center">
                        <img
                          src={feature?.imagepath}
                          style={{ height: "150px" }}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="titlewrapper">
                        <h4 className="title mb-3 font_p">{feature?.title}</h4>
                        <p className="text-muted f14">{feature?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 
            <div className="keycontacts">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="title my-4 font_p">Key Contacts</h3>
                </div>
              </div>
              <div className="row">
                {team?.map((member) => (
                  <div className="col-sm-6" key={member?.id}>
                    <div className="contactWrapper mb-4 bg_white d-flex">
                      <div className="image">
                        <img src={member?.imagepath} alt="" />
                      </div>
                      <div className="d-flex align-items-center p-4">
                        <div className="">
                          <h5 className="name title font_p">{member?.name}</h5>
                          <p className="text-muted mb-3 f14">
                            {member?.designation}
                          </p>
                          <div className="contacts">
                            <div className="item text-muted f14">
                              <i className="las la-phone f16 mr-2"></i>
                              {member?.phone}
                            </div>
                            <div className="item text-muted f14">
                              <i className="las la-envelope f16 mr-2"></i>
                              {member?.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           */}
          </div>
        </section>
      </main>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>
            <div>
              <h3 className="title text_p">{title}</h3>
              <p className="text-muted mb-0 f12"> Request for proposal</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="downloadModalForm" onSubmit={handleSubmit(onSubmit)}>
            {hideForm ? (
              <div>
                <div className="form-group">
                  <label htmlFor="" className="text-muted small">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="text-muted small">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="text-muted small">
                    Contact Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="form-control"
                    placeholder="Enter Your Contact Number"
                  />
                </div>
              </div>
            ) : (
              <div className="successMessae">{successMessage}</div>
            )}
            <div className="buttonwrapper">
              <Modal.Footer className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

                <Button
                  disabled={btnDisable}
                  type="submit"
                  variant="primary"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {loadingBtn && (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden"></span>
                    </Spinner>
                  )}
                  Get Document
                </Button>
              </Modal.Footer>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
