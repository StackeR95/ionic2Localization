import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import{availableLanguages,defaultLanguage}from './Constants'
import {BackEndService}from '../../NodeServices.component'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
//  templateUrl: 'home.html'
export class HomePage {
  languages=availableLanguages;
  selectedLanguage=defaultLanguage;
  ;
  constructor(public translate: TranslateService,public DataBase:BackEndService) 
  {


     translate.getTranslation(defaultLanguage).subscribe(value=>{
      DataBase.DownloadUpdatedJson(defaultLanguage,value['_rev']);
      
     // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(defaultLanguage);
    // the lang to use, if the lang isn't available, it will use the current loader which implemented in app.module to get them
      translate.use(defaultLanguage);
    })

}
  ChooseLanguage()
  {
    this.translate.getTranslation(this.selectedLanguage).subscribe(value=>{

      this.DataBase.DownloadUpdatedJson(this.selectedLanguage,value['_rev'])
      
    })
    this.translate.use(this.selectedLanguage);
 
  }
}
