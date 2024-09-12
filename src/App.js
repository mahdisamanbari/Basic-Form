import React, { useState } from 'react';

const App = () => {
  const[valid,setValid] =useState(false);
  const[submit,setSubmit]=useState(false)
  const[inputValue,setInputValue] =useState({
    firstName: '',
    LastName: '',
    email: ''
  })
  const firstNameChange =(event)=>{
    setInputValue({...inputValue,firstName:event.target.value})
    console.log(inputValue);
  }
  const LastNameChange =(event)=>{
    setInputValue({...inputValue,LastName:event.target.value})
  }
  const emailChange =(event)=>{
    setInputValue({...inputValue,email:event.target.value})
  }
  const submitHandler = (event)=>{
    event.preventDefault()
    if(inputValue.firstName && inputValue.LastName && inputValue.email){
      setValid(true)
    }
    setSubmit(true)
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={submitHandler}>
        {submit && valid ?<div className='success-message'> Success ! your form registered.</div> :null}
       
        <input
          onChange={firstNameChange}
          value={inputValue.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submit && !inputValue.firstName ?<span>please enter a first name</span> : null}
      
        <input
        onChange={LastNameChange}
        value={inputValue.LastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submit && !inputValue.LastName ?<span>please enter a last name</span>:null}
      
        <input
        onChange={emailChange}
        value={inputValue.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submit && !inputValue.email ?<span>please enter an email</span>:null}
       
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default App;