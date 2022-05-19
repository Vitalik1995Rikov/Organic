let News = () => {
  return (
    <div className="mx-[35px]">
      <h1>News</h1>
      <div className="flex">
        <p className="text-3xl">Discover The Recent Content About Organic Products</p>
        <button className="bg-[#EFD372] text-[#274C5B] rounded w-64 h-20">More News</button>
      </div>
      <div className="flex">
        <div className="h-[515px] w-[670px] bg-[url('../../assets/Green.png')]">
          <div className="px-[60px] pt-[39px] pb-[50px] absolute h-[337px] w-[610px] rounded-[30px] ml-[30px] mt-[40px] z-10 bg-[#FFFFFF]">
            <p className="text-[#7EB693] text-3xl">Eco Friendly</p>
            <p className="text-5xl">From our Farm</p>
            <p className="text-5xl">to your Home.</p>
            <p className="text-[#525C60]">
              If you are not comfortable going to the nearby market place we also will deliver your
              product to your doorstep.
            </p>
          </div>
        </div>
        <div className="h-[515px] w-[670px] bg-[url('../../assets/Red.png')] ml-[30px]">
          <div className="px-[6px] pt-[3px] pb-[50px] absolute h-[337px] w-[610px] rounded-[30px] ml-[30px] mt-[40px] z-10 bg-[#FFFFFF]">
            <p className="text-[#7EB693] text-3xl">Eco Friendly</p>
            <p className="text-5xl">From our Farm</p>
            <p className="text-5xl">to your Home.</p>
            <p className="text-[#525C60]">
              If you are not comfortable going to the nearby market place we also will deliver your
              product to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
