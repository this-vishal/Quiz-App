import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserInputName() {

    const [userName, setUsername] = useState({
        firstname: '',
        lastname: '',
    })

    const inputHandler = (e) => {

        setUsername({
            ...userName,
            [e.target.name]: e.target.value
        })
    }

    console.log(userName);


    return (
        <>
            <div>

                <div>
                    <h3>Let's Start with Your Name</h3>
                    <p>We require this to generate an electronic prescription if your practitioner prescribes a treatment. </p>
                </div>

                <div>

                    <div>
                        <p>Legal First Name</p>
                        <input type="text" name='firstname'
                            onChange={inputHandler} required
                        />
                    </div>
                    <div>
                        <p>Legal last Name</p>
                        <input type="text" name='lastname' required

                            onChange={inputHandler}
                        />
                    </div>
                </div>
                <Link to={'/userconcerns'}><button>Next</button></Link>

            </div>
        </>
    )
}
