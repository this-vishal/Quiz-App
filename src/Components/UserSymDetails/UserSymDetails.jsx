import React, { useState } from 'react'

import {symData} from '../UserSymDetailsData';
import UserSym from './UserSym';


export default function UserSymDetails() {

    const [symptumDetails, setSymptumDetails] = useState([]);
    const [symptumData, setSymptumData] = useState([...symData]);
    const [step , setStep] = useState(0)
    const [renderData , setRenderData] = useState(symptumData.slice(0 , 1));
    

    const getSymptumDetails =(e)=>{

      console.log(e.target.name);

    }
  console.log(symptumDetails);

    const handleRenderComponent = async(data)=>{

    
      await setStep(step+1);
     
       await setRenderData(symptumData.slice(step , step + 1));
       await setSymptumDetails((prevState)=>{

           return [...prevState, data];
       })
      

    }
    





  return (
    <>

      {
        renderData.map((symptum, index) => {
          return (
          <>  
          <UserSym
            question={symptum.question}
            options={symptum.options}
            facet={symptum.facet_tip}
            getSymptumDetails={getSymptumDetails}
            option_type={symptum.option_type}
            handleRenderComponent={handleRenderComponent}

          />
          </>
      
          )
        })
      }

    </>
  )
}

