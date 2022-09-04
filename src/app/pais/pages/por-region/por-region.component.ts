import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { GamesList } from '../../interfaces/gamesList.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['_GamesL_2022', '_GamesL_2023', '_Calendar'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  getClaseCSS( region: string ):string {
    return (region === this.regionActiva) ? 'btn btn-primary me-3' : 'btn btn-outline-primary me-3';
  }

  activarRegion( region: string ){

    if ( region === this.regionActiva ) { return; }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
        .subscribe( paises => this.paises = paises );
  }

}
