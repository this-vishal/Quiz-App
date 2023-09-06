import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserConsernsMore() {

    let userCheckOptions = [
        { id: 1, option: "Red Or Discolored skin", isTrue: false },
        { id: 2, option: "Dry, rough, flaking, or scaling skin", isTrue: false },
        { id: 3, option: "Inflamed, irrited, or painful skin" },
        { id: 4, option: "Other", type: 'other', isTrue: false },
        { id: 5, option: "Itchy skin", isTrue: false },
        { id: 6, option: "Cracking, bleeding, or oozing skin", isTrue: false }

    ]


    const [userInputCheckData, setUserInputCheckData] = useState(userCheckOptions);

    console.log(userInputCheckData);
    return (

        <>

            <div>
                <h3>Tell us more. Which skin symptoms do you typically experience?</h3>

            </div>
            <div>
                <p>
                    Select all that apply.
                </p>

                <div>
                    {
                        userInputCheckData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        name={item.option}
                                        value={item.isTrue}
                                        checked={item.isTrue}
                                        
                                        onChange={(e) => {
                                            let newArray = [...userInputCheckData];


                                            newArray[index].isTrue = !newArray[index].isTrue
                                            setUserInputCheckData(newArray);
                                        }}
                                    />
                                    <label htmlFor={item.id}>{item.option}</label>
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    <i>icon</i>
                    <h4>Face Tip</h4>
                    <p>
                        Have more than one symptom? That’s very common! Our providers can help you with a range of symptoms. Unfortunately, they won’t be able to examine or treat moles or skin growths as those require face-to-face evaluation with an appropriate medical provider. Features of suspicious lesions include but are not limited to: change in shape, size, color, or texture, symptoms (such as itching, pain, bleeding, or oozing), and stores or pimples that fail to heal within 3-4 weeks.
                    </p>
                </div>
                <div>
                <Link to={'/userinfo'}> <button>Next</button></Link>
                   
                </div>


            </div>

        </>
    )
}
