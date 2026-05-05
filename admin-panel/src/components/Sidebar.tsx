import { assets } from "../assets/assets";
import Navlink from "./NavLink";

const Sidebar = () => {
  return (
    <div className="bg-[#003a10] min-h-screen pl-[4vw]">
      <img className="mt-5 w-24 hidden sm:block" src={assets.logo} alt="logo" />
      <img
        className="mt-5 w-12 mr-5 sm:hidden block"
        src={assets.logo_small}
        alt="logo"
      />
      <div className="flex flex-col gap-5 mt-10">
        <Navlink to="/add-song" icon={assets.add_song} label={"Add Song"} />
        <Navlink to="/list-song" icon={assets.song_icon} label={"List Song"} />
        <Navlink to="/add-album" icon={assets.add_album} label={"Add Album"} />
        <Navlink to="/list-album" icon={assets.album_icon} label={"List Album"} />
      </div>
    </div>
  );
};

export default Sidebar;
