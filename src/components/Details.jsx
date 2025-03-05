// import React from 'react'

import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct]= useState(null)

 const {id} = useParams()
 console.log(id)


  const getSingleProduct = async ( ) => {
    try {
      const {data} = await axios.get(`/products/${id}`)
      setproduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getSingleProduct()
  })

  return product ? (
    <div className="w-[70%] flex justify-between items-center gap-5  h-full m-auto p-[10%] ">
      <img
        className=" object-contain w-[40%] "
        src= {`${product.image}`}
        alt=""
      />
      <div className="content w-[50%] flex flex-col gap-5">
        <h1 className="text-5xl">{product.title}</h1>
        <h3 className="text-zinc-400">{product.catagory}</h3>
        <h2 className="text-red-500">${product.price}</h2>
        <p>
          {product.description}
        </p>
        <div className="flex gap-5">
        <Link className="p-2 flex justify-center bg-blue-500 w-[20%] rounded">Edit</Link>
        <Link className="p-2 flex justify-center bg-red-500 w-[20%] rounded ">Delete</Link>

        </div>
      </div>
    </div>

  ):(

    <Loading/>
  );
};

export default Details;
