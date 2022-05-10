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
    <div className="flex justify-center w-[1380] my-[140px] mx-[30px] space-x-[50px]">
      {data.map((item) => (
        <div
          className={
            `
              bg-[url('../../assets/` +
            item.img +
            `.png')] h-[378px] w-[665px] px-[55px] text-[#FFFFFF] text-3xl flex flex-col justify-center
            `
          }>
          <p>{item.name}</p>
          <p>{item.content}</p>
          <p>{item.lastContent}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
