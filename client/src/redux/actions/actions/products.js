import axios from "axios";
import {GET_PRODUCTS, GET_PRODUCTS_BY_NAME, GET_PRODUCTS_BY_ID, GET_PRODUCTS_BY_ORDER} from "../constantes";

export function getProducts(params){
  return async function (dispatch){
    try {
      let products = await axios.get("http://localhost:3001/products", {params});
      return dispatch({
        type: GET_PRODUCTS,
        payload: products.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductsByName(name){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let productsByName = await axios.get(`http://localhost:3001/products?name=${name}`, {});
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: productsByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductsById(id){
  return async function (dispatch){
    try {
      let productsById = await axios.get(`http://localhost:3001/products/${id}`, {});
      return dispatch({
        type: GET_PRODUCTS_BY_ID,
        payload: productsById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductsByOrder(order){
return async function (dispatch){
  try {
    let productsByOrder = await axios.get(`http://localhost:3001/products?order=${order}`, {});
    return dispatch({
      type: GET_PRODUCTS_BY_ORDER,
      payload: productsByOrder.data
    })
  } catch (error) {
   console.log(error) ;
  }
}
};

export function productUpdated(newData) {
  return async function (dispatch) {
    let productUpdated = await axios.put("http://localhost:3001/products", newData);
    return productUpdated
  };
};

export function postProduct(payload) {
  return async function (dispatch) {
    var response = await axios.post('http://localhost:3001/products', payload)
    return response;
  }
}