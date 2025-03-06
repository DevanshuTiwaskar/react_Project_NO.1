import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";

const App = () => {
  return (
    <div className="h-screen w-screen  flex">
      
      <Link  to='/' className="text-black px-3 py-2 bg-zinc-300 hover:bg-zinc-400 text-2xl  absolute left-[17%] top-[3%]">Home</Link>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/create" element={<Create/>}  />
        <Route path="/details/:id" element={<Details/>}  />
      </Routes>




     </div> //----main
  
  );
};

export default App;
