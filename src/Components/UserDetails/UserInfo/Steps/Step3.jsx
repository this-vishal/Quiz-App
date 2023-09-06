import React, { useState } from 'react'

export default function Step3({setStep , setUserInfo}) {





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
                    <p>Good News! Facet Can Help</p>
                    <h2>Let’s start your patient profile.</h2>
                    <p>We’ll use this information to save your responses and to create your secure account .</p>
                </div>
                <div>
                    <label>First Name:</label>
                    <input
                    name='firstname'
                        type="text"
                     
                        onChange={handleInputChange}
                        required
                    />

                    <label>Last Name:</label>
                    <input
                    name='lastname'
                        type="text"
                
                        onChange={handleInputChange}
                        required
                    />

                    <label>Email:</label>
                    <input
                    name='email'
                        type="email"
                     
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <i>icon</i>
                    <h4>Face Tip</h4>
                    <p>
                        We use information like the state you live in and your birthday to make sure Facet can treat you. Next, you'll create a patient profile and answer more questions about your symptoms.
                    </p>
                </div>
                <div>
                    <input type='checkbox'/><span>I agree to Facet Terms ^ Conditionns and Privacy Policy.</span>
                </div>
                <button onClick={() => setStep((prevState)=>prevState+1)}>Continue</button>
            </div>
        </>
    )
}
