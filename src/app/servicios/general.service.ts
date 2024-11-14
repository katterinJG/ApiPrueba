import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public URLAPI: string = "https://apiprueba-4fqk.onrender.com/api/";
  public URLSERV: string = "https://apiprueba-4fqk.onrender.com";

  /*
  public URLAPI:string="http://localhost:3000/api/";
  public URLSERV:string ="http://localhost:3000";
  */
  constructor(
    private router: Router,
    private toast: ToastController
  ) { }

  // Funciones generales
  irA(url: string) {
    this.router.navigate([url]);  // Cambia navigateByUrl a navigate
  }

  // Función para emitir mensaje
  async fun_Mensaje(texto: string, tipo: string = 'success') {
    const t = await this.toast.create({
      message: texto,
      color: tipo,
      duration: 3000
    });
    t.present();
  }

  imagenUrl(urlimagen: any) {
    return `${this.URLSERV}${urlimagen}`;
  }
}
