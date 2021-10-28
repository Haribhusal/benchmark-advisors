import * as yup from 'yup';
import Link from 'next/link';
import Select from 'react-select';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useToasts } from 'react-toast-notifications';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { signUpInvestor } from '../../actions/investor';

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
    investor_name: yup.string().required('Investor Name is Required'),
    contact_number: yup.string().required(),
    // .matches(phoneRegExp, "Phone number is not valid"),
    email: yup
        .string()
        .email('Must be Valid Email')
        .max(255)
        .required('Investor Email is Required'),
    password: yup
        .string()
        .required()
        .min(8)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Must contain at least one uppercase letter, number and special character'
        ),
    password_confirmation: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

const InvestorSignup = () => {
    const router = useRouter();
    const { addToast } = useToasts();

    const {
        register,
        setValue,
        getValues,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    });
    const dispatch = useDispatch();

    const { isLoading, message, signupsuccess, successMessage, errorMessage } =
        useSelector((state) => state.investorSignup);

    const onSubmit = (e) => {
        dispatch(signUpInvestor(e));
    };

    useEffect(() => {
        if (errorMessage) addToast(errorMessage, { appearance: 'error' });
        if (successMessage)
            addToast(successMessage, {
                appearance: 'success',
            });
    }, [dispatch, errorMessage, successMessage]);

    return (
        <main
            className='page'
            style={{
                backgroundImage: "url('/background/bg.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <section className='py-5 joinstartup'>
                <div className='container'>
                    <div className='row'>
                        {signupsuccess ? (
                            <div className='col-sm-7'>
                                <div className='messateTitle d-flex gap align-items-center mb-4'>
                                    <div className='img'>
                                        <img
                                            src='/images/celebration.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='label'>
                                        <h3 className='title font_p'>
                                            {successMessage}
                                        </h3>
                                    </div>
                                </div>
                                <div className='body'>
                                    <p className='text-muted'>
                                        Thank you. Your Signup Request has been
                                        submitted successfully.
                                    </p>
                                    <div className='ref'>
                                        <div className='text-muted'>
                                            {/* Your Reference RFP ID is{" "} */}
                                            <span className='font_p'></span>
                                        </div>
                                    </div>
                                    <div className='buttonwwrapper mt-4'>
                                        <Link href='/'>
                                            <a>
                                                <button className='btn btn_p'>
                                                    <i className='las la-home'></i>{' '}
                                                    Go to Homepage
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='col-sm-7'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='formwrapper'>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <div className='titlewrapper'>
                                                        <h3 className='title font_p'>
                                                            Investor
                                                            Informations
                                                        </h3>
                                                        <p className='text-muted small'>
                                                            Provide us the
                                                            Investor details
                                                        </p>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div className='step step1'>
                                                <div className='row'>
                                                    <div className='col-sm-12'>
                                                        <div className='form-group'>
                                                            <label
                                                                htmlFor=''
                                                                className='small text-muted'
                                                            >
                                                                Enter Your Name
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    'investor_name'
                                                                )}
                                                                name='investor_name'
                                                                type='text'
                                                                className='form-control'
                                                                placeholder='Investor Full Name'
                                                            />
                                                            {
                                                                <span className='text-danger'>
                                                                    {
                                                                        errors
                                                                            .startup_name
                                                                            ?.message
                                                                    }
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-sm-6'>
                                                        <div className='form-group'>
                                                            <label
                                                                htmlFor=''
                                                                className='small text-muted'
                                                            >
                                                                Enter your
                                                                Contact Number
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    'contact_number'
                                                                )}
                                                                name='contact_number'
                                                                type='tel'
                                                                className='form-control'
                                                                placeholder='Investor Contact Number'
                                                            />
                                                            {
                                                                <span className='text-danger'>
                                                                    {
                                                                        errors
                                                                            .contact_number
                                                                            ?.message
                                                                    }
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-6'>
                                                        <div className='form-group'>
                                                            <label
                                                                htmlFor=''
                                                                className='small text-muted'
                                                            >
                                                                Investor Email
                                                                Address
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    'email'
                                                                )}
                                                                name='email'
                                                                type='text'
                                                                className='form-control'
                                                                placeholder='Investor Email'
                                                            />
                                                            {
                                                                <span className='text-danger'>
                                                                    {
                                                                        errors
                                                                            .email
                                                                            ?.message
                                                                    }
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-sm-6'>
                                                        <div className='form-group'>
                                                            <label
                                                                htmlFor=''
                                                                className='small text-muted'
                                                            >
                                                                Password
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    'password'
                                                                )}
                                                                name='password'
                                                                type='password'
                                                                className='form-control'
                                                                placeholder=' Enter Password'
                                                            />
                                                            {
                                                                <span className='text-danger'>
                                                                    {
                                                                        errors
                                                                            .password
                                                                            ?.message
                                                                    }
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-6'>
                                                        <div className='form-group'>
                                                            <label
                                                                htmlFor=''
                                                                className='small text-muted'
                                                            >
                                                                Confirm your
                                                                password
                                                            </label>
                                                            <input
                                                                {...register(
                                                                    'password_confirmation'
                                                                )}
                                                                name='password_confirmation'
                                                                type='password'
                                                                className='form-control'
                                                                placeholder='Confirm Password'
                                                            />
                                                            {
                                                                <span className='text-danger'>
                                                                    {
                                                                        errors
                                                                            .password_confirmation
                                                                            ?.message
                                                                    }
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='row'>
                                                <div className='col-sm-12 d-flex justify-content-between'>
                                                    <input
                                                        type='submit'
                                                        defaultValue={'Submit '}
                                                        className='btn btn_p'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className='col-sm-5 d-flex align-items-center'>
                                    <div className='rightbarContent'>
                                        <div className='imagewrapper'>
                                            <img
                                                src='images/joinbenchmark.png'
                                                className='img-fluid'
                                                alt=''
                                            />
                                        </div>
                                        <div className='textwrapper text-center'>
                                            <h3 className='title font_p mb-3'>
                                                Find Startups to Invest with
                                                Benchmark Advisors
                                            </h3>
                                            <p className='text-muted'>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Magni quae temporibus tenetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InvestorSignup;
