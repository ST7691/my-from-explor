import React, { useState } from 'react'

const UseInputField = ( defaultValue) => {
    const [fieldvalue,setFieldvalue]= useState(defaultValue);
    const handelOnChange = e =>{
        setFieldvalue(e.target.value);
    }
  return [fieldvalue,handelOnChange];
}

export default UseInputField