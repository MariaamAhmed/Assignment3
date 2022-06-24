import React, { useState } from "react";
import { Button } from './Button';
import './Footer.css';

function Subscribe(){
    const[email,setEmail]=useState("");
    const [message, setMessage] = useState("");

    const emailValidation=()=>{
        const regEx= /[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g
if (regEx.test(email)){
    setMessage("Valid Email!");
}else if (!regEx.test(email)&& email!==""){
setMessage("Provide with  valid email");
}else{
    setMessage("");
}
    };



    const handleOnChange=(e)=>{
setEmail(e.target.value);
    };
    return(
        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive our deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={email} onChange={handleOnChange}
            />
            <Button buttonStyle='btn--outline' onClick={emailValidation} >Subscribe</Button>
            <div className="message">
                {message}
            </div>


          </form>
        </div>
      </section>

    )
}

export default Subscribe;   

