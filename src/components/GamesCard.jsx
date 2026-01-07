import { Link } from "react-router-dom";

export default function GamesCard({ game }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition reveal-up border overflow-hidden">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-40 object-contain bg-gray-100 p-4"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{game.title}</h3>

        <p className="text-sm text-gray-500">Developer: {game.developer}</p>

        <div className="flex justify-between items-center">
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {game.category}
          </span>
          <span className="text-yellow-500 text-sm">⭐ {game.ratings}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">{game.description}</p>

        <Link
          to={`/details/${game.id}`}
          className="inline-block text-sm text-blue-600 font-medium mt-2"
        >
          View Game
        </Link>
      </div>
    </div>
  );
}
