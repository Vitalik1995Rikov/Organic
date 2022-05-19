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
          <div className="px-[60px] pt-[39px] pb-[50px] absolute h-[337px] w-[610px] rounded-[30px] ml-[30px] mt-[250px] z-10 bg-[#FFFFFF] shadow-lg">
            <p>Kristina Castle</p>
            <p>Everything You Need to Know About Organic</p>
            <p>Organic farming is the only way that you still can experience the real world.</p>
            <p>View More</p>
          </div>
        </div>
        <div className="h-[515px] w-[670px] bg-[url('../../assets/Red.png')] ml-[30px]">
          <div className="px-[6px] pt-[3px] pb-[50px] absolute h-[337px] w-[610px] rounded-[30px] ml-[30px] mt-[250px] z-10 bg-[#FFFFFF] shadow-lg">
            <p>Alex Louis</p>
            <p>Organic Fruits: Surprising Benefits and Facts</p>
            <p>The world of nature has grown on the principles of health, ecology, and care.</p>
            <p>View More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
