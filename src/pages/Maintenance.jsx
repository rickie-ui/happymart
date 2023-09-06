import maintenance from "../assets/maintenance.png";
const Maintenance = () => {
  return (
    <div className="min-h-screen items-center justify-center space-x-10 bg-[#EEF2F6] pt-20 antialiased md:flex md:flex-col">
      <img src={maintenance} alt="maintenance" className="h-96" />
      <div className="mt-10">
        <p className="text-2xl font-bold uppercase opacity-50">
          We are under maintenance
        </p>
        <p className="font-medium opacity-50">Check on mobile devices </p>
      </div>
    </div>
  );
};

export default Maintenance;
