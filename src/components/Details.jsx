// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "../utils/Axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const { Products, setproducts } = useContext(ProductContext);

  const [product, setproduct] = useState(null);

  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const products = JSON.parse(localStorage.getItem("products")) || []; // Ensure it's an array
      const productss = products.find((i) => String(i.id) === String(id)); // Compare correctly
      setproduct(productss);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="w-[70%] flex justify-between items-center gap-5  h-full m-auto p-[10%] ">
      <img
        className=" object-contain w-[40%] "
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%] flex flex-col gap-5">
        <h1 className="text-5xl">{product.title}</h1>
        <h3 className="text-zinc-400">{product.catagory}</h3>
        <h2 className="text-red-500">${product.price}</h2>
        <p>{product.description}</p>
        <div className="flex gap-5">
          <Link className="p-2 flex justify-center bg-blue-500 w-[20%] rounded">
            Edit
          </Link>
          <Link className="p-2 flex justify-center bg-red-500 w-[20%] rounded ">
            Delete
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
