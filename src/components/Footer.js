let data = [
  { id: 1, img: '../../assets/Facebook.png' },
  { id: 2, img: '../../assets/Twitter.png' },
  { id: 3, img: '../../assets/Instagram.png' },
  { id: 4, img: '../../assets/Pinterest.png' },
];

let Footer = () => {
  return (
    <div className="flex h-[630px] py-[120px] px-[30px]">
      <div className="w-[270px] h-[369px] flex flex-col items-end mr-[19px]">
        <h1 className="font-['roboto'] text-3xl font-bold">Contact Us</h1>
        <p className="mt-[34px]">Email</p>
        <p className="mt-[5px]">needhelp@organick.com</p>
        <p className="mt-[38px]">Phone</p>
        <p className="mt-[5px]">123 (1254) 1452</p>
        <p className="mt-[38px]">Address</p>
        <p className="mt-[5px]">88 Road, Brooklyn Street, USA</p>
      </div>
      <img src="../../assets/Rectangle.png" alt="img" />
      <div className="w-[670px] h-[369px] flex flex-col items-center">
        <img src="../../assets/org.png" alt="img" />
        <p className="mt-[58px]">We are a popular and farming company aspiring to be a leader</p>
        <p>in the Organic food industry.</p>
        <div className="flex mt-[60px]">
          {data.map((item) => (
            <div className="w-[60px] h-[60px] mr-[30px] rounded-full bg-[#EFF6F1] flex flex-col justify-center items-center">
              <img src={item.img} alt="img" />
            </div>
          ))}
        </div>
      </div>
      <img src="../../assets/Rectangle.png" alt="img" />
      <div className="w-[335px] h-[369px] pl-[19px]">
        <h1 className="text-3xl font-['roboto']">Utility Pages</h1>
        <p className="mt-[20px]">Style Guide</p>
        <p className="mt-[24px]">Protected</p>
        <p className="mt-[24px]">Page Not Found</p>
        <p className="mt-[24px]">Changelog</p>
        <p className="mt-[24px]">Licenses</p>
      </div>
    </div>
  );
};

export default Footer;
