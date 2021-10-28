import React from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePassword } from '../../actions/auth';

const UpdatePasswordForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const schema = yup.object().shape({
        old_password: yup.string().required(),
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispatch(
            updatePassword(
                data,
                router.pathname === '/startup/edit-profile'
                    ? 'startup'
                    : 'investor'
            )
        );
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
                                        Current Password
                                    </label>
                                    <input
                                        {...register('old_password')}
                                        name='old_password'
                                        type='password'
                                        className='form-control'
                                        placeholder='Current Password'
                                    />
                                    {errors?.old_password?.type ===
                                        'required' && (
                                        <span className='text-danger'>
                                            Current Password is a required field
                                        </span>
                                    )}
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
                                        New Password
                                    </label>
                                    <input
                                        {...register('password')}
                                        name='password'
                                        type='password'
                                        className='form-control'
                                        placeholder='New Password'
                                    />
                                    {errors?.password?.type === 'required' ? (
                                        <span className='text-danger'>
                                            New Password is a required field
                                        </span>
                                    ) : (
                                        <span className='text-danger'>
                                            {errors.password?.message}
                                        </span>
                                    )}
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
                                        Confirm Password
                                    </label>
                                    <input
                                        {...register('password_confirmation')}
                                        name='password_confirmation'
                                        type='password'
                                        className='form-control'
                                        placeholder='Confirm Password'
                                    />
                                    {errors?.password_confirmation?.type ===
                                    'required' ? (
                                        <span className='text-danger'>
                                            Confirm Password is a required field
                                        </span>
                                    ) : (
                                        <span className='text-danger'>
                                            {
                                                errors.password_confirmation
                                                    ?.message
                                            }
                                        </span>
                                    )}
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
    );
};

export default UpdatePasswordForm;
