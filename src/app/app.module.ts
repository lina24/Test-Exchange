import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExchangeBlockModule } from './exchange-block/exchange-block.module';
import { ExchangeBlockComponent } from './exchange-block/exchange-block.component';
import { DataPollingComponent } from './data-polling/data-polling.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeBlockComponent,
    DataPollingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ExchangeBlockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
