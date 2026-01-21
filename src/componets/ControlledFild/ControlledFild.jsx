import React, { useState } from 'react'

const ControlledFild = () => {
    const [name,setName]= useState('')
    const [email,setEmail] = useState('')
    const [password, setpassword]= useState('')
    const [error,seterror]= useState('')

    const loginData = e =>{
        e.preventDefault();
         console.log(name,email,password)

    }
    const handleName = e=>{
        setName(e.target.value);
    }
    const handelEmail= e=>{
      setEmail(e.target.value)
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
            <input type="text" name="name" placeholder='name'onChange={ handleName} defaultValue={name} />
            <br />
            <input type="email" onChange={handelEmail} defaultValue={email} name="email"placeholder='email' required/>
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