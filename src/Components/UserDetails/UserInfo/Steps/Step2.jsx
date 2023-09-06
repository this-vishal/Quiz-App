import React, { useState } from 'react'

export default function Step2({setStep , setUserInfo}) {




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
            <h4>YOUR STATE IS COVERED BY FACET!</h4>
            <h2>What's your date of birth?</h2>
            <p>Facet can only treat patients who are over 18 at this time.</p>
        </div>
        <div>
            <label >Date of birth</label>
            <input
            name='dob'
                type="date"
           
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
        <button onClick={() => setStep((prevState)=>prevState+1)}>Continue</button>
    </div>
</>
  )
}
