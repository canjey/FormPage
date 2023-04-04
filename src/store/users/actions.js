import { createAsyncThunk } from '@reduxjs/toolkit'
import { redirect } from "react-router-dom";
import axiosInstance from "../../axios.js";
import {updateFormData} from "./slice.js"




export const postUsers = createAsyncThunk(
    'users/postUsers',
    async (_, thunkApi) => {
        axiosInstance()
        .post("users")
        .then(function (response) {
          console.log(response);
          console.log("hi");
          thunkApi.dispatch(
            updateFormData(response.data)
            )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
);
