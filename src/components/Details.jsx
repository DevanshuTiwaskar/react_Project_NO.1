// import React from 'react'

import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] flex justify-between items-center gap-5  h-full m-auto p-[10%] ">
      <img
        className=" object-contain w-[40%] "
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[50%] flex flex-col gap-5">
        <h1 className="text-5xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className="text-zinc-400">men's clothing</h3>
        <h2 className="text-red-500">$109.95</h2>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="flex gap-5">
        <Link className="p-2 flex justify-center bg-blue-500 w-[20%] rounded">Edit</Link>
        <Link className="p-2 flex justify-center bg-red-500 w-[20%] rounded ">Delete</Link>

        </div>
      </div>
    </div>
  );
};

export default Details;
