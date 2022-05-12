let data = [
  { number: '100%', name: 'Organic' },
  { number: '285', name: 'Active Product' },
  { number: '385+', name: 'Organic Orchads' },
  { number: '25+', name: 'Years of Farming' },
];

let WhatCustomerSay = () => {
  return (
    <div className="bg-[url('../../assets/WhatCus.png')] flex flex-col items-center h-[1248px]">
      <p>Testimonial</p>
      <p>What customer saying</p>
      <img src="../../assets/Face.png" alt="img" />
      <p>
        The quality of organic produce is extremely high, the service is second to none and the
        taste of the food
      </p>
      <p>takes me back to my childhood when we were growing our own.</p>
      <p>Sara Taylor</p>
      <p>Consumer</p>
      <hr />
      <div className="flex">
        {data.map((item) => (
          <div className="w-[250px] h-[250px] border-2 rounded-full border-[#7EB693] flex flex-col justify-center items-center">
            <p>{item.number}</p>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCustomerSay;
