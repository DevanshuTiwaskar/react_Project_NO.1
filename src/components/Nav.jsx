// import React from 'react'

import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const { Products } = useContext(ProductContext);

  let distinct_category =
    Products && Products.reduce((acc, cv) => [...acc, cv.category], []);
    
      distinct_category = [...new Set(distinct_category)];
      console.log(distinct_category);


    // (products &&) if products is existed or not if not it show undefind 
    // (Products.reduce((acc,cv)=> [...acc, cv.category],[])
    

    // let distinct_category = Products && [...new Set(Products.map((cv) => cv.category))];



  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
  }

// console.log(color())

  return (
    <nav className=" h-full w-[15%] bg-gray-100  flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border rounded border-zinc-400 hover:bg-zinc-400 transition delay-150 duration-300 ease-in-out  hover:text-white text-zinc-600"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Categoty Filter</h1>
      <div className=" w-[80%]">
        {distinct_category.map((c, i) => (
          
          <Link
            key={i}
            to={`/?catagory=${c}`}
            className="flex items-center  mb-3"
          >
            <span style={{backgroundColor: color()}} className="rounded-full  mr-2 w-[15px] h-[15px] bg-blue-300 "></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
