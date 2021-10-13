import * as actionTypes from '../constants/cartConstants'
import axios from 'axios';


const url = 'http://localhost:8000'

export const addToCart = (id) => async (dispatch) => {
    try{
        const { data } = await axios.get(`${url}/product/:${id}`);

        dispatch( { type : actionTypes.ADD_TO_CART , payload : data })
    }catch(error){
        console.log('error while calling add to cart')
    }
}