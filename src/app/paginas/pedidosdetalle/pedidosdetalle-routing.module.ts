import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosdetallePage } from './pedidosdetalle.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosdetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosdetallePageRoutingModule {}
