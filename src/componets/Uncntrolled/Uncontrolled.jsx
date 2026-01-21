import React, { useRef } from 'react'

const Uncontrolled = () => {
    const  emailRef = useRef('');
    const passwordRef = useRef('');
     const handleSubmit = e =>{
       e.preventDefault();
       console.log(emailRef.current.value);
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       console.log(email,password)

     }
  return (
    <div>
        <h2>Uncontrolled</h2>
       <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='email'  ref={emailRef}/>
        <br />
        <input type="password" name="password" placeholder='password' ref={passwordRef}/>
        <br />
        <input type="submit"value="submit" />
       </form>
    </div>
  )
}

export default Uncontrolled