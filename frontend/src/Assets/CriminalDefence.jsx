import React from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
axios.defaults.withCredentials = true
const CriminalDefence = () => {
  return (
    <div className='py-2 bg-white'>
      <Helmet>
        <title>Legal Brothers - Criminal Defense</title>
        <meta name='description' content='Legal brothers provide you the best Legal Criminal Services in Lucknow,U.P, India' />
        <meta name='keywords' content='Court Cases, Government Acts, Advocates in India, Best Advocate Near New Delhi' />
      </Helmet>
      <div className='mt-4 pt-3 container' style={{ background: "rgb(0 0 0 / 5%)", height: "100%" }}>
       <h1> <div className='fw-bolder border-bottom border-secondary py-3 border-3 w-100 d-flex justify-content-center align-items-center' style={{ color: "rgb(217, 7, 0)" }}>Criminal Defense</div></h1>
        <div className='container text-dark py-4' style={{ minHeight: "80vh" }}>
          <div className='fs-5'>
            Facing <b>criminal charges</b> can be a daunting experience, but you don't have to face it alone. Our <b>criminal defense attorneys</b> have a proven track record of successfully defending clients in a wide range of cases, from minor misdemeanors to serious felonies.
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>01. &nbsp;&nbsp;  Misdemeanors </div>
            <div className='px-5 '>
              We handle cases involving misdemeanor offenses such as theft, drug possession, and traffic violations. Our lawyers will work diligently to secure the best possible outcome for your case.
            </div>
          </div>
          <hr />
          <div>
            <div className='fs-4 fw-semibold' style={{ color: "rgb(217, 7, 0)" }}>02. &nbsp;&nbsp;Felonies</div>
            <div className='px-5 '>
              Felony charges are more serious and carry severe consequences. Our experienced attorneys are well-prepared to provide you with a strong legal defense in complex felony cases.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CriminalDefence