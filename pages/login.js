import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../actions/auth";
import { useRouter } from "next/router";

export default function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const onSubmit = (data) => {
    dispatch(login(data));
    router.push("/startup");
  };

  return (
    <main
      className="page"
      style={{
        backgroundImage: "url('/background/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="py-5"
    >
      <section className="loginarea">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center">
              <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <div className="formwrapper">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="titlewrapper">
                        <h3 className="title font_p">Login</h3>
                        <p className="text-muted small">
                          Provide us the startup login detals
                        </p>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="" className="small text-muted">
                          Enter Your Email
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group ">
                        <label htmlFor="" className="small text-muted">
                          Enter Password
                        </label>
                        <div className="passwordWrapper">
                          <input
                            {...register("password")}
                            className="form-control"
                            placeholder="Your Password"
                            type={isRevealPwd ? "text" : "password"}
                          />
                          <i
                            class={
                              isRevealPwd
                                ? "las la-eye-slash toggleEye"
                                : "las la-eye toggleEye"
                            }
                            onClick={() =>
                              setIsRevealPwd((prevState) => !prevState)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 d-flex justify-content-between">
                      <input
                        type="Submit"
                        defaultValue="Submit"
                        className="btn btn_p"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 d-flex align-items-center">
              <div className="rightbarContent">
                <div className="imagewrapper">
                  <img
                    src="images/joinbenchmark.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
