import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingResult: any = [];

  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.adventureMovie();
    this.animationMovies();
    this.comedyMovies();
    this.sciencefictionMovies();
    this.thrillerMovies();
  }

  // Banner data
  bannerData() {
    this.service.bannerApiData().subscribe((rs) => {
      this.bannerResult = rs.results;
    });
  }

  // Trending data
  trendingData() {
    this.service.trendingApiData().subscribe((rs) => {
      this.trendingResult = rs.results;
    });
  }
  // // Action
  actionMovies() {
    this.service.fetchActionMovies().subscribe((rs) => {
      this.actionMovieResult = rs.results;
    });
  }

  // Adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((rs) => {
      this.adventureMovieResult = rs.results;
    });
  }

  // // Animation
  animationMovies() {
    this.service.fetchAnimationMovies().subscribe((rs) => {
      this.animationMovieResult = rs.results;
    });
  }

  // // Comedy
  comedyMovies() {
    this.service.fetchComedyMovies().subscribe((rs) => {
      this.comedyMovieResult = rs.results;
    });
  }

  // // Sciencefiction
  sciencefictionMovies() {
    this.service.fetchScienceFictionMovies().subscribe((rs) => {
      this.sciencefictionMovieResult = rs.results;
    });
  }

  // // thriller
  thrillerMovies() {
    this.service.fetchThrillerMovies().subscribe((rs) => {
      this.thrillerMovieResult = rs.results;
    });
  }
}
