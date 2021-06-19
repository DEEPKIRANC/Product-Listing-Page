import React, { useContext, useEffect } from "react";
import "../styles/sidebar.css";
import { productList } from "./productList";
import { ProductContext } from "../MainProvider";

export const Sidebar = () => {
  const [
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
  ] = useContext(ProductContext);
  useEffect(() => {
    if (size !== "") {
      const filteredProducts = products.filter((product) =>
        product.sizes.includes(size)
      );
      setProducts(filteredProducts);
    } else {
      setProducts(productList);
    }
  }, [size]);
  useEffect(() => {
    if (brand !== "") {
      const filteredProducts = products.filter(
        (product) => product.brand === brand
      );
      setProducts(filteredProducts);
    } else {
      setProducts(productList);
    }
  }, [brand]);

  useEffect(() => {
    if (category !== "") {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    } else {
      setProducts(productList);
    }
  }, [category]);
  function clearFilters() {
    setSize("");
    setBrand("");
    setCategory("");
  }
  return (
    <div className="sidebar-container">
      <h3>Filters</h3>
      <div className="filter-section">
        <select
          id="size"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="" disabled="" selected="">
            Select Size
          </option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <select
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" selected>
            Select Brand
          </option>
          {brandList.length > 0 &&
            brandList.map((brand) => <option value={brand}>{brand}</option>)}
        </select>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" selected>
            Ideal for
          </option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
        <button
          style={{
            background: "white",
            border: "none",
            outline: "none",
            padding: "0.5rem",
            maxWidth: "100px",
            alignSelf: "center",
            cursor: "pointer"
          }}
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};
