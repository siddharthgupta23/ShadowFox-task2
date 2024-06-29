import React from 'react';
import { useContext } from"react";
import {ShopContext} from "../context/ShopContext";
import { useParams } from 'react-router-dom';
import Producthd from "../components/Poducthd";
import ProductDisplay from '../components/ProductDisplay'
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
  const {all_products}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_products.find((e)=>e.id ===Number(productId));
  if(!product)
  {
    return <div>Product not found </div>
  }
  return (
    <section className='max_padd_container py-28'>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <div>
        
       <Producthd product={product}/>
       <ProductDisplay product={product}/>
       <ProductDescription />
       <RelatedProducts />
        </div>
    </section>
  )
}

export default Product
