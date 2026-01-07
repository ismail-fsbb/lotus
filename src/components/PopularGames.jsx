import { Link, useLoaderData } from "react-router";
import GamesCard from "../components/GamesCard";

export default function PopularGames() {
  const data = useLoaderData();
  const topRatedGames = Array.isArray(data)
    ? [...data]
        .sort((a, b) => Number(b.ratings) - Number(a.ratings))
        .slice(0, 3)
    : [];

  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Popular Games
        </h1>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {topRatedGames && topRatedGames.length > 0 ? (
            topRatedGames.map((game) => <GamesCard key={game.id} game={game} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No games found.
            </p>
          )}
        </div>

        {/* View All */}
        <div className="mt-6 text-center">
          <Link
            to="/games"
            className="inline-block px-6 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
          >
            View All Games
          </Link>
        </div>
      </div>
    </section>
  );
}
