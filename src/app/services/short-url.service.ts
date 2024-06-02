import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = "https://api-ssl.bitly.com/v4/shorten";
  toke = "f861d12cbca1c76621e1d94b3c0db4270f64284a";
  constructor(private http: HttpClient) { }
}
