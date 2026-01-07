import { useLoaderData, useParams } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";

export default function GameDetails() {
  const { id } = useParams();
  const data = useLoaderData();

  const game = data.find((g) => g.id === id);

  if (!game) {
    return <p className="text-center text-gray-500 mt-10">Game not found</p>;
  }

  return (
    <>
      <DynamicTitle />
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6 space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">{game.title}</h1>

            <p className="text-sm text-gray-500">
              Developer: <span className="text-gray-700">{game.developer}</span>
            </p>

            <p className="text-sm text-gray-500">
              Category: <span className="text-gray-700">{game.category}</span>
            </p>

            <p className="text-sm text-gray-500">
              Ratings:{" "}
              <span className="text-yellow-500 font-semibold">
                ⭐ {game.ratings}
              </span>
            </p>

            <p className="text-gray-600 pt-2">{game.description}</p>

            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download Game
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
