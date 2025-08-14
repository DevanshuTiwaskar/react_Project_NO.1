import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import { Link, Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
       <h1 className="text-1xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 drop-shadow-sm">
   E-Commerce
</h1>

        <div className="flex gap-2 sm:gap-4">
          <Link
            to="/"
            className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition text-sm sm:text-base"
          >
            Add Product
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
