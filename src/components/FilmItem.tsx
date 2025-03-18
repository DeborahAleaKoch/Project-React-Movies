import { Movie } from "../contracts/contracts";

interface Props {
	movie: Movie;
}

const FilmItem = ({ movie }: Props) => {
	return (
		<div className='border-1 rounded-2xl w-40 p-2 text-center bg-slate-100 hover:shadow-2xl'>
			<h1 className='pb-4 text-base font-semibold md:text-xl '>
				{movie.title}
			</h1>
			<p className='pb-3 text-slate-600'>{movie.year}</p>
			<p>{movie.director}</p>
			<p>{movie.duration}</p>
			<p className='mb-5'>⭐️ {movie.rate} </p>
			<div className='font-light'>
				{movie.genre.map((item) => {
					return <p key={item}>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default FilmItem;
