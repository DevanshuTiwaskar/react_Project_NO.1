import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { useParams, Link } from "react-router";

const Details = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products?.length) setProduct(products.find((p) => String(p.id) === String(id)));
  }, [id, products]);

  if (!product) return <Loading />;

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 p-6 lg:p-10 bg-gray-50 min-h-screen">
      <img
        className="w-full lg:w-1/2 h-96 object-contain bg-white shadow-md rounded-lg p-4"
        src={product.image}
        alt={product.title}
      />
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold">{product.title}</h1>
        <span className="text-gray-500 capitalize">{product.category}</span>
        <span className="text-red-500 font-bold text-2xl">${product.price}</span>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center">
            Edit
          </Link>
          <Link className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-center">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
