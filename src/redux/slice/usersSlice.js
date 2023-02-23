import { createSlice } from "@reduxjs/toolkit";




const usersSlice = createSlice ({
    name: "users",
    initialState: {
        firstName: "",
        lastName: "",
        age:"",
        email:"",
        sex:"",
        _id:"",
    },
    reducer: {
       usersSubmit: () => {

       },
    }
    
})

export const { usersSubmit } = usersSlice.actions; 
export const usersReducers = usersSlice.reducer;
