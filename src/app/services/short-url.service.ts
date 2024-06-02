import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = "https://api-ssl.bitly.com/v4/shorten";
  token = "f861d12cbca1c76621e1d94b3c0db4270f64284a";
  constructor(private http: HttpClient) { }

  getShortUrl(nombreUrl: string): Observable<any> {

    const tokenHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    })
    const body = {
      long_url: nombreUrl
    }

    return this.http.post(this.url, body,
      {
        headers: tokenHeaders
      })
  }

}
