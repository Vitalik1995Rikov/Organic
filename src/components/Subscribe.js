let Subscribe = () => {
  return (
    <div className="h-[320px] w-[1380px] flex bg-[url('../../assets/Subscribe.png')] py-[70px] px-[100px] mt-[111px] mx-[30px]">
      <div>
        <p className="text-[50px] text-[#FFFFFF]">Subscribe Our</p>
        <p className="text-[50px] text-[#FFFFFF]">Newsletter</p>
      </div>
      <div className="ml-[350px]">
        <input
          className="h-[82px] w-[350px] rounded-2xl text-2xl"
          placeholder="Enter your email address"
          type="text"
        />
        <button className="bg-[#274C5B] h-[82px] w-[107px] rounded-2xl text-[#FFFFFF]">
          <p>Subscribe</p>
          <div className="w-[38px] h-[34px] mr-[30px] rounded-full bg-[#335B6B] flex justify-center items-center">
            <img src="../../assets/Vector.png" alt="img" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
