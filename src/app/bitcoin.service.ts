import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CotaBitcoin } from './cota-bitcoin';

@Injectable()
export class BitcoinService {


  cotaBitcoin: Array<CotaBitcoin> = [];


  constructor(private http: HttpClient) { }


  getCotaBitcoin(){
    this.http.get<CotaBitcoin>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json").subscribe(data => {
      this.cotaBitcoin.push(data);
    });
  }


  start() {
    this.getCotaBitcoin();
    setInterval(() => {
       this.getCotaBitcoin();
      },60000);
    }


  }



