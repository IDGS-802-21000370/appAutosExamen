import { Component } from '@angular/core';
import { ICarro } from '../../interfaces/carro';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, NgFor, NgIf, RouterOutlet, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  listaCarros: ICarro[] = [];
  filtro: string = '';
  filtroAno: string = '';

  constructor(private _carroService: CarroService) {
    this.obtenerCarros();
  }

  obtenerCarros() {
    this._carroService.getList().subscribe({
      next: (data) => {
        this.listaCarros = data;
      },
      error: (e) => { console.log(e); }
    });
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  }

  listaFiltrada() {
    return this.listaCarros.filter(carro => {
      const filtroTexto = carro.nombre.toLowerCase().includes(this.filtro.toLowerCase()) || carro.modelo?.toLowerCase().includes(this.filtro.toLowerCase());
      const filtroAno = !this.filtroAno || carro.modelo?.includes(this.filtroAno);
      return filtroTexto && filtroAno;
    });
  }
}
