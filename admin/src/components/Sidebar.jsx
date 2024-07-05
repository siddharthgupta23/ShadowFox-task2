import React from 'react';
import { Link } from "react-router-dom"; // Correct the import
import addProduct from "../assets/addproduct.png";
import listProduct from '../assets/productlist.png';

const Sidebar = () => {
  return (
    <div className="py-7 flex justify-center gap-x-2 gap-y-5 bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
      <Link to={'/addproduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-40 xs:w-44 medium-14 sm:medium-16'>
          <img src={addProduct} alt="Add Product" height={61} width={61} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={'/listproduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-40 medium-16 sm:medium-16'>
          <img src={listProduct} alt="List Product" height={61} width={61} />
          <span>List Product</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
