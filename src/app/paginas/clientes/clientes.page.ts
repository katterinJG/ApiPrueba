import { GeneralService } from './../../servicios/general.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  listaClientes:any[]=[];
  constructor(
    private servC:ClientesService,
    private loading:LoadingController,
    public servG:GeneralService,
    private alert:AlertController
    ) { }

  ngOnInit() {
   
  }
  ionViewWillEnter(){
    this.cargarClientes();
  }

 async  cargarClientes(){
  let l=await this.loading.create();
  l.present();
    this.servC.fun_listarClientes().subscribe(
      (respuesta:any)=>{
        this.listaClientes=respuesta;
        console.log(this.listaClientes);
        l.dismiss();
      },(error:any)=>{
        l.dismiss();
        this.servG.fun_Mensaje("Error al recuperar los clientes");
      }
    );
  }

  fun_editar(id:any,ionItemSliding:IonItemSliding){
    ionItemSliding.close();
    console.log(id);
    this.servG.irA('/cliente/'+id);

     
  }

  async fun_eliminar(cliente:any,ionItemSliding:IonItemSliding){
    console.log(cliente);
    ionItemSliding.close();
    let alert = await this.alert.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea eliminar el cliente [' + cliente.cli_nombre + ']?',
      buttons: [
        {
          text: 'Si',
          handler: async () => {
            let l = await this.loading.create({
              message: 'Borrando...'
            });
            l.present();
           //borrar
           await this.servC.Cliente_Borrar(cliente.cli_id).subscribe(
            (datos: any)=>{
              l.dismiss();
              this.servG.fun_Mensaje(datos.message);
            }
           ),
           (error:any)=>{
            console.error('Error al borrar el cliente', error);
            
          }
          }
          
        },
        {
          text: 'No',
          handler: () => { }
        }
      ]
    });
    alert.present();
  }//FIN ELIMINAR
  
  
}
