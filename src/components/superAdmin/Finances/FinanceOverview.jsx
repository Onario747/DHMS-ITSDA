const FinanceOverview = () => {
  const cardStyles =
    "relative flex flex-col gap-2 rounded-xl px-[1.5rem] py-4 font-semibold overflow-hidden shadow rounded-lg";
  const overlayStyles =
    "absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-30";
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-2 gap-4 items-start pt-4">
      <div className={cardStyles} style={{ background: "background: white" }}>
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">This Month</p>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem] text-[2rem]">
          &#8358;50,000
        </span>
      </div>
      <div className={cardStyles} style={{ background: "background: white" }}>
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">Last Month</p>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem] text-[1.9rem]">
          &#8358;70,000
        </span>
      </div>
      <div className={cardStyles} style={{ background: "background: white" }}>
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">Last 3 Months</p>
        </div>
        <span className="relative font-poppins text-[1.9rem]">
          &#8358;53,000
        </span>
      </div>
      <div className={cardStyles} style={{ background: "background: white" }}>
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">Last Year</p>
        </div>
        <span className="relative font-poppins text-[1.9rem]">&#8358;53,000</span>
      </div>
    </div>
  );
};

export default FinanceOverview;
