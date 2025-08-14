import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router";

const Nav = () => {
  const { products } = useContext(ProductContext);
  const categories = products ? [...new Set(products.map((p) => p.category))] : [];
  const [isOpen, setIsOpen] = useState(false);

  const randomColor = () => {
    const r = Math.floor(Math.random() * 200 + 50);
    const g = Math.floor(Math.random() * 200 + 50);
    const b = Math.floor(Math.random() * 200 + 50);
    return `rgba(${r},${g},${b},0.2)`;
  };

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden flex justify-between items-center bg-white shadow-md p-4">
       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 font-bold text-xl"
        >
          ☰
        </button>
      </div>

      {/* Sidebar / Categories */}
      <nav
        className={`
          bg-white shadow-md rounded-xl p-6 flex flex-col
          md:h-[90vh] md:w-72 w-full
          sticky top-5
          ${isOpen ? "block" : "hidden"} md:block
        `}
      >
        {/* Desktop Add Product */}
        <div className="hidden md:block mb-6 text-center">
       
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-col gap-3 md:max-h-[70vh] overflow-y-auto">
          {categories.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <span
                style={{ backgroundColor: randomColor() }}
                className="w-4 h-4 rounded-full"
              ></span>
              <span className="capitalize text-gray-700 font-medium">{c}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
