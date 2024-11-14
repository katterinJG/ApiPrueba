import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/servicios/general.service';
import { ProductosPage } from '../productos/productos.page';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: any[] = [];

  constructor(
    private productosPage: ProductosPage, // Accede al carrito de ProductosPage
    public servG: GeneralService
  ) { }

  ngOnInit() {
    this.carrito = this.productosPage.carrito;
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.prod_precio, 0);
  }

  finalizarCompra() {
    console.log("Compra finalizada con total de:", this.calcularTotal());
    this.carrito = []; // Limpia el carrito después de finalizar la compra
  }
}
