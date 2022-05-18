let Welcome = () => {
  return (
    <div className="bg-[url('../../assets/Welcome.png')] h-[913px] p-7 flex flex-col justify-center">
      <p className="text-[#7EB693] text-2xl font-['yellowtail']">Made With Nature</p>
      <p className="text-[#274C5B] text-7xl">Welcome to the</p>
      <p className="text-[#274C5B] text-7xl">world of nature</p>
      <p className="text-[#274C5B] text-7xl">and organic.</p>
      <button className="bg-[#EFD372] flex justify-center items-center text-[#274C5B] rounded-2xl w-[219px] h-[82px] mt-[30px]">
        Explore New
        <div className="w-[38px] h-[34px] mr-[30px] rounded-full bg-[#EFF6F1]"></div>
      </button>
    </div>
  );
};

export default Welcome;
