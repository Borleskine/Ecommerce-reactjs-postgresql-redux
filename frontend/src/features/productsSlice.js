import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch", // nombre de la acción
    async () => {
            const response = await axios.get("http://localhost:5000/products"); // realiza una solicitud HTTP a la ruta "/products"
            return response?.data; // devuelve los datos obtenidos de la solicitud
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) =>{
            //immer
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) =>{
            //immer
            state.status = "success";
            state.items = action.payLoad;
        },
        [productsFetch.rejected]: (state, action) =>{
            //immer
            state.status = "rejected";
            state.error = action.payLoad;
        },
    },
});

export default productsSlice.reducer;