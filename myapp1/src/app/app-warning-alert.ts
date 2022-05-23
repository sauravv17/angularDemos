import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>This is a warning!</p>',
  styles: [
    `
      p {
        padding: 10px;
        background-color: mystyrose;
        border: 2px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
