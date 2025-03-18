import { useContext, useState } from "react";
import { mainContext, MovieContext } from "../../context/MainProvider";
import { Movie } from "../../contracts/contracts";
import FilmItem from "../../components/FilmItem";
import { Button } from "../../Button";

export const Home = () => {
	const { movies, setMovies } = useContext(mainContext) as MovieContext;

	const [search, setSearch] = useState("");

	const handleMovieAscending = () => {
		setMovies([...movies].sort((a, b) => Number(b.year) - Number(a.year)));
	};
	const handleMovieDescending = () => {
		setMovies([...movies].sort((a, b) => Number(a.year) - Number(b.year)));
	};

	const handleRate = () => {
		setMovies([...movies].sort((a, b) => Number(b.rate) - Number(a.rate)));
	};

	const handleSortAtoZ = () => {
		setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
	};

	const handleSortZtoA = () => {
		setMovies([...movies].sort((a, b) => b.title.localeCompare(a.title)));
	};

	const filteredMovies = movies.filter((movie) => {
		return (
			movie.title.toLowerCase().includes(search.toLowerCase()) ||
			movie.genre.join().toLowerCase().includes(search.toLowerCase()) || //join(), verbindet Arrays zu einem string
			movie.director.toLowerCase().includes(search.toLowerCase()) ||
			movie.duration.toLowerCase().includes(search.toLowerCase()) ||
			movie.rate.toLowerCase().includes(search.toLowerCase()) ||
			movie.year.toLowerCase().includes(search.toLowerCase())
		);
	});

	return (
		<>
			<section className='bg-slate-300 text-center py-4 '>
				<input
					type='text'
					className='border-1 rounded-2xl px-3 py-1 bg-slate-100'
					placeholder='search'
					onChange={(event) => {
						setSearch(event.target.value);
					}}
					value={search}
				/>

				<p className='py-3'></p>
				<Button buttonName='Best Rate' onClick={handleRate} />
				<Button
					buttonName='sort by Date ascending'
					onClick={handleMovieAscending}
				/>
				<Button
					buttonName='sort by Date descending'
					onClick={handleMovieDescending}
				/>
				<Button buttonName='A - Z' onClick={handleSortAtoZ} />
				<Button buttonName='Z - A' onClick={handleSortZtoA} />
			</section>
			<div className='flex flex-wrap gap-2 justify-center bg-slate-300 pb-6'>
				{filteredMovies.map((movie: Movie) => {
					return <FilmItem movie={movie} key={movie.title + movie.year} />;
				})}
			</div>
		</>
	);
};
