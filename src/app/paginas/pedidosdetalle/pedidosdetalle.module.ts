import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosdetallePageRoutingModule } from './pedidosdetalle-routing.module';

import { PedidosdetallePage } from './pedidosdetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosdetallePageRoutingModule
  ],
  declarations: [PedidosdetallePage]
})
export class PedidosdetallePageModule {}
