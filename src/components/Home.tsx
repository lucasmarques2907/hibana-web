import MainCard from "./MainCard";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-no-repeat p-4 flex-1"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,104,143,0.6)), url('/bg.png')",
      }}
    >
      <div className="w-full max-w-4xl text-white">
        <MainCard />
      </div>
    </div>
  );
};



export default Home;
