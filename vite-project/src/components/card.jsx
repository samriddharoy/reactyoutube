import React from 'react';

function Card({ image, title, price, stock }) {
  return (
    <div>
      <div className="flex font-sans">
        <div className="flex-none w-48 relative">
          <img
            src={image || "/default-image.jpg"}  // Fallback to default image
            alt={title || "Product Image"}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {title || "Classic Utility Jacket"}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              ${price || "110.00"}
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {stock || "In stock"}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
              Buy now
            </button>
            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
              Add to bag
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Card;
