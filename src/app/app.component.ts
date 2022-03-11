import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hola</h1> <p>Viernes</p>',
  styles: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
