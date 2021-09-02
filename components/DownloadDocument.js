import React, { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

const DownloadDocument = (props) => {

  const [show, setShow] = useState();
  const router = useRouter();
  const [btnDisable, setBtnDisable] = useState(false);
  const [hideForm, setHideForm] = useState(true);

  const handleClose = () => {
    setShow({show: false});
    
  }
  const handleShow = () => {
    setShow(true)
  };

  const [loadingBtn, setLoadingBtn] = useState(false);


  const { register, handleSubmit } = useForm();
 
  const [successMessage, setSuccessMessage] =useState();


  const onSubmit = async (data, e) => {
    console.log('from data',props.id)
    
    e.preventDefault();
    setLoadingBtn(true)
    setBtnDisable(true)
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      file_id: props.id

    }

    axios.post('https://benchmark.promotingnepal.com/api/brochure-download', formData)
    .then(res => {
      setSuccessMessage(res.data.message);
      setLoadingBtn(false)
      setHideForm(false)
    })
    .catch(err => {
    console.log(err)
    })
  };
  
  return (
    <>
  
        <div className="col-sm-4" onClick={handleShow } key={props.id}>
          <div className="docwrapper">
            <div className="icon">
              <i className="las la-file-alt"></i>
            </div>
            <div className="label">
              <h5 className="title mb-0">{props.title} </h5>
            </div>
            <div className="arrow">
              <i className="las la-download"></i>
            </div>
          </div>


          <Modal
            centered
            show={show}
          >
            <Modal.Header>
              <Modal.Title>
                <h5 className="title mb-0 text_p">Download {props.title}</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                className="downloadModalForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                {hideForm?
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
                {/* <input
                  type="number"
                  className="hidden hide"
                  style={{ display: "none" }}
                  value={doc.id}
                  {...register("file_id")}
                /> */}
                </div>
                : (
              <div className="successMessae">
              {successMessage}
            </div>
                )
                }
                <div className="buttonwrapper">
                  <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          
                    <Button   disabled={btnDisable} type="submit" variant="primary" style={{display: 'flex', alignItems: 'center', 
                    gap: '10px',}}>

                    {loadingBtn &&
                   
                    <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                    </Spinner>
                    }

                      Get Document
                    </Button>
                  </Modal.Footer>
                </div>
              </form>
             
            </Modal.Body>
          </Modal>
        </div>
   
    </>
  );
};

export default DownloadDocument;
