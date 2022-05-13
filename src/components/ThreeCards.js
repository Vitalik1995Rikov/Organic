let ThreeCards = () => {
  return (
    <div className="flex justify-center my-36 pt-[140px] bg-[#EFF6F1] h-[860px]">
      <div className="w-[460px] h-[580px] mx-8 bg-[url('../../assets/First.png')] flex justify-center items-center rounded">
        <button className="h-24 w-80 bg-[#FFFFFF] rounded-2xl">Fruit Juice</button>
      </div>
      <div className="w-[460px] h-[580px] mx-8 bg-[url('../../assets/Second.png')] flex justify-center items-center rounded">
        <button className="h-24 w-80 bg-[#FFFFFF] rounded-2xl">Organic Food</button>
      </div>
      <div className="w-[460px] h-[580px] mx-8 bg-[url('../../assets/Third.png')] flex justify-center items-center rounded">
        <button className="h-24 w-80 bg-[#FFFFFF] rounded-2xl">Nuts Cookies</button>
      </div>
    </div>
  );
};

export default ThreeCards;
