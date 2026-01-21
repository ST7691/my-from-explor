import React, { useState } from 'react'

const ControlledFild = () => {
    const [password, setpassword]= useState('')
    const [error,seterror]= useState('')

    const loginData = e =>{
        e.preventDefault();
         console.log('login data value')
    }
    const handlePassword = e =>{
     console.log(e.target.value);
     setpassword(e.target.value);
     if(password.length<6){
        seterror('password must be 6 charecter longer');
     }
     else{
        seterror('')
     }
    }
  return (
    <div>
        <h2>controlled data form</h2>
        <form action=""onSubmit={loginData} on >
            <input type="email" name="email"placeholder='email' required/>
            <br />
            <input type="password" defaultValue={password} onChange={handlePassword} name="password"placeholder='password' required/>
            <br />
            <input type="submit" value="submit"/>
        </form>
        <p style={{color:'red'}}>
            <small>{error}</small>
        </p>
    </div>
  )
}

export default ControlledFild