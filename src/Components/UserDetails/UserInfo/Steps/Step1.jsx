import React, { useState } from 'react'

export default function Step1({ setStep ,setUserInfo }) {


    const handleInputChange = (event) => {
        setUserInfo((prevState)=>{
            return {
              ...prevState,
                [event.target.name]: event.target.value
            }
        })

    };

    return (
        <>
            <div >
                <div>
                    <h4>LET'S SEE IF FACET IS A FIT FOR YOU.</h4>
                    <h2>Which state do you live in?</h2>
                    <p>We'll use this to connect you with a provider licensed in your state and ensure our pharmacy can ship treatments to you.</p>
                </div>
                <div>
                    <label >State</label>
                    <select name='country'  onChange={handleInputChange}>
                   
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                <button onClick={() => setStep((prevState) => prevState + 1)}>Continue</button>
            </div>
        </>
    )
}
