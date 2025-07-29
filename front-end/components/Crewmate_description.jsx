import { supabaseClient } from "../src/client";

const CrewmateDescription = ({ crewmate }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-2">{crewmate.Name}</h2>
      <p className="mb-2">Speed: {crewmate.Speed} mph</p>
      <p>Color: {crewmate.Color}</p>
    </div>
  );
};

export default CrewmateDescription;
