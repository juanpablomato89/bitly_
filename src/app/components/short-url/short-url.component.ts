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

  constructor(private _shortUrlService: ShortUrlService) { }

  ngOnInit(): void {
  }

  procesarUrl() {

    this._shortUrlService.getShortUrl(this.nombreUrl).subscribe(data => {
      this.shortUrl = data.link;
      this.urlProcesada = true;
    }, error => {
      console.error(error);
    })
  }

}
