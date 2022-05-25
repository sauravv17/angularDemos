import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.accounts;
    this.accountService.accountDeleted.subscribe((name: string) => {
      alert('Account ' + name + ' deleted.');
      //console.log('Account ' + name + ' deleted.');
    });
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert('Account status updated');
      //console.log('Account status updated');
    });
  }

  ngOnInit(): void {}
}
