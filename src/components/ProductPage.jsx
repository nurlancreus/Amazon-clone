import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddItems = (product) => {
    const addingProduct = {
      ...product,
      quantity,
    };

    dispatch(addToCart(addingProduct));
    navigate("/checkout");
  };

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const productResults = await callAPI(`data/products.json`);
        setProduct(productResults[id]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {product && (
        <div className="h-screen bg-amazonClone-background">
          <div className="min-w-[1000px] max-w-[1500px] mx-auto p-4">
            <div className="grid grid-cols-10 gap-2">
              {/* Left */}
              <div className="col-span-3 p-8 rounded bg-white m-auto">
                <img src={product.image} alt="Main product" />
              </div>
              {/* Middle */}
              <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                <div className="mb-3">
                  <ProductDetails product={product} ratings={true} />
                </div>
                <div className="text-base xl:text-lg mt-3">
                  {product.description}
                </div>
              </div>
              {/* Right */}
              <div className="col-span-2 p-4 rounded bg-white">
                <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                  {GB_CURRENCY.format(product.price)}
                </div>
                <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                  RRP:
                  <span className="line-through">
                    {GB_CURRENCY.format(product.oldPrice)}
                  </span>
                </div>
                <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                  FREE Returns
                </div>
                <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                  FREE Delivery
                </div>
                <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                  In Stock
                </div>
                <div className="text-base xl:text-lg mt-1">
                  Quantity:
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="p-2 bg-white border rounded-md focus:border-indigo-600"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <button onClick={() => handleAddItems(product)} className="btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
