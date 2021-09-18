import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, BitcoinComponent],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService]
})
export class AppModule { }
