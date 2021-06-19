import React, { useContext, useState, useEffect } from "react";
import "../styles/productlist.css";
import { ProductContext } from "../MainProvider";
import { Product } from "./Product";
export const ProductListing = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [productList, setProductList] = useState([]);
  const [sortPrice, setSortPrice] = useState("");
  useEffect(() => {
    setProductList(products);
  }, [products]);

  const sortLowToHigh = (e) => {
    const resArr = productList.sort((a, b) => a.price - b.price);
    setProductList(resArr);
    setSortPrice(e.target.value);
  };
  const sortHighToLow = (e) => {
    const resArr = productList.sort((a, b) => b.price - a.price);
    setProductList(resArr);
    setSortPrice(e.target.value);
  };
  return (
    <div className="productList-container">
      <div className="top-section">
        <h4>Sort By</h4>
        <input
          type="radio"
          value="lowToHigh"
          checked={sortPrice === "lowToHigh"}
          onChange={(e) => sortLowToHigh(e)}
        />
        Price -- Low to High
        <input
          type="radio"
          value="highToLow"
          checked={sortPrice === "highToLow"}
          onChange={sortHighToLow}
        />
        Price -- High to Low
      </div>
      <div className="products-section">
        {productList.length > 0 ? (
          productList.map((product, index) => {
            return <Product key={index} product={product} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
