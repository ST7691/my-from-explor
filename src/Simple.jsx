import React from 'react'

const Simple = () => {
    const handelSubmit = (e)=> {
    e.preventDefault();
    //   console.log('from submit');
      console.log(e.target.name.value);
      console.log(e.target.email.value);
    }
  return (
    <div>
        <form action="" onSubmit={handelSubmit}>
            <input type="text" name= "name" placeholder='name' />
            <br />
            <input type="text" name="email"  placeholder='email' />
            <br />
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Simple