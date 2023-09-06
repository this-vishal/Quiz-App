import React, { useState } from 'react'

export default function Step4({setUserInfo}) {



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
            <p>Your Profiles Is Almost Complete!</p>
            <h2>Let’s complete your profile information</h2>

        </div>
        <div>
            <label>Password</label>
            <input
                type="password"
               name='password'
                onChange={ handleInputChange}
                required
            />
            <span>Minimum of 8 characters, including at least 3 of the 4 following types of characters: a lower-case letter, an upper-case letter, a number a special character. </span>

            <label>Sex assigned at birth</label>


            <label>Sex Assigned at Birth:</label>
            <select name='sex' onChange={ handleInputChange}>
                <option value="">Select One</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div>
            <i>icon</i>
            <h4>Face Tip</h4>
            <p>
                We use information like the state you live in and your birthday to make sure Facet can treat you. Next, you'll create a patient profile and answer more questions about your symptoms.
            </p>
        </div>
        <button onClick={()=>{}}>Continue Consultation</button>
    </div>
</>


  )
}
