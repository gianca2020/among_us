import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
    <div className="w-64">
      <ul className="flex flex-col items-center p-4 bg-[#5B5858] h-screen text-white text-2xl space-y-4 ">
        {/* probably turn this into a link */}
        <Link to="/" className="hover:underline cursor-pointer">Home</Link>
        <Link to="/create" className="hover:underline cursor-pointer">Create a crewmate</Link>
        <Link to="/gallery" className="hover:underline cursor-pointer">Crewmate Gallery</Link>
      </ul>
    </div>
  );
};

export default SideBar;