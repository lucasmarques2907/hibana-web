import MainCard from "./MainCard";
import TwitterCard from "./TwitterCard";
import LinksCard from "./LinksCard";

const Home = () => {
  return (
    <div
  className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6),rgba(0, 104, 143, 0.6)), url('/bg.png')",
  }}
>
  <div className="w-full flex flex-col lg:flex-row gap-4 px-4 sm:px-8 lg:px-12 xl:px-24 2xl:px-32 text-white">
    {/* TwitterCard lateral esquerda no desktop */}
    <div className="lg:w-1/4 order-3 text-center">
      <TwitterCard />
    </div>

    {/* Card central */}
    <div className="lg:w-2/4 order-1 lg:order-2 text-center">
      <MainCard />
    </div>

    {/* LinksCard lateral direita no desktop */}
    <div className="lg:w-1/4 order-2 lg:order-1 text-center">
      <LinksCard />
    </div>
  </div>
</div>
  );
};

export default Home;
