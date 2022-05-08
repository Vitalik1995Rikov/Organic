let ThreeCards = () => {
  return (
    <div className="flex justify-center my-36 ">
      <div className="w-96 h-96 mx-8 bg-[url('../../assets/First.png')] flex justify-center items-center rounded">
        <button className="h-24 w-80 bg-[#FFFFFF] rounded-2xl">Fruit Juice</button>
      </div>
      <div className="w-96 mx-8 bg-[url('../../assets/Second.png')] flex justify-center items-center rounded">
        <button className="h-24 w-80 bg-[#FFFFFF] rounded-2xl">Organic Food</button>
      </div>
      <div className="w-96 mx-8 bg-[url('../../assets/Third.png')] flex justify-center items-center rounded">
        <button className="h-24 w-80 bg-[#FFFFFF] rounded-2xl">Nuts Cookies</button>
      </div>
    </div>
  );
};

export default ThreeCards;
