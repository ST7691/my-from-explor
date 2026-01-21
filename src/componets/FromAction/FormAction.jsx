import React from 'react'

const FormAction = () => {
    const formActionSubmit = (formdata)=>{
        // e.preventDefault();
        console.log(formdata .get('email'))
        console.log(formdata.get('password'))
    }
  return (
    <div>
        <h2>FormAction a formdata diye data dekanu</h2>
       <form action={formActionSubmit} >
        <input type="text" name="email"placeholder='email' />
        <br />
        <input type="text" name="password" placeholder='password' />
        <br />
        <input type="submit"value="submit" />
       </form>
    </div>
  )
}

export default FormAction