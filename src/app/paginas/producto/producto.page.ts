import { GeneralService } from 'src/app/servicios/general.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
 id:any=0;
 selectedImage: string | null = null;
 objProducto:any={
  prod_id: 0,
  prod_codigo:'',
  prod_nombre:'' ,
  prod_stock:0,
  prod_precio:0,
  prod_activo:0,
  prod_imagen:null
 }
  constructor(
   private route:ActivatedRoute,
   private loading:LoadingController,
   public servG:GeneralService,
   private servP:ProductosService
  ) {
    this.id=this.route.snapshot.params["id"]?this.route.snapshot.params["id"]:0;
    console.log("id:"+this.id);
   }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.fun_recuperarProducto(this.id);
  }
  async fun_recuperarProducto(id:any){
   if(id>0){
    //recuperar la información
     let l=await this.loading.create();
     l.present();
     this.servP.get_productoxid(id).subscribe(
      (respuesta:any)=>{
        console.log(respuesta);
        /*this.objProducto.prod_id=respuesta.prod_id;
        this.objProducto.prod_codigo=respuesta.prod_codigo;
        this.objProducto.prod_nombre=respuesta.prod_nombre;
        this.objProducto.prod_stock=respuesta.prod_stock;
        this.objProducto.prod_precio=respuesta.prod_precio;
        this.objProducto.prod_activo=respuesta.prod_activo;
        this.objProducto.prod_imagen=respuesta.prod_imagen;
        */
        this.objProducto=respuesta;
        l.dismiss();
      },(error:any)=>{
        l.dismiss();
        this.servG.irA("/productos");
      }
     );
   }
  }
  

  Capturar_Foto(){

  }

  async Guardar(){
    if (this.objProducto.prod_codigo == '') {
      this.servG.fun_Mensaje('Debe ingresar el código.', 'warning');
    } else if (this.objProducto.prod_nombre == '') {
      this.servG.fun_Mensaje('Debe ingresar el nombre.', 'warning');
    } else if (this.objProducto.prod_stock == 0) {
      this.servG.fun_Mensaje('Debe ingresar el stock.', 'warning');
    } else if (this.objProducto.prod_precio == 0 ) {
      this.servG.fun_Mensaje('Debe ingresar el precio.', 'warning');
    } else {
      let l = await this.loading.create();
      l.present();

      /*  this.servP.ProductoGuardar(
        this.objProducto
       ).subscribe((data:any)=>{
         console.log(data);
         l.dismiss();
         this.servG.fun_Mensaje(data.mensaje,data.prod_id==0 ? 'danger':'success');
        //console.log("id:" + data.info.id); 
        if(data.id > 0){
           //console.log("entro");
           this.servG.irA('/productos');
         }
      },_=>{
        l.dismiss();
        this.servG.fun_Mensaje("Error al grabar",'danger');
       }); */
    }
  }
}
