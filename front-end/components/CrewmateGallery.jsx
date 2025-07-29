import Card from "./Card";
const CrewMate = () => {
  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg">
      <p className="text-white">Crewmate Gallery</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Crewmate 1" info="Some info about Crewmate 1" />
        <Card title="Crewmate 2" info="Some info about Crewmate 2" />
        <Card title="Crewmate 3" info="Some info about Crewmate 3" />
      </div>
    </div>
  );
};

export default CrewMate;
