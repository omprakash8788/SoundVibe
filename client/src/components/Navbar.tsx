import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate("/")}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-800"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-800"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-sm px-4 py-1.5 rounded-2xl md:block cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-200">
            Explore premium
          </p>
          <p className="bg-black py-1.5 px-3 rounded-2xl text-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-200 hover:text-black">
            Install App
          </p>
          <p className="bg-purple-600 text-black w-7 h-7 rounded-full flex items-center justify-center">
            O
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black text-sm px-4 py-1.5 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-200">
          All
        </p>
        <p className="bg-black text-white text-sm px-3 py-1.5 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-800">
          Music
        </p>
        <p className="bg-black text-white text-sm px-3 py-1.5 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-800">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
