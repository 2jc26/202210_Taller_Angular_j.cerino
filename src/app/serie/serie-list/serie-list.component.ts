import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie>=[];
  constructor() { }

  ngOnInit() {
  }

}
