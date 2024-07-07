import { Component } from '@angular/core';
import { CarroService } from '../../services/carro.service';
import { ICarro } from '../../interfaces/carro';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, NgFor, NgIf, RouterOutlet, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaCarros: ICarro[] = [];

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
}
