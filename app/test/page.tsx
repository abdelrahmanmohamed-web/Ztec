"use client";
import { useState } from "react";
export default function AddToCart() {
  const [use, setUse] = useState(0);
  return (
    <button
      onClick={() => setUse((e) => e + 1)}
      className={`w-full font-medium py-4 rounded-xl shadow-lg mt-50 transition-all flex gap-4 justify-center hover:bg-stone-800 active:scale-95 bg-stone-900"`}
    >
      <span>{use}</span>
      <p>Add to Cart</p>
    </button>
  );
}
// id=> 07b50698-13fb-4d49-9c55-22f122722d0a
