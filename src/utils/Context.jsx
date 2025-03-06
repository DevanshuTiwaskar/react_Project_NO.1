
import axios from "./Axios";
import { createContext, useEffect,  } from "react";

import { useState } from "react";

export const ProductContext = createContext();

const Context = ({children}) => {
  const [Products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

//   const getProducts = async () => {
//     try {
//       const { data } = await axios("/products");
//       setproducts(data)
      
//     } catch (error) {
//       console.log(error);
//     }
//   };
//  console.log()


//   useEffect(() => {
//     getProducts();
//   }, []);

  return (
    <ProductContext.Provider value={{ Products, setproducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
