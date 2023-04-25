import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  detailsResult: any;
  video: any;
  casts: any;

  ngOnInit(): void {
    let getParamsId = this.router.snapshot.paramMap.get('id');
    this.getMovieDetails(getParamsId);
    this.getVideo(getParamsId);
    this.getMovieCast(getParamsId);
  }

  getMovieDetails(id: any) {
    this.service.movieDetails(id).subscribe((rs) => {
      this.detailsResult = rs;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((rs) => {
      rs.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.video = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((rs) => {
      this.casts = rs.cast;
    });
  }
}
