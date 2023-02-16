// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const initialValues = {
  firstName: "",
  lastName: "",
  age:"",
  email:"",
  sex:"",
};

const validate = (values) =>{
  const errors = {}
  if(!values.firstName){
    errors.firstname = "first name empty"
  }else if(values.firstName.lenght < 4){
    errors.firstName = "name is requieres at list 4 characters"
  }
  if(!values.lastName){
    errors.lastname = "last name empty"
  }else if(values.lastName.length < 4){
    errors.lastName = "last name is requieres at list 4 characters"
  }
  if(!values.email.includes("@gmail.com")){
    errors.email = "inccorrenct format"
  }
  if(values.age < 18){
    errors.age = "You are not of legal age"
  }
  if(!values.sex){
    errors.sex = "pleas select your sex"
  }
  return errors;
} 



// submitis dros agzavnis magram carela masivs  amitom ar vici deleiti da editi rogor mushaobs sad maqvs shecdoma egec ver vipove





function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:3001/users", ).then((data) => {
  //     console.log(data)
  //   })
  // })
  // useEffect(() => {
  //   axios.post("http://localhost:3001/users", initialValues).then((data) => {
  //     console.log(data)
  //   })
    
  // })
  const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isUserUpdating, setIsUserUpdating] = useState(false);
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name]: value})
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      setFormErrors(validate(formValues))
      axios.post("http://localhost:3001/users", initialValues).then((data) => {
        console.log(data)
      })

      if(isUserUpdating) {
        setUsers((prevUsers) => {
          const newUsersArray = prevUsers.reduce((acc, curr) => {
            const userObj = curr.id === formValues.id ? formValues : curr;
            return [...acc, userObj]
          }, [])
          return newUsersArray;
        })
      }else {
        setUsers((prevUsers) => {
          return [...prevUsers, {...formValues, id: new Date().toString()}]
        })
      }
      setFormValues(initialValues)
      setIsUserUpdating(false)
      
    }
    const onDelete = (id) => {
      setUsers((prevUsers) => {
        const newUsersArray = prevUsers.filter((user) => user.id !== id)
        axios.delete("http://localhost:3001/users/${user.id}").then((data) => {
        console.log(data)
      })
        return newUsersArray
      })
    }
    const onEdit = (id) => {
      const selectedUser = users.find((user) => user.id === id)
      setFormValues(selectedUser)
      axios.put("http://localhost:3001/users/${user.id}").then((data) => {
        console.log(data)
      })
    }
    return (
      <div  className="App">
        <div>
          <label>name</label>
          <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          />{""}
          {formErrors.firstName && <p>{formErrors.firstName}</p>}
        </div>
        <div>
          <label>lastname</label>
          <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          />{""}
          {formErrors.lastName && <p>{formErrors.lastName}</p>}
        </div>
        <div>
          <label>email</label>
          <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          />{""}
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div>
          <label>age</label>
          <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
          />{""}
          {formErrors.age && <p>{formErrors.age}</p>}
        </div>
        <select onChange={handleChange}>
          <option value={formValues.sex}>male</option>
          <option value={formValues.sex}>female</option>
          <option value={formValues.sex}>other</option>
        </select>
        <button onClick={handleSubmit} type="submit">submit</button>
        {users.map((user) => (
          <div key={user.id}> {user.firstName} {user.lastName} {user.age} {user.email}
            <button onClick={() => {
              setIsUserUpdating(true)
              onEdit(user.id)
            }}>
              edit
            </button>
            <button onClick={() => onDelete(user.id)}>delete</button>
          </div>
        ))}
      </div>
    );
}

export default App;
