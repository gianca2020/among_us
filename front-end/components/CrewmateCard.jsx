import Card from "./Card";

const CrewmateCard = ({ name, setName, speed, setSpeed, color, setColor }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 justify-center items-start mb-6">
        <Card
          title="Name"
          info={
            <input
              type="text"
              className="bg-gray-900 text-white p-2 rounded w-full"
              placeholder="Enter crewmate name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          }
        />
        <Card
          title="Speed (mph)"
          info={
            <input
              type="text"
              className="bg-gray-900 text-white p-2 rounded w-full"
              placeholder="Enter speed in mph"
              value={speed}
              onChange={e => setSpeed(e.target.value)}
            />
          }
        />
        <Card
          title="Color:"
          info={
            <div className="flex flex-col gap-2 text-white">
              {['Red', 'Blue', 'Green', 'Yellow', 'Purple'].map(opt => (
                <label key={opt} className="flex items-center cursor-pointer gap-2">
                  <input
                    type="radio"
                    name="crewmate-color"
                    value={opt}
                    checked={color === opt}
                    onChange={() => setColor(opt)}
                    className="accent-blue-500"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CrewmateCard;
