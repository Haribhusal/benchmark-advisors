import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { Tab } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Tabs } from 'react-bootstrap';

const AdvisoryAndConsulting = () => {
    const router = useRouter();

    const { data } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!data || isEmpty(data?.access_token)) {
            router.push('/investor/login');
        }
    }, [data]);

    return (
        <>
            <main
                className='page'
                style={{
                    backgroundImage: "url('/background/bg.png')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
                className='py-5 investor_profile'
            >
                <section className='iconImage py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='imagewrapper mt-5'>
                                    <img
                                        src='https://via.placeholder.com/80X80'
                                        className='rounded_big'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-7 d-flex align-items-center'>
                                <div className='textwrapper'>
                                    <h3 className='title font_p text_big mb-0'>
                                        {data?.investor_name || ''}
                                    </h3>
                                    <p className='text f14 text-muted my-3'>
                                        CEO at Vayner Media
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-5 d-flex align-items-center justify-content-end'>
                                <div className='buttonwrapper'>
                                    <div className='contactdetails  d-flex gap'>
                                        <div className='detail'>
                                            <img
                                                src='/icons/risk.svg'
                                                className='icon'
                                                alt=''
                                            />
                                            <span className='data text-muted f14'>
                                                +977-98XXXXXXXX
                                            </span>
                                        </div>
                                        <div className='detail'>
                                            <img
                                                src='/icons/risk.svg'
                                                className='icon'
                                                alt=''
                                            />
                                            <span className='data text-muted f14'>
                                                {data?.email || ''}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='factswrapper'>
                                    <div className='fact px-3 py-2 bg-success text_white text_w d-flex  justify-content-between align-items-center fact-green'>
                                        <div className='data font_p'>
                                            $1,754,620
                                        </div>
                                        <div className='label text_w f14'>
                                            Amount Invested
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='factswrapper'>
                                    <div className='fact px-3 py-2 bg-default text_t text_w d-flex  justify-content-between align-items-center fact-green'>
                                        <div className='data font_p'>
                                            $1,754,620
                                        </div>
                                        <div className='label text_t f14'>
                                            Amount Committed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='tabwrapper my-3'>
                                    <Tabs
                                        defaultActiveKey='detail'
                                        id='uncontrolled-tab-example'
                                        className='mb-3'
                                    >
                                        <Tab eventKey='detail' title='Details'>
                                            <p className='text-muted f14'>
                                                Lorem ipsum dolor sit amet,
                                                ipsum dolo dipiscing elit, sed
                                                do eiusmod tempor incididunt
                                                consectetur adipiscing
                                                elit.Lorem ipsum dolor sit amet,
                                                ipsum dolo dipiscing elit, sed
                                                do eiusmod tempor incididunt
                                                consectetur adipiscing elit
                                                lorem ipsum dolor sit amet,
                                                Lorem ipsum dolor sit amet,
                                                ipsum dolo dipiscing elit, sed
                                                do eiusmod tempor incididunt
                                            </p>
                                        </Tab>
                                        <Tab
                                            eventKey='portfolio'
                                            title='Portfolio'
                                        >
                                            <div className='portfolios'>
                                                <div className='row'>
                                                    <div className='col-sm-4'>
                                                        <div className='portfoliowrapper bg_white rounded_medium'>
                                                            <div className='invested'>
                                                                Rs. 20,00,000
                                                            </div>
                                                            <div className='image'>
                                                                <img
                                                                    src='https://via.placeholder.com/300X150'
                                                                    className='img-fluid rounded_medium'
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='profile'>
                                                                <img
                                                                    src='https://via.placeholder.com/100/100'
                                                                    className='profile'
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='details datawrapper p-4'>
                                                                <div
                                                                    className='shortdetail item'
                                                                    style={{
                                                                        borderBottom:
                                                                            'none',
                                                                    }}
                                                                >
                                                                    <div className='name data-blurred'>
                                                                        <h3 className='title font_p f18 mb-2'>
                                                                            Hritesh
                                                                            Kishor
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className='datadetails portfolioData'>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            2018
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Year
                                                                            of
                                                                            Incorporation
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            Yes
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            PAN/VAT
                                                                            Status
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            50+
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Total
                                                                            Employees
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            No
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Pending
                                                                            Legal
                                                                            Cases
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            N/A
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Brand
                                                                            Name
                                                                            Registered
                                                                        </div>
                                                                    </div>
                                                                    <div className='buttonwrapper mt-3'>
                                                                        <button className='btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big'>
                                                                            View
                                                                            Details
                                                                            <i className='las la-arrow-right'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-4'>
                                                        <div className='portfoliowrapper bg_white rounded_medium'>
                                                            <div className='invested'>
                                                                Rs. 20,00,000
                                                            </div>
                                                            <div className='image'>
                                                                <img
                                                                    src='https://via.placeholder.com/300X150'
                                                                    className='img-fluid rounded_medium'
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='profile'>
                                                                <img
                                                                    src='https://via.placeholder.com/100/100'
                                                                    className='profile'
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='details datawrapper p-4'>
                                                                <div
                                                                    className='shortdetail item'
                                                                    style={{
                                                                        borderBottom:
                                                                            'none',
                                                                    }}
                                                                >
                                                                    <div className='name data-blurred'>
                                                                        <h3 className='title font_p f18 mb-2'>
                                                                            Hritesh
                                                                            Kishor
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className='datadetails portfolioData'>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            2018
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Year
                                                                            of
                                                                            Incorporation
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            Yes
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            PAN/VAT
                                                                            Status
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            50+
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Total
                                                                            Employees
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            No
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Pending
                                                                            Legal
                                                                            Cases
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            N/A
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Brand
                                                                            Name
                                                                            Registered
                                                                        </div>
                                                                    </div>
                                                                    <div className='buttonwrapper mt-3'>
                                                                        <button className='btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big'>
                                                                            View
                                                                            Details
                                                                            <i className='las la-arrow-right'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-4'>
                                                        <div className='portfoliowrapper bg_white rounded_medium'>
                                                            <div className='invested'>
                                                                Rs. 20,00,000
                                                            </div>
                                                            <div className='image'>
                                                                <img
                                                                    src='https://via.placeholder.com/300X150'
                                                                    className='img-fluid rounded_medium'
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='profile'>
                                                                <img
                                                                    src='https://via.placeholder.com/100/100'
                                                                    className='profile'
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='details datawrapper p-4'>
                                                                <div
                                                                    className='shortdetail item'
                                                                    style={{
                                                                        borderBottom:
                                                                            'none',
                                                                    }}
                                                                >
                                                                    <div className='name data-blurred'>
                                                                        <h3 className='title font_p f18 mb-2'>
                                                                            Hritesh
                                                                            Kishor
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className='datadetails portfolioData'>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            2018
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Year
                                                                            of
                                                                            Incorporation
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            Yes
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            PAN/VAT
                                                                            Status
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            50+
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Total
                                                                            Employees
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            No
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Pending
                                                                            Legal
                                                                            Cases
                                                                        </div>
                                                                    </div>
                                                                    <div className='dataitem d-flex align-items-center justify-content-between'>
                                                                        <div className='data font_p f18'>
                                                                            N/A
                                                                        </div>
                                                                        <div className='label text-muted f14'>
                                                                            Brand
                                                                            Name
                                                                            Registered
                                                                        </div>
                                                                    </div>
                                                                    <div className='buttonwrapper mt-3'>
                                                                        <button className='btn btn_p_dim text_p btn-block f14 text-uppercase py-2 rounded_big'>
                                                                            View
                                                                            Details
                                                                            <i className='las la-arrow-right'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AdvisoryAndConsulting;
