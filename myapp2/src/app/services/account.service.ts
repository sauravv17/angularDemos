import { EventEmitter } from '@angular/core';

export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'Active',
    },
    {
      name: 'Test Account',
      status: 'InActive',
    },
    {
      name: 'Hidden Account',
      status: 'Unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  accountDeleted = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
  deleteAccount(id: number) {
    this.accounts.splice(id, 1);
  }
}
