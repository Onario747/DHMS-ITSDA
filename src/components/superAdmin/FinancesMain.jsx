import CountUp from "react-countup";
import FinanceOverview from "./Finances/FinanceOverview";

const FinancesMain = () => {
  return (
    <section className="w-full pt-4 flex flex-col">
      <div className="flex justify-between items-center pb-8">
        <div className="flex-col gap-0.5">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            Finances
          </h1>
          <p className="font-poppins text-[0.8rem] text-gray-400">
            Overview of total maintenance costs.
          </p>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl leading-none font-bold text-gray-900">
            Total Maintenance Costs
          </h2>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-900">
            &#8358;
            <CountUp end={173000}> 173,000</CountUp>
          </span>
        </div>
      </div>
      <FinanceOverview />
    </section>
  );
};

export default FinancesMain;
