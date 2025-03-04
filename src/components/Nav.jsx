// import React from 'react'

const Nav = () => {
  return (
    <nav className=" h-full w-[15%] bg-gray-100  flex flex-col items-center pt-5">
        <a
          className="py-3 px-5 border rounded border-blue-100 text-blue-300"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">Catagoty Filter</h1>
        <ul className=" w-[80%]">
          <li className="flex items-center  mb-3">
            <span className="rounded-full  mr-2 w-[15px] h-[15px] bg-blue-300 "></span>
            cat{" "}
          </li>
          <li className="flex items-center  mb-3">
            <span className="rounded-full  mr-2 w-[15px] h-[15px] bg-green-300 "></span>
            cat{" "}
          </li>
          <li className="flex items-center  mb-3">
            <span className="rounded-full  mr-2 w-[15px] h-[15px] bg-yellow-300 "></span>
            cat{" "}
          </li>
          <li className="flex items-center  mb-3">
            <span className="rounded-full  mr-2 w-[15px] h-[15px] bg-orange-300 "></span>
            cat{" "}
          </li>
        </ul>
      
      </nav> 
  )
}

export default Nav