import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularxws';
  public movie = new Movie();
  omovies!: Observable<Movie[]>;
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.omovies = this.movieService.getMovieList();
    this.omovies.subscribe(
      data => { this.movies = Array.from(Object.keys(data), (k : any) => data[k]); }
    );
  }

}
