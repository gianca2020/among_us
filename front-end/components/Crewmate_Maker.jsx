import CrewmateCard from "./CrewmateCard";
import { supabaseClient } from "../src/client";
import { useState } from "react";

const CrewmateMaker = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const createPost = async (event) => {
    event.preventDefault();
    const { data, error } = await supabaseClient
      .from('Crewmate')
      .insert({ Name: name, Speed: speed, Color: color })
      .select();
    if (error) {
      console.error('Supabase insert error:', error);
      alert('Error creating crewmate: ' + error.message);
    } else {
      console.log('Inserted crewmate:', data);
      alert('Crewmate created!');
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col text-center text-white items-center">
      <div className="flex flex-row items-center justify-center h-full m-4 bg-[#5B5858] p-4 rounded-lg gap-4 bg-[#121212]">
        <CrewmateCard
          name={name}
          setName={setName}
          speed={speed}
          setSpeed={setSpeed}
          color={color}
          setColor={setColor}
        />
      </div>
      <button onClick={createPost} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-48 text-center text-2xl">Create Crewmate</button>
    </div>
  );
};

export default CrewmateMaker;
