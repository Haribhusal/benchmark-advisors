import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { isEmpty } from 'lodash';
import { useToasts } from 'react-toast-notifications';
import { Tab, Tabs } from 'react-bootstrap';
import { clearMessages } from '../../actions/auth';
import UpdatePasswordForm from '../../components/startup/UpdatePasswordForm';
import InvestorEditProfileForm from '../../components/investor/InvestorEditProfileForm';

export default function LoginForm() {
    const dispatch = useDispatch();
    const { addToast, removeAllToasts } = useToasts();
    const { data, errorMessage, successMessage } = useSelector(
        (state) => state.auth
    );

    const router = useRouter();

    useEffect(() => {
        return () => {
            removeAllToasts();
            dispatch(clearMessages());
        };
    }, []);

    useEffect(() => {
        if (!data || isEmpty(data?.access_token)) {
            router.push('/investor-profile');
        }
    }, [data]);

    useEffect(() => {
        console.log(
            { errorMessage, successMessage },
            'error and success message'
        );
        if (errorMessage) addToast(errorMessage, { appearance: 'error' });
        if (successMessage) addToast(successMessage, { appearance: 'success' });
    }, [errorMessage, successMessage]);

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
            className='py-5'
        >
            <section className='loginarea'>
                <div className='container'>
                    <div className='tabwrapper py-4'>
                        <Tabs
                            defaultActiveKey='edit-profile'
                            id='uncontrolled-tab-example'
                            className='mb-3'
                        >
                            <Tab
                                eventKey='edit-profile'
                                className=''
                                title='Edit Profile'
                            >
                                <InvestorEditProfileForm />
                            </Tab>
                            <Tab
                                eventKey='update-password'
                                className=''
                                title='Update Password'
                            >
                                <UpdatePasswordForm />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </main>
    );
}
