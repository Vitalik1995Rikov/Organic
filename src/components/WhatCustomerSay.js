let data = [
  { number: '100%', name: 'Organic' },
  { number: '285', name: 'Active Product' },
  { number: '385+', name: 'Organic Orchads' },
  { number: '25+', name: 'Years of Farming' },
];

let WhatCustomerSay = () => {
  return (
    <div className="bg-[url('../../assets/WhatCus.png')] flex flex-col items-center h-[1248px]">
      <p className="mt-[130px] text-4xl">Testimonial</p>
      <p className="text-6xl">What our customer saying?</p>
      <img className="mt-[60px]" src="../../assets/Face.png" alt="img" />
      <img className="mt-[20px]" src="../../assets/stars.png" alt="img" />
      <p className="mt-[34px]">
        The quality of organic produce is extremely high, the service is second to none and the
        taste of the food
      </p>
      <p>takes me back to my childhood when we were growing our own.</p>
      <p className="mt-[23px]">Sara Taylor</p>
      <p>Consumer</p>
      <hr className="" />
      <div className="flex">
        {data.map((item) => (
          <div className="w-[250px] h-[250px] mr-[30px] border-2 rounded-full border-[#7EB693] flex flex-col justify-center items-center">
            <p>{item.number}</p>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCustomerSay;
