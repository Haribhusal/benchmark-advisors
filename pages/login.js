import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../actions/auth'

export default function LoginForm() {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const onSubmit = data => console.log(data)

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formwrapper col-sm-6 m-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="titlewrapper">
                                <h3 className="title font_p">Login</h3>
                                <p className="text-muted small">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Corrupti incidunt repudiandae quo.
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
                                    name="personal_name"
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label htmlFor="" className="small text-muted">
                                    Enter Password
                                </label>
                                <input
                                    {...register("password")}
                                    name="personal_contact_number"
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={() => reset()}
                            >
                                Cancel
                            </button>
                            <input
                                type="Submit"
                                value="Submit"
                                className="btn btn_p"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </main>
    )
}
