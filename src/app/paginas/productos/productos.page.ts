import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { GeneralService } from 'src/app/servicios/general.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: any[] = [];
  carrito: any[] = []; // Lista para almacenar el carrito de compras
  servidor: string = "https://api2024-2-90op.onrender.com";
  // servidor:string="localhost:3000";

  constructor(
    private servP: ProductosService,
    private loading: LoadingController,
    public servG: GeneralService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.CargarProductos();
  }

  async CargarProductos() {
    let l = await this.loading.create();
    l.present();
    await this.servP.get_productos().subscribe(
      (respuesta: any) => {
        this.productos = respuesta.datos;
        console.log(this.productos);
        l.dismiss();
      },
      (error: any) => {
        l.dismiss();
      }
    );
  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto); // Agrega el producto al carrito
    console.log("Producto añadido al carrito:", producto);
  }

  verCarrito() {
    this.servG.irA("carrito"); // Navega a la página del carrito
  }

  fun_Editar(id: any) {
    this.servG.irA("producto/" + id);
  }

  fun_Eliminar(id: any) {
    // Funcionalidad para eliminar producto si es necesario
  }
} // fin clase
