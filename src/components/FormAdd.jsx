import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlices.jsx";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

const FormAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ title: "", price: "", date: "", delivered: false, imageUrl: "" });
  const [cartOpen, setCartOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    products.forEach((product) => dispatch(addProduct(product)));
    setProducts([]);
    navigate("/products");
  };

  const handleChange = (field, value) => {
    setCurrentProduct({ ...currentProduct, [field]: value });
  };

  const addToCart = () => {
    setProducts([...products, { ...currentProduct, id: Date.now() + Math.random() }]);
    setCurrentProduct({ title: "", price: "", date: "", delivered: false, imageUrl: "" });
  };

  const removeFromCart = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
      >
        <ShoppingCart size={24} />
      </button>
      {cartOpen && (
        <div className="absolute top-12 right-4 w-80 bg-white shadow-xl rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-bold mb-2 text-gray-800">Cart</h3>
          {products.length === 0 ? (
            <p className="text-gray-500">No products added</p>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {products.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg shadow-sm bg-gray-100">
                  <div className="flex items-center space-x-3">
                    {product.imageUrl && <img src={product.imageUrl} alt={product.title} className="w-12 h-12 rounded-lg object-cover" />}
                    <div>
                      <p className="font-semibold text-gray-800">{product.title}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add New Products</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 p-4 border rounded-lg bg-gray-50">
          <input
            type="text"
            placeholder="Product Title"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentProduct.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentProduct.price}
            onChange={(e) => handleChange("price", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentProduct.imageUrl}
            onChange={(e) => handleChange("imageUrl", e.target.value)}
          />
          <input
            type="date"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentProduct.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              checked={currentProduct.delivered}
              onChange={(e) => handleChange("delivered", e.target.checked)}
            />
            <span className="text-gray-700">Delivered</span>
          </label>
        </div>
        <button type="button" onClick={addToCart} className="w-full mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
          Add to Cart
        </button>
        <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Submit All Products
        </button>
      </form>
    </div>
  );
};

export default FormAdd;



