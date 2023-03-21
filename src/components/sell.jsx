import React from 'react';
import {
  AiFillEdit,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from 'react-icons/ai';
import './sell.css';
import wheat from '../static/wheat.jpg';

const sell = () => {
  return (
    <div>
      <div className="container">
        <div className="left-container">
          {/* User's Stall Name */}
          <div className="farmer-name">
            <AiFillEdit size={20} />
            <div className="name">{'Prakash Stall'}</div>
          </div>
          <br />
          <br />

          {/* Items */}
          <div className="items">
            <img src={wheat} alt="item-no" />
            {/* add item img here */}
            <div className="item-content">
              <h2>Wheat</h2>
              <h4>₹ 150</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Excepturi deleniti deserunt eaque laudantium
                provident itaque nemo sint numquam cum perspiciatis in
                voluptatum, quos cumque voluptatibus cupiditate, porro
                ratione! Natus, odit!
              </p>
            </div>
            <div>
              <AiFillMinusSquare color="red" />
            </div>
          </div>
          <div className="items">
            <img src={wheat} alt="item-no" />
            {/* add item img here */}
            <div className="item-content">
              <h2>Wheat</h2>
              <h4>₹ 150</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Excepturi deleniti deserunt eaque laudantium
                provident itaque nemo sint numquam cum perspiciatis in
                voluptatum, quos cumque voluptatibus cupiditate, porro
                ratione! Natus, odit!
              </p>
            </div>
            <div>
              <AiFillMinusSquare color="red" />
            </div>
          </div>

          {/* add icon */}
          <div style={{ textAlign: `center` }}>
            <AiFillPlusSquare color="green" />
          </div>
        </div>

        {/* User Details */}
        <div className="right-container">
          <h3>Your Details</h3>
          <img src={wheat} alt="user" />
          <div className="farmer-name user-detail">
            <AiFillEdit size={20} />
            <div className="name">{'Gayhoo'}</div>
          </div>
          <div className="farmer-name user-detail">
            <AiFillEdit size={20} />
            <div className="name">{'Phone no.'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sell;
