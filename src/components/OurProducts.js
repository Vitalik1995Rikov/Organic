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
    <ul className="grid grid-cols-3 grid-rows-2 mr-5">
      {array.map((item) => (
        <li>
          <button>{item.head}</button>
          <img src={item.img} alt="img" />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default OurProducts;
