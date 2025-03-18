import { createContext, useState } from "react";
import { movieList } from "../movieData";
import { Movie } from "../contracts/contracts";

export interface MovieContext {
	movies: Movie[];
	setMovies: (values: Movie[]) => void;
}

export const mainContext = createContext<MovieContext | undefined>(undefined);

export function MainProvider({ children }: { children: React.ReactNode }) {
	//hier useState
	const [movies, setMovies] = useState<Movie[]>(movieList);
	//wenn fetch, dann kann der auch hier stattfinden

	return (
		<mainContext.Provider value={{ movies, setMovies }}>
			{children}
		</mainContext.Provider>
	);
}
