const Card = ({title, info}) => {
  return (
    <div className="bg-[#5B5858] p-4 rounded-lg">
      <p className="text-white">{title}</p>
      <p className="text-gray-400">{info}</p>
    </div>
  );
};

export default Card;
