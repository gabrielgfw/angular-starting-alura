import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any;

  transferir($event) {
    console.log('Entrou no App Component.')
    this.transferencia = $event;
  }
}
