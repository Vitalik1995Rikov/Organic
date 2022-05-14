let News = () => {
  return (
    <div>
      <h1>News</h1>
      <div className="flex">
        <p className="text-3xl">Discover The Recent Content About Organic Products</p>
        <button className="bg-[#EFD372] text-[#274C5B] rounded w-64 h-20">More News</button>
      </div>
      <div className="flex">
        <div className="h-96 w-96">
          <img src="../../assets/Green.png" alt="img" />
        </div>
        <div className="h-96 w-96">
          <img src="../../assets/Red.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default News;
