let data = [
  {
    id: 1,
    img: 'One',
    name: 'Natural!!',
    content: 'Get Garden',
    lastContent: 'Fresh Fruits',
  },
  {
    id: 2,
    img: 'Two',
    name: 'Otter!!',
    content: 'Get 10% off',
    lastContent: 'on Vegetables',
  },
];

let Cards = () => {
  return (
    <div className="flex justify-center w-[1380] my-[140px]">
      {data.map((item) => (
        <div
          className={
            `
              bg-[url('../../assets/` +
            item.img +
            `.png')] h-[378px] w-[665px] mr-[50px] text-[#FFFFFF] flex flex-col justify-center
            `
          }>
          <p>{item.name}</p>
          <p>{item.content}</p>
          <p>{item.lastContent}</p>
        </div>
      ))}
      {/* <div className="bg-[url('../../assets/One.png')] h-[378px] w-[665px] mr-[50px] text-[#FFFFFF] flex flex-col justify-center">
        <p>Natural!!</p>
        <p>Get Garden</p>
        <p>Fresh Fruits</p>
      </div>
      <div className="bg-[url('../../assets/Two.png')] h-[378px] w-[665px] text-[#274C5B]">
        <p>Other!!</p>
        <p>Get 10% off</p>
        <p>on Vegetables</p>
      </div> */}
    </div>
  );
};

export default Cards;
