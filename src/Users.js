import React from 'react'
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

// const validate = (values) =>{
//     const errors = {}
//     if(!values.firstName){
//       errors.firstname = "first name empty"
//     }else if(values.firstName.lenght < 4){
//       errors.firstName = "name is requieres at list 4 characters"
//     }
//     if(!values.lastName){
//       errors.lastname = "last name empty"
//     }else if(values.lastName.length < 4){
//       errors.lastName = "last name is requieres at list 4 characters"
//     }
//     if(!values.email.includes("@gmail.com")){
//       errors.email = "inccorrenct format"
//     }
//     if(values.age < 18){
//       errors.age = "You are not of legal age"
//     }
//     if(!values.sex){
//       errors.sex = "pleas select your sex"
//     }
//     return errors;
//   } 

export const Users = () => {
  const [formValues, setFormValues] = useState(state.users);


  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name]: value})
    }
  const usersSlice = useSelector((state) => state.users)
  console.log("usersSlice", usersSlice )
  const dispath = useDispatch
  return (
    <div>
        <div>
          <label>name</label>
          <input
          type="text"
          name="firstName"
          value={usersSlice.firstName}
          // onChange={handleChange}
          />{""}
          {/* {formErrors.firstName && <p>{formErrors.firstName}</p>} */}
        </div>
        <div>
          <label>lastname</label>
          <input
          type="text"
          name="lastName"
          value={usersSlice.lastName}
          // onChange={handleChange}
          />{""}
          {/* {formErrors.lastName && <p>{formErrors.lastName}</p>} */}
        </div>
        <div>
          <label>email</label>
          <input
          type="text"
          name="email"
          value={usersSlice.email}
          // onChange={handleChange}
          />{""}
          {/* {formErrors.email && <p>{formErrors.email}</p>} */}
        </div>
        <div>
          <label>age</label>
          <input
          type="number"
          name="age"
          value={usersSlice.age}
          // onChange={handleChange}
          />{""}
          {/* {formErrors.age && <p>{formErrors.age}</p>} */}
        </div>
        <select value={usersSlice.sex}
        //  onChange={handleChange} 
         name="sex">
          <option>other</option>
          <option>female</option>
          <option>male</option>
        </select>
        <button onClick={() => dispath(usersSubmit())}
        //  type="submit"
         >submit</button>
    </div>
  )
}
