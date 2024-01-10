import React, { useEffect, useState } from 'react'
import 'bootstrap/js/dist/offcanvas.js'
import 'bootstrap/js/dist/dropdown.js'
import logo from '../Images/PNGs/logo.png'
import { Helmet } from 'react-helmet'
import axios from 'axios'

axios.defaults.withCredentials = true
const Navbar = () => {
    const handleLogout = async () => {
        try {
            // Make a request to your logout endpoint
            const res = await axios.get('https://api.legalbrother.in/api/logout');
            if (res.data.success) {
                alert(res.data)
                // If the logout was successful, redirect to the login page or perform any other necessary actions
            } else {
                // Handle the case where logout was not successful (maybe show an error message)
                alert("Logout Successfully. . . ")
                window.location.href = '/';
                // console.error('Logout failed:', res.data.error);
            }
        } catch (error) {
            // Handle any unexpected errors
            console.error('An error occurred during logout:', error);
        }
    };
    const [login, setLogin] = useState(null);
    const [msg, setMsg] = useState(null);
    const [admin, setAdmin] = useState(false);

    const [name, setName] = useState(null)
    useEffect(() => {
        // Check admin authentication
        axios.get('https://api.legalbrother.in/api/protectedRoute')
            .then(res => {
                if (res.data.error !== "Unauthorized") {
                    setName(res.data.name)
                    setLogin(true);
                    setAdmin(true)
                    setMsg(false);
                }
                else {
                    setName(null)
                    setLogin(false);
                    setAdmin(false)
                    setMsg(res.data.msg);
                }
            })
            .catch(err => {
                setName(null)
                setLogin(false);
                setAdmin(false)
                setMsg(err.message);
            });
    });

    function getInitials(fullName) {
        const words = fullName.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase()).join(' ');
        return initials;
    }

    return (
        <div className='bg-light'>
            <Helmet>
                <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                <meta name='keywords' content='Legal Brothers,"Legal Salah" (Legal Advice),
"Nyay Help" (Justice Help),"Vakil Bhai" (Lawyer Brother),"Kanoon Guide" (Law Guide),"Sampatti Suraksha" (Property Protection),"Adalat Support" (Court Support),"Nyay Sathi" (Justice Companion),"Kanoon Sahayta" (Legal Assistance),"Vakil Dost" (Lawyer Friend),"Sarkari Kanoon" (Government Laws),"Kanooni Salah" (Legal Tips),"Adalat Sahyog" (Court Collaboration),"Doshi Nivaran" (Fault Resolution),"Kanoon Hak" (Legal Rights),"Nyay Sahayog" (Justice Support), Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
            </Helmet>
            <nav className="navbar bg-black text-light pt-0 px-5" style={{ maxHeight: "60px" }}>
                {/* <nav className="navbar bg-black text-light py-0 px-5" style={{maxHeight:""}}> */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src={logo} width={40} alt='Legal Brothers' className='me-2 rounded-5 border border-3 border-black' /><h2 className='text-light'>Legal Brothers</h2>
                </a>
                <button className="navbar-toggler text-light width-less-than-1000" type="button" name='navbar-toggler' data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i className="bi bi-list"></i>
                </button>
                <div className="width-more-than-1000 text-light" style={{ maxHeight: "70px" }}>
                    <a className="nav-link text-light active" aria-current="page" href="/">
                        <li className="nav-item rounded-0 mx-1 btn text-white">
                            Home
                        </li>
                    </a>
                    {/* <li className="nav-item rounded-0 mx-1 btn">
                            <a className="nav-link text-light" href="/about-us">About</a>
                        </li> */}
                    <a className="nav-link text-light" href="/Gallery">
                        <li className="nav-item rounded-0 mx-1 btn text-white">
                            Images
                        </li>
                    </a>
                    <a className="nav-link text-light" href="/all-case-study">
                        <li className="nav-item rounded-0 mx-1 btn text-white">
                            Updates
                        </li>
                    </a>
                    <li className="nav-item rounded-0 mx-1 btn dropdown">
                        <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Focus Area
                        </a>
                        <ul className='dropdown-menu width-more' style={{ listStyle: "none", maxHeight: "250px", width: "200px" }}>
                            <li className='px-3 py-1 li-hover'> <a href='/revenue-board' className="text-decoration-none" >Revenue Board</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Child Custody</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Spousal Support</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Adoption</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Divorce</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Misdemeanors</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Felonies</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Contract Drafting</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Business Information</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Intellectual Properties</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Employment Law</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Visa Applications</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Green Card Processes</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Deportation</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Property Law</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Taxation Laws</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Constitutional Perspective</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/student-laws' className="text-decoration-none" >Student Section</a></li>
                            <li className='px-3 py-1 li-hover'> <a href='/accidental-laws' className="text-decoration-none" >Injury Insight</a></li>
                        </ul>
                    </li>
                    <a className="nav-link" href="/contact-us">
                        <li className="nav-item ms-1 btn text-white py-1" style={{ background: "#D90700" }}>
                            Free Legal Consultation
                        </li>
                    </a>
                    {admin && <div className='d-flex justify-content-end'><center className='btn rounded-circle text-white' style={{ background: "#2b116e" }}><b>{getInitials(name)}</b></center><button className='btn btn-danger rounded-3 mx-2' name='logout-btn' onClick={handleLogout}>Logout</button></div>}
                </div>
                <div className="offcanvas offcanvas-start bg-white text-white" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ background: "#cde4fc", color: "white !important" }}>
                    <div className="offcanvas-header text-white">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width={40} className='me-2 rounded-5 fw-bolder border border-3 border-black text-white fs-1' />Legal Brothers
                        </a>
                        <button type="button" name='close-btn' className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr className='text-black' />
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <a className="nav-link active" aria-current="page" href="/">
                                <li className="nav-item text-black">
                                    Home
                                </li>
                            </a>
                            <a className="nav-link" href="/Gallery">
                                <li className="nav-item text-black">
                                    Images
                                </li>
                            </a>
                            <a className="nav-link" href="/all-case-study">
                                <li className="nav-item text-black">
                                    Updates
                                </li>
                            </a>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Focus Area
                                </a>
                                <ul className='dropdown-menu width-more' style={{ listStyle: "none", maxHeight: "250px", width: "200px" }}>
                                    <li className='px-3 py-1 li-hover'> <a href='/revenue-board' className="text-decoration-none" >Revenue Board</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Child Custody</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Spousal Support</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Adoption</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/family-law' className="text-decoration-none" >Divorce</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Misdemeanors</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/criminal-defense' className="text-decoration-none" >Felonies</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Contract Drafting</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Business Information</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Intellectual Properties</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/business-law' className="text-decoration-none" >Employment Law</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Visa Applications</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Green Card Processes</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/immigration-law' className="text-decoration-none" >Deportation</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Property Law</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Taxation Laws</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/property-auditing-law' className="text-decoration-none" >Constitutional Perspective</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/student-laws' className="text-decoration-none" >Student Section</a></li>
                                    <li className='px-3 py-1 li-hover'> <a href='/accidental-laws' className="text-decoration-none" >Injury Insight</a></li>
                                </ul>
                            </li>
                        </ul>
                        <a className="nav-link" href="/contact-us">
                            <li className="nav-item text-black py-2">
                                Book a Free Session
                            </li>
                        </a>
                        {login && <div className='w-100 shadow p-2 card border'><center><div className='btn rounded-circle bg-dark text-white mt-2'><b>{getInitials(name)}</b></div><br /><center className='border p-1 my-1 shadow rounded-3 bi bi-book-half d-flex align-items-center justify-content-center' style={{ cursor: 'pointer' }}>&nbsp;{name}</center></center><br /><center className='btn btn-danger rounded-0 mt-2 w-100' onClick={handleLogout}>Logout</center></div>}
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar