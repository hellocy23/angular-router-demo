import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductComponent, Code404Component, SellerInfoComponent, ProductDescComponent, ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
