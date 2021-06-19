import React, { createContext, useState, useEffect } from "react";
import { productList } from "./components/productList";
export const ProductContext = createContext();

export const MainProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(productList);
    setProducts(productList);
  }, []);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
