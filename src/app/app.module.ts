import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http} from '@angular/http'
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { File }from '@ionic-native/file'
import {BackEndService}from '../NodeServices.component'
export function createTranslateLoader(http: Http) 
{
  return new TranslateHttpLoader(http, 'file:///data/data/io.ionic.starter/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
      }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    BackEndService,
    File,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
constructor(file:File,DataBase:BackEndService)
{
  file.copyFile(file.applicationDirectory+'www/assets/Langs/','ar.json',file.applicationStorageDirectory,"").catch(Down=>{
  console.log("Didn't Find Arabic Language  file downloading it now ");
    DataBase.DownloadUpdatedJson("ar",0);
  });
  file.copyFile(file.applicationDirectory+'www/assets/Langs/','en.json',file.applicationStorageDirectory,"").catch(Down=>{
    console.log("Didn't Find English Language  file downloading it now ");
      DataBase.DownloadUpdatedJson("en",0);
    });;
  file.copyFile(file.applicationDirectory+'www/assets/Langs/','es.json',file.applicationStorageDirectory,"").catch(Down=>{
    console.log("Didn't Find Spanish Language  file downloading it now ");
      DataBase.DownloadUpdatedJson("es",0);
    });;
}

}
