const Sponsors = () => {
  const companyLogo = [
    {
      src: "https://d12tbd6xzgxi73.cloudfront.net/app/uploads/2024/01/Idaho.svg",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2023/03/nvidia-logo.svg",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2023/09/ttd-logo.svg",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2022/09/maisons-logo.svg",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2023/03/hello-fresh-logo.svg",
    },
  ];
  return (
    <div className="max-container flex items-center flex-col justify-center py-[3rem] max-sm:py-[2rem] max-md:pt-[3rem] padding-x">
      <h1 className="font-poppins font-medium text-[1.2rem] max-sm:text-[1rem] z-10 text-center">
        Trusted by the fastest growing companies.
      </h1>
      <div className="grid grid-cols-5 items-center max-md:grid-cols-3 max-sm:gap-4 gap-[4rem] pt-7">
        {companyLogo.map((item, index) => (
          <img src={item.src} alt="logo" className="w-[8rem] object-contain" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
