import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieServiceService } from '../serie-service.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieServiceService) { }
  series: Array<Serie>=[];
  promedioTemporadas: number = 0;

  getSeries(): void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      series.forEach(serie =>{
        this.promedioTemporadas += serie.seasons;
      })
      this.promedioTemporadas /= series.length;
    });
  }

  ngOnInit() {
    this.getSeries;
  }

}
