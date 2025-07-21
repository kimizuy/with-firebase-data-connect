import { listMovies, ListMoviesData } from "@firebasegen/default-connector";

export async function Movies() {
  const { data } = await listMovies();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>
      {data.movies.length === 0 ? (
        <p className="text-gray-500">
          No movies found. Add some movies to see them here!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.movies.map((movie) => (
            <div key={movie.id} className="border rounded-lg p-4 shadow-md">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              {movie.genre && (
                <p className="text-gray-600 mt-2">Genre: {movie.genre}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
