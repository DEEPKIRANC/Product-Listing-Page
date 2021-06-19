import React, { createContext, useState, useEffect } from "react";
import { productList } from "./components/productList";
export const ProductContext = createContext();

export const MainProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  const [brandList, setBrandList] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    console.log(productList);
    setProducts(productList);
    const brandLists = [];
    productList.map((product) => {
      if (!brandLists.includes(product.brand)) {
        brandLists.push(product.brand);
      }
    });
    setBrandList(brandLists);
  }, []);
  return (
    <ProductContext.Provider
      value={[
        products,
        setProducts,
        size,
        setSize,
        brand,
        setBrand,
        brandList,
        setBrandList,
        category,
        setCategory
      ]}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
