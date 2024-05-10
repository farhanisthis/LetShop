import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  });

  return (
    <div>
      <div className="">
        <h1 className='text-center font-bold text-[3rem] text-[#1f83f7]'>Products</h1>
      </div>
      <div className="products flex flex-wrap justify-center">
        {products.map(product => (
          <div key={product.id} className='h-[300px] w-[300px] mx-3 my-4 border-2 border-slate-900 rounded-lg'>
            <img src={product.image} alt={product.title} className="h-[150px] w-[150px] mx-auto my-6 cursor-pointer " />
            <div className="text-center">{product.title}</div>
            <div className="text-center font-bold">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
