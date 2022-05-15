let Footer = () => {
  return (
    <div className="flex h-[630px]">
      <div>
        <h1>Contact Us</h1>
        <p className="mt-[34px]">Email</p>
        <p className="mt-[5px]">needhelp@organick.com</p>
        <p className="mt-[38px]">Phone</p>
        <p className="mt-[5px]">123 (1254) 1452</p>
        <p className="mt-[38px]">Address</p>
        <p className="mt-[5px]">88 Road, Brooklyn Street, USA</p>
      </div>
      <div>
        <img src="../../assets/org.png" alt="img" />
        <p>
          We are a popular and farming company aspiring to be a leader in the Organic food industry.
        </p>
        <div className="w-[60px] h-[60px] mr-[30px] rounded-full bg-[#EFF6F1] flex flex-col justify-center items-center">
          <img src="../../assets/Facebook.png" alt="img" />
        </div>

        <img src="../../assets/Twitter.png" alt="img" />
        <img src="../../assets/Instagram.png" alt="img" />
        <img src="../../assets/Pinterest.png" alt="img" />
      </div>
      <div>
        <h1>Utility Pages</h1>
        <p className="w-[25px] h-[25px] mr-[30px] border-2 rounded-full border-[#7EB693]">
          Style Guide
        </p>
        <p>Protected</p>
        <p>Page Not Found</p>
        <p>Changelog</p>
        <p>Licenses</p>
      </div>
    </div>
  );
};

export default Footer;
