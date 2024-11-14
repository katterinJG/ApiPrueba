import { LoadingController } from '@ionic/angular';
import { GeneralService } from './../../servicios/general.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  public id:number=0;
  objCliente:any={
   cli_id:0,
   cli_identificacion:"",
   cli_nombre:"",
   cli_telefono:"",
   cli_correo:"",
   cli_direccion:"",
   cli_pais:"",
   cli_ciudad:""
  }
  //public objCliente:ICliente={};
  constructor(
    private servG:GeneralService,
    public loading:LoadingController,
    public servC:ClientesService,
    public route:ActivatedRoute
  ) { 
    this.id=this.route.snapshot.params["id"]?this.route.snapshot.params["id"]:0;
    console.log("id:"+this.id);
  }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    if(this.id>=0){
      let l = await this.loading.create();
      l.present();
       await this.servC.fun_ClientesxId(this.id).subscribe(
        (datos:any)=>{
          l.dismiss();
            if(datos.cli_id>0){
              this.objCliente=datos;
            }else{
              this.servG.fun_Mensaje("El cliente no existe");
            }
        },(error)=>{
          l.dismiss();
          this.servG.fun_Mensaje("Error al consultar un cliente");
          this.servG.irA('/clientes');
        }
      );
    }
    

  }

  async Grabar(){
    if(this.objCliente.cli_identificacion==''){
      this.servG.fun_Mensaje("Debe registrar la cédula del cliente: ");

    }else{
      //si todos los lados fueron validados
      let l= await this.loading.create();
      l.present();
      await this.servC.GrabarCliente(this.objCliente).subscribe(
        (datos: any)=>{
          l.dismiss();
          this.servG.fun_Mensaje("Se registro con exito");
          if(datos.cli_id>0){
            this.servG.irA('/clientes');

          }

        },(error)=>{
          l.dismiss();
          this.servG.fun_Mensaje('Error al grabar el cliente', 'danger');

        }
      );


    }
    
  }
  
}
