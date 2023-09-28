import { createContext, useReducer } from "react";
import { productReducers } from "../reducers/productReducers";
// import { type } from "@testing-library/user-event/dist/type";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducers, {
    top: [],
    filteredProduct: [],
  });

  const addProduct = (id, adet = 0, img, title, price) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: id,
        adet: adet,
        img: img,
        title: title,
        price: price,
      },
    });
  };
  const getProduct = () => {
    dispatch({ type: "GET_PRODUCT" });
  };
  const filterProduct = (kindFilter, urunler) => {
    dispatch({
      type: "FILTER_PRODUCT",
      payload: {
        kindFilter: kindFilter,
        urunler: urunler,
      },
    });
  };
  return <ProductContext.Provider value={{ ...state, addProduct, getProduct, filterProduct }}>{children}</ProductContext.Provider>;
}
