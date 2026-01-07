import { useLoaderData } from "react-router";
import GamesCard from "../components/GamesCard";
import DynamicTitle from "../components/DynamicTitle";

export default function Games() {
  const data = useLoaderData();

  return (
    <>
      <DynamicTitle />
      <section className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
            All Games
          </h1>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data && data.length > 0 ? (
              data.map((game) => <GamesCard key={game.id} game={game} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No games found.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
