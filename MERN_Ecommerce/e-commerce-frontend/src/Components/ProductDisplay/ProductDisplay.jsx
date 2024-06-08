import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  // Function to compare products
const compareProducts = async (productId) => {
  try {
    // Make an HTTP request to the backend endpoint to trigger Python execution
    const response = await axios.post("http://localhost:4000/compare", { productId });
    console.log(response.data);
    // Handle the response if needed
  } catch (error) {
    console.error('Error comparing products:', error);
    // Handle errors if needed
  }
};
const handleClick = async() => {
  const response = await fetch("http://127.0.0.1:5000/swap", {
      method: 'POST'
    })

    const data = await response.json();
    if(data){
      console.log(data);
    }else{
      console.log("error");
    }
}
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">&#x20B9;{product.old_price}</div>
          <div className="productdisplay-right-price-new">&#x20B9;{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
          <button onClick={handleClick}>Compare</button>
          <button>Buy</button></div>
        
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
