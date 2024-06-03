import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl = '';
  shortUrl = '';
  urlProcesada = false;
  loading = false;
  mostrarError = false;
  mensajeError = '';

  constructor(private _shortUrlService: ShortUrlService) { }

  ngOnInit(): void {
  }

  procesarUrl() {

    if (this.nombreUrl === '') {
      this.mensajeError = 'Ingrese la Url a Procesar';
      this.mostrarError = true;
      setTimeout(() => {
        this.mostrarError = false;
        this.nombreUrl = '';
      }, 4000);
      return
    }


    this.urlProcesada = false;
    this.loading = true;

    setTimeout(() => {
      this.obtenerUrlShort();
    }, 2000);
  }

  obtenerUrlShort() {
    this._shortUrlService.getShortUrl(this.nombreUrl).subscribe(data => {
      this.shortUrl = data.link;
      this.urlProcesada = true;
      this.loading = false;
    }, error => {
      console.error(error);

      this.mostrarError = true;
      this.mensajeError = error.error.description;
      this.loading = false;
      setTimeout(() => {
        this.mostrarError = false;
        this.nombreUrl = '';
      }, 4000);
    })
  }

}
