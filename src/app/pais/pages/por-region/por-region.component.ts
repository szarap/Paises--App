import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  constructor( private paisService: PaisService) { }

    regiones    : string [] = ['EU', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAI', 'NAFTA', 'EFTA', 'SAARC'];
    regionActiva: string = '';
    paises : Country[] = []
    


  activarRegion (region:  string ){

    if ( region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paisService.getRegion(region).subscribe(paises =>{
      this.paises = paises;
    })

  }

  getClassesCss (region: string): string{
    return (region === this.regionActiva) 
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }



}
