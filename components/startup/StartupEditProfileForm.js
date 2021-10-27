import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { clearMessages, updateStartupProfile } from '../../actions/auth';

const StartupEditProfileForm = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const initialValue = {
        startup_name: user?.startup_name || '',
        contact_number: user?.contact_number || '',
        email: user?.email || '',
        personal_name: user?.personal_name || '',
        personal_contact_number: user?.personal_contact_number || '',
        personal_email: user?.personal_email || '',
        personal_address: user?.personal_address || '',
    };

    const { register, handleSubmit } = useForm({
        defaultValues: initialValue,
    });

    const onSubmit = (data) => {
        dispatch(updateStartupProfile(data));
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
                                        Startup Name
                                    </label>
                                    <input
                                        {...register('startup_name')}
                                        className='form-control'
                                        placeholder='Startup Name'
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
                            <div className='col-sm-12'>
                                <div className='form-group'>
                                    <label
                                        htmlFor=''
                                        className='small text-muted'
                                    >
                                        Personal Name
                                    </label>
                                    <input
                                        {...register('personal_name')}
                                        className='form-control'
                                        placeholder='Personal Name'
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
                                        Personal Contact Number
                                    </label>
                                    <input
                                        {...register('personal_contact_number')}
                                        className='form-control'
                                        placeholder='Personal Contact Number'
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
                                        Personal Email
                                    </label>
                                    <input
                                        {...register('personal_email')}
                                        className='form-control'
                                        placeholder='Personal Email'
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
                                        Personal Address
                                    </label>
                                    <input
                                        {...register('personal_address')}
                                        className='form-control'
                                        placeholder='Personal Address'
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

export default StartupEditProfileForm;
