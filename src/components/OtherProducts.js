let OtherProducts = () => {
  return (
    <div className="bg-[#274C5B]">
      <div className="flex">
        <div>
          <p>Other Products</p>
          <p>We Offer Organic For You</p>
        </div>
        <div>
          <button>View All Products</button>
        </div>
      </div>
      <div className="flex">
        <div>
          <button>Vegetable</button>
          <img src="../../assets/Tomato.png" alt="img" />
          <p>Vegan Red Tomato</p>
        </div>
        <div>
          <button>Fruits</button>
          <img src="../../assets/Almonds.png" alt="img" />
          <p>Organic Almonds</p>
        </div>
        <div>
          <button>Vegetable</button>
          <img src="../../assets/Corn.png" alt="img" />
          <p>Fresh Corn</p>
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
