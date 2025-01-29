
import React, { useState } from 'react'
import './Cotact.css'


const Contact = () => {


        const [selectedOption, setSelectedOption] = useState("email");
        
        const [emailValue, setEmailValue] = useState("");
        const [phoneValue, setPhoneValue] = useState("");
      

      
  function handleChange(e) {
    setEmailValue(e.target.value);
  }


function handleChanges(e) {
    setPhoneValue(e.target.value);
}


  return (
    <div>
      
       <div className="contacts">
             <div className="left_contact">
              <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" width="400" alt="" />
             </div>
             <div className="right_contact">
                <h2> Get the Zomato app</h2>
                <p> We will send you a link, open it on your phone to download the app</p>

                   <form action="">
                    <label htmlFor="">
                      <input 
                      type="radio"  
                      name='contact'
                      onClick={() => setSelectedOption("email")}
                      
                       value={selectedOption === "email"}
                      /> Email 

                    </label>

                    <label htmlFor="">
                      <input 
                      type="radio" 
                      name='contact' 
                      onClick={() => setSelectedOption("phone")}
                     
                      value={selectedOption === "phone"}
                      /> Phone 
                    </label>

                      <div className="inputs">


{ 
selectedOption === "email" ? (      
<input 
onChange={handleChange} 
value={emailValue} type="email" />) 
: 
<input
type="number" 
value={phoneValue}  
onChange={handleChanges}  />

}  

  

                       <button> Share App Link </button>

                      </div>
                       



                   </form>

                      <p> Download app from </p>

                      <p>  {  emailValue}    </p>
                      <p>  {phoneValue} </p>

             </div>
       </div>

    </div>
  )
}

export default Contact