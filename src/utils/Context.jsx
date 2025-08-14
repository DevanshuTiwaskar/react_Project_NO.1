import { createContext, useState, useEffect } from "react";
import instance from "./Axios";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const getProduct = async () => {
    try {
      const { data } = await instance.get("/products");
      console.log(data) 
      setProducts(data);
    } catch (error) {
      console.log("get product error----->", error.message);
    }
  };

  // Fetch on mount if no local data
  useEffect(() => {
    if (!products.length) {
      getProduct();
    }
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
