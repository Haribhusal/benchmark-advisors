import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

import { useForm } from "react-hook-form";

import useSWR from "swr";

const DownloadDocument = ({ docs }) => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    await axios
      .post("https://benchmark.promotingnepal.com/api/brochure-download", data)
      .then((response) => response.data.message);
    console.log(response);
  };

  return (
    <>
      {docs?.data?.map((doc) => (
        <div className="col-sm-4" onClick={handleShow} key={doc.id}>
          <div className="docwrapper">
            <div className="icon">
              <i className="las la-file-alt"></i>
            </div>
            <div className="label">
              <h5 className="title mb-0">{doc.title}</h5>
            </div>
            <div className="arrow">
              <i className="las la-download"></i>
            </div>
          </div>
          <Modal
            centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>
                <h5 className="title mb-0 text_p">Download Document Title</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                className="downloadModalForm"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
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
                <input
                  type="number"
                  className="hidden hide"
                  style={{ display: "none" }}
                  value={doc.id}
                  {...register("file_id")}
                />
                <div className="buttonwrapper">
                  <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="custom" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Get Document
                    </Button>
                  </Modal.Footer>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      ))}
    </>
  );
};

export default DownloadDocument;
