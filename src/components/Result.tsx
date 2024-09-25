import Card from "./Card";

type PageMoviesProps = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: string,
    original_language: string,
    original_title: string,
    overview:string
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average:number,
    vote_count: number 
  };

  type ResultProps = {
    results: PageMoviesProps[]; 
  }; 

const Result = ({results}:ResultProps) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
        {results.map(result=>(
                <Card key={result.id} result={result}/>
            ))}
    </div>
  )
}

export default Result