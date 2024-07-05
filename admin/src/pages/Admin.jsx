import React from 'react';
import Sidebar from "../components/Sidebar";
import { Routes, Route } from 'react-router-dom';
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/listProduct"; // Ensure the component name is correctly capitalized

const Admin = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} /> {/* Ensure this line is correct */}
      </Routes>
    </div>
  );
};

export default Admin;
