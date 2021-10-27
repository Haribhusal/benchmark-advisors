import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { Tab, Tabs } from 'react-bootstrap';
import { clearMessages } from '../../actions/auth';
import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import UpdatePasswordForm from '../../components/startup/UpdatePasswordForm';
import UpdateDocumentForm from '../../components/startup/UpdateDocumentForm';
import StartupEditProfileForm from '../../components/startup/StartupEditProfileForm';

export default function LoginForm() {
    const dispatch = useDispatch();
    const { addToast, removeAllToasts } = useToasts();
    const { user, errorMessage, successMessage } = useSelector(
        (state) => state.auth
    );
    console.log('user', user);

    const router = useRouter();

    useEffect(() => {
        return () => {
            removeAllToasts();
            dispatch(clearMessages());
        };
    }, []);

    useEffect(() => {
        if (!user || !isEmpty(user?.access_token)) {
            router.push('/startup');
        }
    }, [user]);

    useEffect(() => {
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
                                <StartupEditProfileForm />
                            </Tab>
                            <Tab
                                eventKey='update-document'
                                className=''
                                title='Update Document'
                            >
                                <UpdateDocumentForm />
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
