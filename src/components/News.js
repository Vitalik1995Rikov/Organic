let News = () => {
  return (
    <div>
      <h1>News</h1>
      <div className="flex">
        <p>Discover The Recent Content About Organic Products</p>
        <button>More News</button>
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
