import Image from 'next/image';

type MovieParamsProps = {
    params: {
      id: string; 
    };
  };


const MoviePage = async ({params}:MovieParamsProps ) => {
    const movieId = params.id;
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=ru-RU`);
    const movie = await res.json()
    console.log(movie);

  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}
          alt="photo"
          width={300}
          height={300}
          className='rounded-lg mx-auto'
          
        />
        <div className='p-2 mt-4'>
          <h2 className='text-lg mb-3 font-bold '>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
        </div>
    </div>
  )
}

export default MoviePage