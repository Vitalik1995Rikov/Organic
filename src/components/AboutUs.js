let AboutUs = () => {
  return (
    <div className="flex justify-center bg-[#F9F8F8]">
      <div>
        <img src="../../assets/About Us.png" alt="img" />
      </div>
      <div className="ml-[30px]">
        <p className="text-[#7EB693] text-2xl">About Us</p>
        <p className="text-[#274C5B] text-5xl">We Believe In Organic</p>
        <p className="text-[#274C5B] text-5xl">Foods For Strong Health</p>
        <p className="mt-[22px] mb-[56px]">
          Welcome to the world of natural and organic. Here you can discover the bounty of nature.
          We have grown on the principles of health, and care. We aim to give our customers a
          healthy chemical-free meal for perfect nutrition.
        </p>
        <div>
          <div className="flex">
            <div className="h-[100px] w-[100px]">
              <img src="../../assets/AboutOne.png" alt="img" />
            </div>
            <h1 className="text-xl">Organic Foods Only</h1>
          </div>
          <div className="flex">
            <div className="h-[100px] w-[100px]">
              <img src="../../assets/AboutTwo.png" alt="img" />
            </div>
            <h1 className="text-xl">Quality Standarts</h1>
          </div>
          <button className="bg-[#274C5B]">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
