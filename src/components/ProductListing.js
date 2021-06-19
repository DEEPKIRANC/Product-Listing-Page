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
  useEffect(() => {
    if (sortPrice === "") {
      setProductList(products);
    } else if (sortPrice === "highToLow") {
      const sortedProducts = productList.sort((a, b) => a.price - b.price);
      setProductList(sortedProducts);
    } else if (sortPrice === "lowToHigh") {
      const sortedProducts = productList.sort((a, b) => b.price - a.price);
      setProductList(sortedProducts);
    }
  }, [sortPrice]);
  return (
    <div className="productList-container">
      <div className="top-section">
        <h4>Sort By</h4>
        <input
          type="radio"
          value="lowToHigh"
          checked={sortPrice === "lowToHigh"}
          onClick={(e) => setSortPrice(e.target.value)}
        />
        Price -- Low to High
        <input
          type="radio"
          value="highToLow"
          checked={sortPrice === "highToLow"}
          onClick={(e) => setSortPrice(e.target.value)}
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
