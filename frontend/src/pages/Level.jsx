import { useParams } from "react-router-dom";

const Level = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Level {id}</h1>
      <p className="mt-4">This is a sample level page.</p>
    </div>
  );
};

export default Level;
