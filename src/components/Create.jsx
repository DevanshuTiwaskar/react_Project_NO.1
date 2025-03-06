// import React from 'react'

import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
const Create = () => {
  
  const navigate =  useNavigate()
  const{Products, setproducts} = useContext(ProductContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    
    if(title.trim().length < 5 || category.trim().length < 5 || description.trim().length < 5 || price.trim().length < 1  || image.trim().length < 5){
      alert('each and ever input must have atleast 4 characters')
      return 
    }


    const product = {
      id:nanoid(),
      title,
      image,
      description,
      price,
     };
    setproducts([...Products,product])
    localStorage.setItem("products", JSON.stringify([...Products,product]))
     navigate('/')
  };


  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center "
    >
      <h1 className="text-3xl w-1/2 mb-3">Add New Products</h1>
      <input
        type="url"
        placeholder="Image Url"
        className="mb-3 text-3xl bg-zinc-100 rounded p-3  w-1/2"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="mb-3 text-3xl bg-zinc-100 rounded p-3  w-1/2"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2  flex gap-5 ">
        <input
          type="text"
          placeholder="category"
          className=" text-2xl bg-zinc-100 rounded p-3  w-[48%] mb-5"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="mb-5 text-2xl bg-zinc-100 rounded p-3  w-[48%] "
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        placeholder="enter product description "
        onChange={(e) => setdescription(e.target.value)}
        className="mb-3 text-3xl bg-zinc-100 rounded p-3  w-1/2"
        rows="10"
        value={description}
      ></textarea>
      <button className=" py-3 px-5 border rounded border-zinc-400 hover:bg-zinc-400 transition delay-150 duration-300 ease-in-out  hover:text-white text-zinc-600">
        Add New Product
      </button>
    </form>
  );
};

export default Create;
