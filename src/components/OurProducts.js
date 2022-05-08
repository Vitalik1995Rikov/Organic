let array = [
  { head: 'Vegetable', img: '../../assets/Broccoli.png', name: 'Calabrese Broccoli' },
  { head: 'Vegetable', img: '../../assets/Corn.png', name: 'Fresh Corn' },
  { head: 'Mill', img: '../../assets/Pistachio.png', name: 'Dried Pistachio' },
  { head: 'Vegetable', img: '../../assets/Tomato.png', name: 'Vegan Red Tomato' },
  { head: 'Fruit', img: '../../assets/Almonds.png', name: 'Organic Almonds' },
  { head: 'Mill', img: '../../assets/Hazelnut.png', name: 'Brown Hazelnut' },
];

let OurProducts = () => {
  return (
    <ul className="grid grid-cols-3 grid-rows-2">
      {array.map((item) => (
        <li className="bg-[#F9F8F8] rounded-md mr-5 mb-5">
          <button className="bg-[#274C5B] ml-8 mt-8 rounded py-1 px-5 text-[#FFFFFF]">
            {item.head}
          </button>
          <img src={item.img} alt="img" />
          <p className="text-[#274C5B]">{item.name}</p>
          <hr />
          <div className="flex">
            <p>$ 25.00 USD</p>
            <p>$ 21.00 USD</p>
            <img src="../../assets/stars.png" alt="img" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OurProducts;
