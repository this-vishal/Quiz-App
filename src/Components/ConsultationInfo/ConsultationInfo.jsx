import React from 'react'
import { Link } from 'react-router-dom'

export default function ConsultationInfo() {
    return (
        <>
            <div>
                <div>
                    <h2> How Your Consultation will Work</h2>
                </div>
                <div>

                    <div>
                        <p>
                            Online Assessment
                        </p>
                        <div>
                            <img src="" class="" alt="image" />
                            <p>Answer Question about your medical history and see if Plot's a good fit.</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Online Assessment
                        </p>
                        <div>
                            <img src="" class="" alt="image" />
                            <p>Answer Question about your medical history and see if Plot's a good fit.</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Online Assessment
                        </p>
                        <div>
                            <img src="" class="" alt="image" />
                            <p>Answer Question about your medical history and see if Plot's a good fit.</p>
                        </div>
                    </div>

                    <span>By clicking "Agree" below you confirm you have read our Terms & Conditions and Privacy Policy.</span>
                </div>
                <Link to={'/userinputname'}><button >Agree</button></Link> 
        

            </div>
        </>
    )
}
