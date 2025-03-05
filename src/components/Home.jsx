import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const { Products } = useContext(ProductContext); // Correct Destructuring

  console.log(Products);
  
  return Products ? (
    <>
      <Nav />
      <div className="w-[85%] h-full p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        
      {Products.map((p,i) => (
      <Link key={i} to={`/details/${p.id}`} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center">
        <div
          className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${p.image})`,
          }}
        ></div>
        <h1 className="hover:text-blue-300">{p.title}</h1>
      </Link>
      ))}

        
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
