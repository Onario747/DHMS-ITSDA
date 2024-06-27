import CreateTechnicianModal from "./Technicaian/CreateTechnicianModal";
import TechnicianOverview from "./Technicaian/TechnicianOverview";

const TechnicianMain = () => {
  return (
    <section className="w-full pt-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex-col gap-0.5">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            Technicians
          </h1>
          <p className="font-poppins text-[0.8rem] text-gray-400">
            You have no Technicians yet
          </p>
        </div>
        <CreateTechnicianModal />
      </div>
      <TechnicianOverview />
    </section>
  );
};

export default TechnicianMain;
