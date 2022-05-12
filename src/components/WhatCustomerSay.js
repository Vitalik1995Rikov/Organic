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
        <div className="w-[250px] h-[250px] border-2 rounded-full border-[#7EB693] flex flex-col justify-center items-center">
          <p>100%</p>
          <p>Organic</p>
        </div>
        <div>
          <p>285</p>
          <p>Active Product</p>
        </div>
        <div>
          <p>385+</p>
          <p>Organic Orchads</p>
        </div>
        <div>
          <p>25+</p>
          <p>Years of Farming</p>
        </div>
      </div>
    </div>
  );
};

export default WhatCustomerSay;
