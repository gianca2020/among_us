import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabaseClient } from "../src/client";

const colorOptions = ["Red", "Blue", "Green", "Yellow", "Purple"];

const CrewmateEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabaseClient
        .from('Crewmate')
        .select()
        .eq('id', id)
        .single();
      if (data) {
        setName(data.Name || "");
        setSpeed(data.Speed || "");
        setColor(data.Color || "");
      }
      setLoading(false);
    };
    fetchCrewmate();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabaseClient
      .from('Crewmate')
      .update({ Name: name, Speed: speed, Color: color })
      .eq('id', id);
    if (error) {
      alert('Error updating crewmate: ' + error.message);
    } else {
      alert('Crewmate updated!');
      navigate(`/crewmate/${id}`);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <form onSubmit={handleUpdate} className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="bg-[#1E1E1E] p-6 rounded-lg w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2">Edit Crewmate</h2>
        <label className="flex flex-col gap-1">
          Name:
          <input value={name} onChange={e => setName(e.target.value)} className="p-2 rounded bg-[#2E2E2E] text-white" required />
        </label>
        <label className="flex flex-col gap-1">
          Speed (mph):
          <input value={speed} onChange={e => setSpeed(e.target.value)} className="p-2 rounded bg-[#2E2E2E] text-white" required />
        </label>
        <label className="flex flex-col gap-1">
          Color:
          <div className="flex gap-2 flex-wrap">
            {colorOptions.map(opt => (
              <label key={opt} className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="color" value={opt} checked={color === opt} onChange={() => setColor(opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </label>
        <button type="submit" className="mt-4 bg-[#3A3A3A] text-white p-2 rounded hover:bg-[#2E2E2E] w-full text-center text-xl">Save Changes</button>
        <button type="button" onClick={() => navigate(`/crewmate/${id}`)} className="mt-2 bg-[#3A3A3A] text-white p-2 rounded hover:bg-[#2E2E2E] w-full text-center text-md">Cancel</button>
      </div>
    </form>
  );
};

export default CrewmateEdit;
