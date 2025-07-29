import Card from "./Card";
import { useEffect, useState } from "react";
import { supabaseClient } from "../src/client";
import { Link } from "react-router-dom";

const CrewMateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabaseClient.from('Crewmate').select();
      if (!error) setCrewmates(data || []);
    };
    fetchCrewmates();
  }, []);

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg">
      <p className="text-white">Crewmate Gallery</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {crewmates.map((c) => (
          <Link key={c.id} to={`/crewmate/${c.id}`} className="hover:scale-105 transition-transform">
            <Card
              title={c.Name}
              info={`Speed: ${c.Speed} mph | Color: ${c.Color}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrewMateGallery;
