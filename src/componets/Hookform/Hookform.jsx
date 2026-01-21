import React from 'react'
import UseInputField from '../hooks/UseInputField';

const Hookform = () => {
    const [email,emailOnchage] = UseInputField('')

    const handleSubmit = e=>{
     e.preventDefault();
     console.log('submitted value',email)
    }
  return (
    <div>
        <h2> hooks form</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='name' />
            <br />
            <input type="email" name="email" defaultValue={email} placeholder='email'  onChange={emailOnchage}/>
<br />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Hookform