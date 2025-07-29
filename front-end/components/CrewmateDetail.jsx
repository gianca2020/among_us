import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabaseClient } from "../src/client";
import CrewmateDescription from "./Crewmate_description";

const CrewmateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabaseClient
        .from('Crewmate')
        .select()
        .eq('id', id)
        .single();
      setCrewmate(data);
      setLoading(false);
    };
    fetchCrewmate();
  }, [id]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (!crewmate) return <div className="text-white">Crewmate not found.</div>;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <CrewmateDescription crewmate={crewmate} />
      <button
        className="mt-6 bg-[#1F1F1F] text-white px-4 py-2 rounded hover:bg-[#2E2E2E]"
        onClick={() => navigate(`/crewmate/${id}/edit`)}
      >
        Edit Information
      </button>
    </div>
  );
};

export default CrewmateDetail;
