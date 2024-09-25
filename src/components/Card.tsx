import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

type PageMoviesProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
};

type CardProps = {
  result: PageMoviesProps;
};

const Card = ({ result }: CardProps) => {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`}
          alt="photo"
          width={300}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 mx-auto"
        />
        <div className='p-2'>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
        </div>
        <p className='flex items-center'>
        {result.release_date}
        <FiThumbsUp className='h-5 mr-1 ml-3'/>
        {result.vote_count}
        </p>
      </Link>
    </div>
  );
};

export default Card;
