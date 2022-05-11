import React from 'react';

let Header = function () {
  return (
    <div className="flex my-10 px-8 justify-between h-[72px]">
      <button>
        <img src="../../assets/org.png" alt="img" />
      </button>
      <div className="flex">
        <button className="mr-10">Home</button>
        <button className="mr-10">About Us</button>
        <button className="mr-10">Shop</button>
        <button className="mr-10">Pages</button>
        <button className="mr-10">Contact Us</button>
      </div>
      <button className="rounded-full border-2 border-[#D4D4D4] flex items-center h-[70px] w-[159px]">
        <img className="ml-[11px]" src="../../assets/basket.png" alt="img" />
        <p className="ml-[10px] text-lg">Cart 0</p>
      </button>
    </div>
  );
};

export default Header;
