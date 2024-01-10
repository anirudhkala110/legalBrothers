import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Components/Landing';
import Navbar from './Utils/Navbar';
import Contact from './Components/Contact';
import AllCasesStudies from './Components/AllCasesStudies';
import FamilyLaw from './Assets/FamilyLaw';
import CriminalDefence from './Assets/CriminalDefence';
import BusinessLaw from './Assets/BusinessLaw';
import ImmigrationLaw from './Assets/ImmigrationLaw';
import Footer from './Utils/Footer';
import PrivacyPolicy from './Utils/PrivacyPolicy';
import TermsConditions from './Utils/TermsConditions';
import Accessibility from './Utils/Accessibility';
import PropertyAuditing from './Assets/PropertyAuditing';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet"
import StudentLaws from './Assets/StudentLaws';
import AccidentalLaw from './Assets/AccidentalLaws';
import ImageGallery from './Images/ImageGallery';
import AddUpdate from './Components/AddUpdate';
import LoginRegister from './admin/LoginRegister';
import BoardRevenue from './Assets/BoardRevenue';

import axios from 'axios';
axios.defaults.withCredentials = true
function App() {
  const handleButtonClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='bg-black' style={{ minWidth: "380px" }}>
      {
          <div>
            <button className='btn slider text-white' onClick={e => handleButtonClick(8172846811)} style={{ background: "#D90700" }}>
              <div><b><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;<strong>CALL NOW</strong></b> <br className='br-in-slider' /><span className='Number'>+91-8172846811</span></div>
            </button>
            <Navbar />
            <div className="App" style={{minHeight:"80vh"}}>
              <Router>
                <Helmet>
                  <title>Legal Brothers</title>
                  <meta name='description' content='At Legal Brothers, we are committed to delivering exceptional legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal needs are met with the utmost professionalism, expertise, and care. Whether you are facing a complex legal issue or seeking legal advice, we are here to guide you through the process and provide the best possible legal solutions.' />
                  <meta name='keywords' content='Legal Brothers, Court Cases, Family Cases, Immigration, Child Custody, Property Drafting, Property Auditing, Legal Information, Government Acts, Advocates, Best Advocates in Lucknow, Best Advocate in Lucknow, Best Advocate in India, Best Advocate New Delhi, Best Advocates in Lucknow and Near Locations, Legal Information and queries, Legal Information, Legal Services, Court Representation, Legal Advice, Trial Attorneys, Court Proceedings, Legal Consultation, Legal Advocacy, Legal Aid, Criminal Defense, Civil Litigation, Legal Resources, Legal Support, Court Case Assistance, Legal Counsel, Judicial System, Legal Rights, Legal Assistance, Attorney Services, Courtroom Representation, Lucknow Legal Services, Lucknow Court Representation, Lucknow Trial Attorneys, Lucknow Legal Consultation, Court Case Help in Lucknow,Legal RoadmapAccident Advocacy,Justice Journey,Advocate Allies,Injury Insight,Legal Compass,Claim Clarity,Accident Advocates,Rights Rescued,Justice Junction' />
                </Helmet>
                <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route exact path='/contact-us' element={<Contact />} />
                  <Route exact path="/all-case-study" element={<AllCasesStudies />} />
                  <Route exact path="/family-law" element={<FamilyLaw />} />
                  <Route exact path="/criminal-defense" element={<CriminalDefence />} />
                  <Route exact path="/business-law" element={<BusinessLaw />} />
                  <Route exact path="/immigration-law" element={<ImmigrationLaw />} />
                  <Route exact path="/property-auditing-law" element={<PropertyAuditing />} />
                  <Route exact path="/student-laws" element={<StudentLaws />} />
                  <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route exact path="/terms-conditions" element={<TermsConditions />} />
                  <Route exact path="/accessibility" element={<Accessibility />} />
                  <Route exact path="/accidental-laws" element={<AccidentalLaw />} />
                  <Route exact path="/revenue-board" element={<BoardRevenue />} />
                  <Route exact path="/Gallery" element={<ImageGallery />} />
                  <Route exact path="/auth/isValid/:auth/add-update" element={<AddUpdate />} />
                  <Route exact path="/auth/admin/login&register" element={<LoginRegister />} />
                </Routes>
              </Router>
            </div>
            <Footer />
          </div>
      }
    </div >
  );
}

export default App;
