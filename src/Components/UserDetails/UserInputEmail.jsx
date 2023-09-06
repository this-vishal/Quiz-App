import React from 'react'

export default function UserInputEmail() {


const [userContact , setUserContact] = useState({
   email:'',
   phone:'',
})

const inputHandler = (e)=>{

    setUsername({
      ...userContact,
        [e.target.name]:e.target.value
    })
}

console.log(userContact);


    return (
        <>
            <div>

                <div>
                    <h3>Enter you email and phone</h3>
                    <p>Help us find or set up your account by verifying your email and phone. Referral credit is only valid for verified new patients</p>
                </div>

                <div>

                    <div>
                        <p>Email</p>
                        <input type="email" name='email' required
                        onChange={inputHandler}/>
                    </div>
                    <div>
                        <p>Phone</p>
                        <input type="number"  name='phone' onChange={inputHandler} required/>
                    </div>
                </div>
                <button>Continue</button>
            </div>
        </>
    )
}
