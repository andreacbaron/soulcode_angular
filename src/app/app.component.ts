import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  dadosUsuario = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  }
  enviarForm() {
    alert('Formulario enviado')
  }

}
 

