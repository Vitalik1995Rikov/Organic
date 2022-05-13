let OtherProducts = () => {
  return (
    <div className="flex flex-col items-center bg-[#274C5B] h-[1060px]">
      <div className="flex">
        <div>
          <p>Other Products</p>
          <p className="text-3xl">We Offer Organic For You</p>
        </div>
        <button className="bg-[#EFD372] text-[#274C5B] rounded w-64 h-20">View All Products</button>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-[#F9F8F8] rounded-md mr-5 mb-5">
          <button className="bg-[#274C5B] ml-8 mt-8 rounded py-1 px-5 text-[#FFFFFF]">
            Vegetable
          </button>
          <img src="../../assets/Tomato.png" alt="img" />
          <p className="text-[#274C5B]">Vegan Red Tomato</p>
          <div className="flex">
            <p>$ 25.00 USD</p>
            <p>$ 21.00 USD</p>
            <img src="../../assets/stars.png" alt="img" />
          </div>
        </div>
        <div className="bg-[#F9F8F8] rounded-md mr-5 mb-5">
          <button className="bg-[#274C5B] ml-8 mt-8 rounded py-1 px-5 text-[#FFFFFF]">
            Fruits
          </button>
          <img src="../../assets/Almonds.png" alt="img" />
          <p className="text-[#274C5B]">Organic Almonds</p>
          <div className="flex">
            <p>$ 25.00 USD</p>
            <p>$ 21.00 USD</p>
            <img src="../../assets/stars.png" alt="img" />
          </div>
        </div>
        <div className="bg-[#F9F8F8] rounded-md mr-5 mb-5">
          <button className="bg-[#274C5B] ml-8 mt-8 rounded py-1 px-5 text-[#FFFFFF]">
            Vegetable
          </button>
          <img src="../../assets/Corn.png" alt="img" />
          <p className="text-[#274C5B]">Fresh Corn</p>
          <div className="flex">
            <p>$ 25.00 USD</p>
            <p>$ 21.00 USD</p>
            <img src="../../assets/stars.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
