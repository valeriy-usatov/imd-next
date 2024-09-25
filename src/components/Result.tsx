type PageMoviesProps = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: string,
    original_language: string,
    original_title: string,
    overview:string
    popularity: 93.684,
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
    <div>
        {results.map(result=>(
                <div key={result.id}>
                    <h2>{result.title}</h2>
                </div>
            ))}
    </div>
  )
}

export default Result