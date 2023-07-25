import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeBlockComponent } from './exchange-block/exchange-block.component';

const routes: Routes = [
    
  { path: '**', redirectTo: 'exchange'  },
  { path: 'exchange', component: ExchangeBlockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
