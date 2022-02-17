import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { AppComponent } from './app.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: '' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SocketIoModule.forRoot(config), RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
