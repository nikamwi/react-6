// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UsersList } from './UsersList';
import { Users } from './Users';

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   age:"",
//   email:"",
//   sex:"",
// };

// const validate = (values) =>{
//   const errors = {}
//   if(!values.firstName){
//     errors.firstname = "first name empty"
//   }else if(values.firstName.lenght < 4){
//     errors.firstName = "name is requieres at list 4 characters"
//   }
//   if(!values.lastName){
//     errors.lastname = "last name empty"
//   }else if(values.lastName.length < 4){
//     errors.lastName = "last name is requieres at list 4 characters"
//   }
//   if(!values.email.includes("@gmail.com")){
//     errors.email = "inccorrenct format"
//   }
//   if(values.age < 18){
//     errors.age = "You are not of legal age"
//   }
//   if(!values.sex){
//     errors.sex = "pleas select your sex"
//   }
//   return errors;
// } 



// deleteze da editze gavichede





function App() {
  
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [users, setUsers] = useState([]);
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isUserUpdating, setIsUserUpdating] = useState(false);
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormValues({ ...formValues, [name]: value})
  // }

    // useEffect(() => {
    //   const getUsers = async () => {
    //     try {
    //       setLoading(true);
    //       const {data} = await axios.get("http://localhost:3001/users")
    //       setUsers(data.data)
    //       setLoading(false)
    //     } catch (error) {
    //       setFormErrors(error.message)
    //       setLoading(false)
    //     }
    //   };
    //   getUsers()
    // },[])

    // if(loading){
    //   return <h1>loading....</h1>
    // }

    // if(error){
    //   return <h1>error!</h1>
    // }



    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   setFormErrors(val_idate(formValues))
    //   axios.post("http://localhost:3001/users", formValues).then((data) => {
    //     console.log(data)
    //   })
      

    //   if(isUserUpdating) {
    //     setUsers((prevUsers) => {
    //       const newUsersArray = prevUsers.reduce((acc, curr) => {
    //         const userObj = curr._id === formValues._id ? formValues : curr;
    //         return [...acc, userObj]
    //       }, [])
    //       return newUsersArray;
    //     })
    //   } 
    //   // else {
    //   //   setUsers((prevUsers) => {
    //   //     return [...prevUsers, {...formValues, _id: new Date().toString()}]
    //   //   })
    //   // }
    //   setFormValues(initialValues)
    //   setIsUserUpdating(false)
      
    // }
    // const onDelete = (_id) => {
    //   axios.delete("http://localhost:3001/users/${user._id}").then((data) => {
    //       console.log("data",data)
    //   })
    //   // setUsers((prevUsers) => {
    //   //   // const newUsersArray = prevUsers.filter((user) => user._id !== _id)
        
    //   //   return newUsersArray
    //   // })
    // }
    // const onEdit = (_id) => {
    //   const selectedUser = users.find((user) => user._id === _id)
    //   setFormValues(selectedUser)
    //   axios.put("http://localhost:3001/users/${user._id}").then((data) => {
    //     console.log(data)
    //   })
    // }
    return (
      <div  className="App">
        <Users/>
        <UsersList/>
      </div>
    );
}

export default App;
