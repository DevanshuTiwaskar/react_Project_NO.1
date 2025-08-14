import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

const Create = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);
  const [form, setForm] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, image, category, price, description } = form;
    if ([title, image, category, price, description].some((f) => f.trim().length < 1)) {
      return alert("All fields are required!");
    }

    const newProduct = { id: nanoid(), ...form };
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto  p-4 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-3xl flex flex-col gap-5 transition-transform transform hover:scale-[1.01]"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Add New Product
        </h1>

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          rows="6"
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        ></textarea>

        <button className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Create;
