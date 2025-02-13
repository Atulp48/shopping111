
import axios from "axios";
import * as actionTypes from "../constants/productConstants.js"
import URL from "../../service/url"
console.log(URL);


export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`); // we use object destructuring to take data obj from response object;
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data })


    } catch (err) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: err.message })
    }
}







export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: err.message })
    }
}