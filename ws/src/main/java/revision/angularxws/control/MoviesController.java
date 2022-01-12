package revision.angularxws.control;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import revision.angularxws.entities.Movie;

@RestController
class MoviesController {

	static private List<Movie> MOVIES = new ArrayList<Movie>();
	static {
		Stream.of("Harry Potter and the Philosopher’s Stone", "The God Father", "Home Alone", 
				"The Lord of the Rings", "ET – The Extra Terrestrial", "Terminator 2 – Judgment Day", 
				"The Lion King", "Star Wars Episode IV – A new Hope", "Avatar", "Titanic"
			).forEach(name -> {
				Movie movie = new Movie();
				movie.setName(name);
				MOVIES.add(movie);
			});

	}
	@GetMapping("/")
	public Object[] topTemMovies() {
		return MOVIES.toArray();
	}

}
