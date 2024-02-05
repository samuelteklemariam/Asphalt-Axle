import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  //Get the product Id using UseParams
  const {productId} = useParams();

  //when e.Id == productId, we will display the product with that Id
  //then we store that product in the product variable and display it on the 
  //product page,

  const product = all_product.find((e)=> e.id === Number(productId))
  if (!product) {
    // Handle the case when the product is not found
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Breadcrum product ={product}/>
      <ProductDisplay product ={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
