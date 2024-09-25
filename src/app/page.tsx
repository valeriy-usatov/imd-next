import Result from '@/components/Result';
const API_KEY = process.env.API_KEY;

type SearchParamsProps = {
  genre?: string;
};

export default async function Home({ searchParams }: { searchParams: SearchParamsProps }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=ru-RU&page=1`,
    { next: { revalidate: 10000 } },
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  type PageMoviesProps = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: 93.684;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  const results: PageMoviesProps[] = data.results;
  console.log(results);

  return (
    <div>
      <Result results={results} />
    </div>
  );
}
