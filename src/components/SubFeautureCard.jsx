const SubFeautureCard = () => {
  const cards = [
    {
      icon: "https://img.icons8.com/3d-fluency/94/user-male-circle.png",
      heading: "User Access Controls",
      text: "Define user roles and permissions to ensure secure and appropriate access to device management features.",
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/chart.png",
      heading: "Compliance and Audit Reporting",
      text: "Generate compliance reports to ensure your device management practices meet industry standards and regulations.",
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/multiple-devices.png",
      heading: "Cross-Platform Support",
      text: "Manage a diverse range of devices across different platforms and operating systems seamlessly.",
    },
  ];

  return (
    <div className="max-container padding-x">
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[1.8rem]">
        {cards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start border border-blue-400 px-4 py-6 rounded-xl"
          >
            <img
              src={item.icon}
              width="50"
              height="50"
              className="pb-2"
              alt="icon"
            />
            <h1 className="font-poppins font-medium text-[1.1rem]">
              {item.heading}
            </h1>
            <p className="font-poppins text-[0.8rem]">{item.text}</p>
            <a href="/" className="font-poppins text-blue-70 pt-3">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubFeautureCard;
