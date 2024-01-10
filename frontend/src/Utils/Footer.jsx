import React from 'react'
import logo from '../Images/PNGs/logo.png'
import { Helmet } from 'react-helmet'

import axios from 'axios'
axios.defaults.withCredentials = true
const Footer = () => {
    return (
        <div className='bg-black text-white' style={{ minHeight: "80px" }}>
            <Helmet>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers, Board Revenue' />
            </Helmet>
            <div className='container px-3 footer pt-1'>
                <div className='d-flex align-items-start me-3'>
                    <img src={logo} className='rounded-4' width={65} />
                    <p className='ms-2 mb-0'>
                        <h1 className=''>Legal Brothers</h1>
                        <p className="mb-0">EST. 2000 <i class="bi bi-c-circle"> Legal Brothers<sup>TM</sup></i></p>
                    </p>
                </div>
                {/* <div className='row  me-3 d-flex w-75' style={{maxWidth:"600px"}}>
                    <div className="col-sm-12 col-6 col-xl-6">
                        <div className="fw-semibold" style={{ color: "rgb(217, 7, 0)" }}>
                            Address
                        </div>
                        <div className="">
                            Lucknow, U.P.
                        </div>
                    </div>
                    <div className="col-sm-12 col-6 col-xl-6">
                        <div className="fw-semibold" style={{ color: "rgb(217, 7, 0)" }}>
                            Contact
                        </div>
                        <div className="">
                            +91-8172846811
                        </div>
                    </div>
                </div> */}
                {/* <div className="">
                    <div className=' fs-5 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>
                        Areas of Practice
                    </div>
                    <div className='footer-element-focus-area' style={{ listStyle: "disc" }}>
                        <div className='me-1'>
                            <div><a href='/revenue-board' className="text-decoration-none mb-2  text-light" >1. &nbsp;&nbsp;Board of Revenue</a></div>
                            <div><a href='/criminal-defense' className="text-decoration-none mb-2  text-light" >2. &nbsp;&nbsp;Criminal-Defense</a></div>
                            <div><a href='/business-law' className="text-decoration-none mb-2  text-light" >3. &nbsp;&nbsp;Business-Law & Corporatins</a></div>
                        </div>
                        <div className='ms-1'>
                            <div><a href='/immigration-law' className="text-decoration-none mb-2 text-light" >4. &nbsp;&nbsp;Immigration-Law</a></div>
                            <div><a href='/property-auditing-law' className="text-decoration-none mb-2 text-light" >5. &nbsp;&nbsp;Property-Auditing-Law</a></div>
                            <div><a href='/student-laws' className="text-decoration-none mb-2 text-light" >6. &nbsp;&nbsp;Student-Law</a> more...</div>
                        </div>
                    </div>
                </div> */}
                <div className="term-condition-base">
                    {/* <div class="nav-item mb-1 btn text-white py-1" style={{ background: "#D90700" }}>
                        <a class="nav-link" href="/contact-us">Free Legal Consultation</a>
                    </div> */}
                    <hr className='hr-footer' />
                    <div className="term-condition">
                        <div><a href='/privacy-policy' className="text-decoration-none border-bottom me-3 text-light footer-hover" > Privacy Policy</a></div>
                        <div><a href='/terms-conditions' className="text-decoration-none border-bottom me-3 text-light footer-hover" > Terms & Conditions</a></div>
                        <div><a href='/accessibility' className="text-decoration-none border-bottom me-3 text-light footer-hover" > Accessibility</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer