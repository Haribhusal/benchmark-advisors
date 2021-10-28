import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateInvestorProfile } from '../../actions/investor';

const InvestorEditProfileForm = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const initialValue = {
        investor_name: user?.investor_name || '',
        contact_number: user?.contact_number || '',
        email: user?.email || '',
    };

    const { register, handleSubmit } = useForm({
        defaultValues: initialValue,
    });

    const onSubmit = (data) => {
        dispatch(updateInvestorProfile(data));
    };

    return (
        <div className='row'>
            <div className='col-sm-6 d-flex align-items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
                    <div className='formwrapper'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='form-group'>
                                    <label
                                        htmlFor=''
                                        className='small text-muted'
                                    >
                                        Investor Name
                                    </label>
                                    <input
                                        {...register('investor_name')}
                                        className='form-control'
                                        placeholder='Investor Name'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='form-group'>
                                    <label
                                        htmlFor=''
                                        className='small text-muted'
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        {...register('contact_number')}
                                        className='form-control'
                                        placeholder='Contact Number'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='form-group'>
                                    <label
                                        htmlFor=''
                                        className='small text-muted'
                                    >
                                        Email
                                    </label>
                                    <input
                                        {...register('email')}
                                        type='email'
                                        className='form-control'
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-between'>
                                <input
                                    type='Submit'
                                    defaultValue='Submit'
                                    className='btn btn_p'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-sm-6 d-flex align-items-center'>
                <div className='rightbarContent'>
                    <div className='imagewrapper'>
                        <img
                            src='images/joinbenchmark.png'
                            className='img-fluid'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorEditProfileForm;
