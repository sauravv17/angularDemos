import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, AccountService],
})
export class AppComponent {
  title = 'myapp2';
}
