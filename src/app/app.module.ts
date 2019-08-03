import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobModalPage } from './job-modal/job-modal.page';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [
    HttpClientModule,
    IonicStorageModule.forRoot(), 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
=======
  declarations: [AppComponent, JobModalPage],
  entryComponents: [JobModalPage],
  imports: [IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot(), AppRoutingModule],
>>>>>>> 43a368fc3f4e6e6d01c4bfd6abda255c41121b7b
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
