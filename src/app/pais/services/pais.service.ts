import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlSheets: string = 'https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  getpaisPorAlpha( id: string ): Observable<Country[]> {

    const url = `${ this.apiUrlSheets }/tabs/_GamesL_2022/id/${ id }`;

    return this.http.get<Country[]>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrlSheets }/tabs/${ region }`;

    return this.http.get<Country[]>( url );
  }


}
