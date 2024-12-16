import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const { state, dispatch } = useContext(MyContext);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    const handleRemoveFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-10">Cart</h2>
            <div className="flex flex-col items-center">
                {state.cart && state.cart.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {state.cart.map((product) => (
                            <div
                                key={product.id}
                                className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="items-center">
                                    <img
                                        className="object-contain w-full rounded-t-lg h-48"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-4">
                                    <h3 className="text-xl font-bold mb-2">
                                        {product.title}
                                    </h3>
                                    <p className="mb-3 line-clamp-3 text-gray-600">
                                        {product.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-semibold text-gray-800">
                                            ${product.price}
                                        </p>
                                        <button
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white font-medium rounded-full shadow hover:bg-red-700 transition-colors duration-300"
                                            onClick={() =>
                                                handleRemoveFromCart(product.id)
                                            }
                                        >
                                            <FaTrash />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 className="text-gray-500 text-center">
                        Your cart is empty
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Cart;
