import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private servG:GeneralService,
    private http: HttpClient
  ) { }

  get_productos(){
    let miUrl=this.servG.URLAPI+'productos';
    return this.http.get<any>(miUrl);
  }
  get_productoxid(id:any){
    let miUrl=this.servG.URLAPI+'productos/'+id;
    return this.http.get<any>(miUrl);
  }
  ProductoGuardar(producto: any, imagen: File){
    let miUrl=this.servG.URLAPI+'productos/';
    console.log("Grabar"+JSON.stringify(producto));
    const formData = new FormData();
     // Agregar datos del producto al FormData
  formData.append('prod_id', producto.prod_id);
  formData.append('prod_codigo', producto.prod_codigo);
  formData.append('prod_nombre', producto.prod_nombre); // Convertir a string si es necesario
  formData.append('prod_stock', producto.prod_stock);
  formData.append('prod_precio', producto.prod_precio);
  formData.append('prod_activo', producto.prod_activo);
  formData.append('prod_imagen', producto.prod_imagen);
  // Agregar imagen al FormData
  formData.append('prod_imagen', imagen, imagen.name);
    return this.http.post(miUrl,formData);
  }

  

}
