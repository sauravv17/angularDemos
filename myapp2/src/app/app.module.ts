import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CockpitComponent } from './products/cockpit/cockpit.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHilightDirective } from './BasicHilightDirective';
import { AccountsComponent } from './accounts/accounts.component';

import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { ObservablesComponent } from './observables/observables.component';
import { ServersComponent } from './servers/servers.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
// import { BetterHilightDirective } from './BetterHilightDirective';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'observable', component: ObservablesComponent },
  { path: 'servers', component: ServersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CockpitComponent,
    ProductComponent,
    NumbersComponent,
    BasicHilightDirective,
    AccountsComponent,

    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ViewuserComponent,
    ObservablesComponent,
    ServersComponent,
    ShortenPipe,
    FilterPipe,
    // BetterHilightDirective,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
