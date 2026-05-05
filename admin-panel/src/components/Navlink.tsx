import { NavLink } from "react-router-dom";

const Navlink = ({ to, icon, label }) => {
  return (
    <div>
      <NavLink
        to={to}
        className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-16  drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium"
      >
        <img className="w-5" src={icon} alt={label} />
        <p className="hidden sm:block">{label}</p>
      </NavLink>
    </div>
  );
};

export default Navlink;
