import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
import { File }from '@ionic-native/file'
@Injectable( 
)
export class BackEndService
{
constructor(public http:Http,private file:File)
{

}
DownloadUpdatedJson(ID,Rev)
{
    return new Promise<BackEndService>((resolve, reject) =>
    {
        
        console.log("ID = "+ID);
        console.log("Rev = "+Rev);
        this.http.get("https://i18n.mybluemix.net/RetData?ID=\""+ID+"\"&Rev=\""+Rev+"\"").subscribe(Response=>
        {
            
            if(Response.json()._id=="updated")
                {
                   console.log("Json File is already updated");
                }
                else
                    {
                        console.log(Response.json());
                     this.file.writeFile(this.file.applicationStorageDirectory,ID+".json",Response.json().value,{replace:true}).then(Success=>{

                         console.log("Json file is downloaded and updated to the latest ..");
                     }).catch(Fail=>{
                         console.log("Error Cannot Update Json File");
                         reject(Fail);
                     })
                    }
    
        })
    })

}

}