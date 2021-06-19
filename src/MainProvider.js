import React, { createContext, useState, useEffect } from "react";
import productList from "./productList";
export const ProductContext = createContext();

export const MainProvider = (props) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(productList);
  }, []);
  return (
    <ProductContext.Provider value={[productList, setProductList]}>
      {props.children}
    </ProductContext.Provider>
  );
};
