import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WarningAlertComponent } from './app-warning-alert';

import { AppComponent } from './app.component';
import { AppSuccessAlertComponent } from './app-success-alert/app-success-alert.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    AppSuccessAlertComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
