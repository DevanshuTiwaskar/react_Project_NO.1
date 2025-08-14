import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { Link, useLocation } from "react-router";
import instance from "../utils/Axios";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { search } = useLocation();
  const category = search ? decodeURIComponent(search.split("=")[1]) : null;
  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductsByCategory = async () => {
    try {
      const { data } = await instance.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!category) setFilteredProducts(products);
    else getProductsByCategory();
  }, [category, products]);

  if (!products.length) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-72 w-full">
        <Nav />
      </div>

      {/* Products Grid */}
      <div className="flex-1 p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts?.map((p) => (
          <div
            key={p.id}
            className="group bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-64 bg-gray-100">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-contain p-4"
              />
              <Link
                to={`/details/${p.id}`}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 text-white font-semibold text-lg transition-opacity rounded-t-xl"
              >
                Quick View
              </Link>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                {p.title}
              </h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <polygon points="10 1.5 12.95 7.36 19.51 7.36 14.28 11.64 16.18 17.5 10 13.36 3.82 17.5 5.72 11.64 0.49 7.36 7.05 7.36 10 1.5" />
                  </svg>
                ))}
                <span className="text-gray-500 text-sm ml-1">(120)</span>
              </div>
              <p className="text-red-500 font-bold text-xl mb-2">${p.price}</p>
              <p className="text-gray-500 text-sm line-clamp-3">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
