import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http:HttpClient,
    private servG:GeneralService
  ) { }

  fun_listarClientes(){
    let miUrl=this.servG.URLAPI+'clientes';
    return this.http.get<any>(miUrl);
  }
  fun_ClientesxId(id:any){
    let miUrl=this.servG.URLAPI+'clientes/'+id;
    return this.http.get<any>(miUrl);
  }
  //crear un nuevo cliente/ Editar cliente
  GrabarCliente(objCliente:any){
    let url ="";
    if(objCliente.cli_id>0){
      //Editar
      url = this.servG.URLAPI+"clientes/"+objCliente.cli_id;
      return this.http.put<any>(url,objCliente);
    }else{
      //insert
      url = this.servG.URLAPI+"clientes";
      return this.http.post<any>(url,objCliente);
    }
  
  
  }
  
  Cliente_Borrar(id:number){
    let url = this.servG.URLAPI+"clientes/"+id;
    return this.http.delete<any>(url);


  }



}
