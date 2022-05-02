import React from 'react';

let Header = function () {
  return (
    <div className="flex py-10 px-8 justify-center">
      <button>
        <img src="../../assets/org.png" alt="img" />
      </button>
      <div>
        <button>Home</button>
        <button>About Us</button>
        <button>Shop</button>
        <button>Pages</button>
        <button>Contact Us</button>
      </div>
      <button className="rounded-full bg-[#D4D4D4]">
        <img src="../../assets/basket.png" alt="img" />
        Basket
      </button>
    </div>
  );
};

export default Header;
